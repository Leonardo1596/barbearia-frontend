import React, { useEffect, useState } from 'react';
import * as C from './styles';
import api from '../../services/api';

const Index = ({ type, togglePopup, createProduct, createAppointment, createService, editAppointment, isEditing, data }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [isPopupTransactionStatusOpen, setIsPopupTransactionStatusOpen] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState('');

    const [barbers, setBarbers] = useState([]);
    const [services, setServices] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [formData, setFormData] = useState({
        client_name: '',
        barber: '',
        barbershop: user.barbershop,
        services: '',
        date: '',
        hour: '',
        status: '',
        paymentStatus: ''
    });
    const [formDataService, setFormDataService] = useState({
        name: '',
        duration: '',
        barbershop: user.barbershop,
        price: ''
    });
    const [formDataProduct, setFormDataProduct] = useState({
        name: '',
        description: '',
        barbershop: user.barbershop,
        price: '',
        stock: ''
    });


    useEffect(() => {
        async function fetchBarbers() {
            const response = await api.get(`/get_all_barbers/${user.barbershop}`);
            setBarbers(response.data);
            console.log(response.data);
        };

        async function fetchServices() {
            const response = await api.get(`/get_services/${user.barbershop}`);
            setServices(response.data);
        }

        async function fetchAvailableSlots(barberId, date) {
            if (!barberId || !date) return;

            const objDate = new Date(`${formData.date}T12:00:00`);
            const dayName = objDate.toLocaleDateString('pt-BR', { weekday: 'long' });
            console.log(formData.date);
            console.log(objDate);
            console.log(dayName);

            if (dayName === 'domingo') {
                console.log('Barbeiro não trabalha nesse dia');
                alert('Este dia está indisponível');
                formData.date = '';
                formData.hour = '';
                return;
            }

            try {
                const response = await api.get(`/available-slots/${barberId}/${date}`)
                setAvailableSlots(response.data);
            } catch (error) {
                console.error("Erro ao buscar horários disponíveis:", error);
            }
        };
        fetchBarbers();
        fetchServices();
        fetchAvailableSlots(formData.barber, formData.date);
    }, [formData.barber, formData.date]);

    // Função para lidar com a mudança de dados nos campos do formulário
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (type === 'agendamentos') {
            if (name === 'date') {
                setFormData({
                    ...formData,
                    [name]: value
                });
                return;
            }

            setFormData({
                ...formData,
                [name]: value,
            });
            if (name === 'status' && value === 'Concluído') {
                setIsPopupTransactionStatusOpen(true);
            }
        } else if (type === 'serviços') {
            setFormDataService({
                ...formDataService,
                [name]: value,
            });
        } else if (type === 'produtos') {
            setFormDataProduct({
                ...formDataProduct,
                [name]: value,
            });
        }
    };

    // Função para lidar com a seleção de serviços
    const handleServiceChange = (e) => {
        const { options } = e.target;
        const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);
        setSelectedServices(selectedOptions);
        setFormData({
            ...formData,
            services: selectedOptions
        });
        console.log(formData.services);
        setPaymentStatus()
    };

    // Função para enviar os dados do formulário para o backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            if (type === 'agendamentos') {
                if (!isEditing) {
                    createAppointment(formData);
                    togglePopup();
                } else {
                    const updatedData = {
                        ...data,
                        ...formData
                    };
                    editAppointment(updatedData);
                    togglePopup();
                    return;
                }

            }
            if (type === 'serviços') {
                createService(formDataService);
                togglePopup();
            }

            if (type === 'produtos') {
                createProduct(formDataProduct);
                togglePopup();
            }
        } catch (error) {

        }
    };
    return (
        <div>
            {type === 'agendamentos' && (
                <>
                    <C.PopupOverlay onClick={togglePopup}>
                        <C.Popup onClick={(e) => e.stopPropagation()}>
                            <C.CloseButton onClick={togglePopup}>X</C.CloseButton>
                            {!isEditing ? <C.Title>Novo agendamento</C.Title> : <C.Title>Editar agendamento</C.Title>}
                            <C.Form onSubmit={handleSubmit}>
                                <C.FromGroup>
                                    <C.Label>
                                        Nome do cliente
                                    </C.Label>
                                    <C.Input
                                        type="text"
                                        name="client_name"
                                        value={formData.client_name}
                                        onChange={handleInputChange}
                                    />
                                </C.FromGroup>
                                <C.FromGroup>
                                    <C.Label>
                                        Barbeiro
                                    </C.Label>
                                    <select
                                        name="barber"
                                        value={formData.barber}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Selecione</option>
                                        {barbers.map((barber, key) => (
                                            <option key={barber._id} value={barber._id}>{barber.name}</option>
                                        ))}
                                    </select>
                                </C.FromGroup>


                                <C.FromGroup>
                                    <C.Label>
                                        Serviços
                                    </C.Label>
                                    <select
                                        name="services"
                                        multiple
                                        value={formData.services}
                                        onChange={handleServiceChange}
                                    >
                                        {services.map((service) => (
                                            <option key={service._id} value={service._id}>
                                                {service.name}
                                            </option>
                                        ))}
                                    </select>


                                </C.FromGroup>
                                <C.FromGroup>
                                    <C.Label>
                                        Data
                                    </C.Label>
                                    <C.Input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                    />
                                </C.FromGroup>

                                <C.FromGroup>
                                    <C.Label>
                                        Hora
                                    </C.Label>
                                    <select
                                        name="hour"
                                        value={formData.hour}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Selecione</option>
                                        {availableSlots.map((slot, index) => (
                                            <option key={index} value={slot}>{slot}</option>
                                        ))}
                                    </select>
                                </C.FromGroup>



                                
                                <button type="submit">Salvar</button>
                            </C.Form>
                        </C.Popup>
                    </C.PopupOverlay>
                </>
            )}
            {type === 'serviços' && (
                <>
                    <C.PopupOverlay onClick={togglePopup}>
                        <C.Popup onClick={(e) => e.stopPropagation()}>
                            <C.CloseButton onClick={togglePopup}>X</C.CloseButton>
                            <C.Title>Novo Serviço</C.Title>
                            <C.Form onSubmit={handleSubmit}>
                                <C.FromGroup>
                                    <C.Label>
                                        Nome do serviço
                                    </C.Label>
                                    <C.Input
                                        type="text"
                                        name="name"
                                        value={formDataService.name}
                                        onChange={handleInputChange}
                                    />
                                </C.FromGroup>
                                <C.FromGroup>
                                    <C.Label>
                                        Duração
                                    </C.Label>
                                    <C.Input type="Number" name="duration" value={formDataService.duration} onChange={handleInputChange} />
                                </C.FromGroup>


                                <C.FromGroup>
                                    <C.Label>
                                        Preço
                                    </C.Label>
                                    <C.Input type="Number" name="price" value={formDataService.price} onChange={handleInputChange} />
                                </C.FromGroup>
                                <button type="submit">Salvar</button>
                            </C.Form>
                        </C.Popup>
                    </C.PopupOverlay>
                </>
            )}
            {type === 'produtos' && (
                <>
                    <C.PopupOverlay onClick={togglePopup}>
                        <C.Popup onClick={(e) => e.stopPropagation()}>
                            <C.CloseButton onClick={togglePopup}>X</C.CloseButton>
                            <C.Title>Novo Produto</C.Title>
                            <C.Form onSubmit={handleSubmit}>
                                <C.FromGroup>
                                    <C.Label>
                                        Nome do produto
                                    </C.Label>
                                    <C.Input
                                        type="text"
                                        name="name"
                                        value={formDataProduct.name}
                                        onChange={handleInputChange}
                                    />
                                </C.FromGroup>
                                <C.FromGroup>
                                    <C.Label>
                                        Descrição
                                    </C.Label>
                                    <C.Input type="text" name="description" value={formDataProduct.description} onChange={handleInputChange} />
                                </C.FromGroup>


                                <C.FromGroup>
                                    <C.Label>
                                        Preço
                                    </C.Label>
                                    <C.Input type="Number" name="price" value={formDataProduct.price} onChange={handleInputChange} />
                                </C.FromGroup>

                                <C.FromGroup>
                                    <C.Label>
                                        Estoque
                                    </C.Label>
                                    <C.Input type="Number" name="stock" value={formDataProduct.stock} onChange={handleInputChange} />
                                </C.FromGroup>
                                <button type="submit">Salvar</button>
                            </C.Form>
                        </C.Popup>
                    </C.PopupOverlay>
                </>
            )}
        </div>
    )
}

export default Index;
