import React, { useState } from 'react';
import * as C from './styles';
import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Popup from '../Popup/Index';
import StatusModal from '../StatusModal/Index';
import ConfirmationPopup from '../ConfirmationPopup/Index';

const Index = ({ data, type, api, editAppointment }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
    const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
    const [isPopupTransactionStatusOpen, setIsPopupTransactionStatusOpen] = useState(false)
    const [currentAppointment, setCurrentAppointment] = useState({});
    const [selectedItem, setSelectedItem] = useState(null);
    const [formData, setFormData] = useState({
        status: ''
    });

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const toggleStatusModal = () => {
        setIsStatusModalOpen(!isStatusModalOpen);
    }

    const toggleConfirmationPopup = () => {
        setIsConfirmationPopupOpen(!setIsConfirmationPopupOpen);
    };

    async function handleRemove(id) {
        setCurrentAppointment(id);
        setIsConfirmationPopupOpen(true);
    }

    const handleEdit = (item) => {
        setSelectedItem(item);
        console.log('item', item);
        setIsPopupOpen(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            [name]: value
        });
    };

    const handleCheckbox = (appointmentId) => {
        setCurrentAppointment({
            _id: appointmentId
        });
        setIsPopupTransactionStatusOpen(true);
    }

    const handleStatusModal = (appointmentId) => {
        setCurrentAppointment({
            _id: appointmentId
        });
        setIsStatusModalOpen(true);
    }

    return (
        <>
            {isPopupOpen && (
                <Popup type={type} togglePopup={togglePopup} editAppointment={editAppointment} isEditing={true} data={selectedItem} />
            )}
            {isStatusModalOpen && (
                <StatusModal toggleStatusModal={toggleStatusModal} editAppointment={editAppointment} isEditing={true} data={currentAppointment} />
            )}
            {isConfirmationPopupOpen && (
                <ConfirmationPopup type={type} title={'Confirmar exclusão'} action={'Excluir'} data={currentAppointment} toggleConfirmationPopup={toggleConfirmationPopup} />
            )}
            <C.Table>
                <C.TableHeader>
                    {type === 'produtos' && (
                        <C.TableRow>
                            <C.TableHeaderCell>Produto</C.TableHeaderCell>
                            <C.TableHeaderCell>Descrição</C.TableHeaderCell>
                            <C.TableHeaderCell>Preço</C.TableHeaderCell>
                            <C.TableHeaderCell>Quantidade</C.TableHeaderCell>
                            <C.TableHeaderCell>Ações</C.TableHeaderCell>
                        </C.TableRow>
                    )}
                    {type === 'agendamentos' && (
                        <C.TableRow>
                            <C.TableHeaderCell>Data</C.TableHeaderCell>
                            <C.TableHeaderCell>Nome do cliente</C.TableHeaderCell>
                            <C.TableHeaderCell>Hora</C.TableHeaderCell>
                            <C.TableHeaderCell>Barbeiro</C.TableHeaderCell>
                            <C.TableHeaderCell>Preço</C.TableHeaderCell>
                            <C.TableHeaderCell>Status</C.TableHeaderCell>
                            <C.TableHeaderCell>Ações</C.TableHeaderCell>
                        </C.TableRow>
                    )}
                    {type === 'serviços' && (
                        <C.TableRow>
                            <C.TableHeaderCell>Serviço</C.TableHeaderCell>
                            <C.TableHeaderCell>Duração</C.TableHeaderCell>
                            <C.TableHeaderCell>Preço</C.TableHeaderCell>
                            <C.TableHeaderCell>Ações</C.TableHeaderCell>
                        </C.TableRow>
                    )}
                </C.TableHeader>
                <C.TableBody>
                    {type === 'produtos' && data.map((product, index) => (
                        <C.TableRow key={index}>
                            <C.TableCell>{product.name}</C.TableCell>
                            <C.TableCell>{product.description}</C.TableCell>
                            <C.TableCell>{(`R$ ${product.price.toFixed(2)}`).replace('.', ',')}</C.TableCell>
                            <C.TableCell>{product.stock}</C.TableCell>
                            <C.TableCell>
                                {/* Botões ou ações aqui */}
                                <C.IconContainer>
                                    <button style={{ border: "none" }}><C.EditIcon /></button>
                                    <button style={{ border: "none" }} onClick={() => handleRemove(product._id)}><C.TrashIcon /></button>
                                </C.IconContainer>
                            </C.TableCell>
                        </C.TableRow>
                    ))}

                    {type === 'agendamentos' && data
                        // Sort by date
                        // .sort((a, b) => {
                        //     const [hourA, minuteA] = a.hour.split(':').map(Number); // Converte "HH:mm" para números
                        //     const [hourB, minuteB] = b.hour.split(':').map(Number);
                        //     const timeA = hourA * 60 + minuteA; // Converte para minutos totais
                        //     const timeB = hourB * 60 + minuteB;
                        //     return timeA - timeB; // Ordena em ordem crescente
                        // })
                        .map((appointment, index) => (
                            <C.TableRow key={index}>
                                <C.TableCell>{new Date(appointment.date).toLocaleDateString("pt-BR", { timeZone: "UTC" })}</C.TableCell>
                                <C.TableCell>{appointment.client_name}</C.TableCell>
                                <C.TableCell>{appointment.hour}</C.TableCell>
                                <C.TableCell>{appointment.barber.name}</C.TableCell>
                                <C.TableCell>{`R$ ${appointment.service.reduce((acc, service) => acc + service.price, 0).toFixed(2).replace('.', ',')}`}</C.TableCell>
                                <C.TableCell>{appointment.status}</C.TableCell>
                                <C.TableCell>
                                    <C.IconContainer>
                                        <button style={{ border: "none" }} onClick={() => handleEdit(appointment)}><C.EditIcon /></button>
                                        <button style={{ border: "none" }} onClick={() => handleRemove(appointment._id)}><C.TrashIcon /></button>
                                        <button style={{ border: "none" }} onClick={() => handleStatusModal(appointment._id)}><C.UpdateIcon /></button>
                                    </C.IconContainer>
                                </C.TableCell>
                            </C.TableRow>
                        ))
                        .reverse()}

                    {type === 'serviços' && data.map((service, index) => (
                        <C.TableRow key={index}>
                            <C.TableCell>{service.name}</C.TableCell>
                            <C.TableCell>{service.duration} minutos</C.TableCell>
                            <C.TableCell>{`R$ ${service.price.toFixed(2).replace('.', ',')}`}</C.TableCell>
                            <C.TableCell>
                                {/* Botões ou ações aqui */}
                                <C.IconContainer>
                                    <button style={{ border: "none" }} onClick={() => handleEdit(service)}><C.EditIcon /></button>
                                    <button style={{ border: "none" }} onClick={() => handleRemove(service._id)}><C.TrashIcon /></button>
                                </C.IconContainer>
                            </C.TableCell>
                        </C.TableRow>
                    ))}
                </C.TableBody>


            </C.Table>
        </>
    );
};

export default Index;
