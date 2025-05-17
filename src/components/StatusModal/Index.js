import React, { useState } from 'react';
import * as C from './styles';

const Index = ({ toggleStatusModal, editAppointment, data }) => {
    const [formData, setFormData] = useState({
        status: '',
        paymentStatus: ''
    });

    // Função para lidar com a mudança de dados nos campos do formulário
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Função para enviar os dados do formulário para o backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const updatedData = {
                ...data,
                ...formData
            };
            editAppointment(updatedData);
            return;
        } catch (error) {

        }
    };

    return (
        <div>
            <C.PopupOverlay>
                <C.Popup>
                    <C.CloseButton onClick={toggleStatusModal}>X</C.CloseButton>
                    <C.Title>Editar status do agendamento</C.Title>
                    <C.Form onSubmit={handleSubmit}>
                        <C.FormGroup>
                            <C.Label>
                                Status
                            </C.Label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                            >
                                <option>Selecione</option>
                                <option>Agendado</option>
                                <option>Concluído</option>
                            </select>
                        </C.FormGroup>

                        <C.FormGroup>
                            <C.Label>
                                Status de pagamento
                            </C.Label>
                            <select
                                name="paymentStatus"
                                value={formData.paymentStatus}
                                onChange={handleInputChange}
                            >
                                <option>Selecione</option>
                                <option>Pago</option>
                                <option>Pendente</option>
                            </select>
                        </C.FormGroup>
                        <button type="submit">Salvar</button>
                    </C.Form>
                </C.Popup>
            </C.PopupOverlay>
        </div>
    )
}

export default Index