import React, { useEffect, useState } from 'react';
import * as C from './styles';
import api from '../../services/api';
import getMonthDates from '../../services/getMonthDates';
import MonthSelector from '../../components/MonthSelector/Index';
import Table from '../../components/Table/Index';
import Popup from '../../components/Popup/Index';
import StatusModal from '../../components/StatusModal/Index';

const Index = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [appointments, setAppointments] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date()); // Inicializando com a data atual

    const handleMonthChange = (newMonth) => {
        setCurrentMonth(newMonth);
    };

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    async function getAppointments(startDate, endDate) {
        try {
            const response = await api.get(`get_appointment/${user.barbershop}?startDate=${startDate}&endDate=${endDate}`);
            setAppointments(response.data);
        } catch (error) {
            console.error('Erro ao buscar agendamentos', error);
        }
    };

    async function createAppointment(data) {
        try {
            const response = await api.post('/create_appointment', data);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao criar agendamento', error);
        }
    }

    async function editAppointment(data) {
        try {
            const response = await api.put(`/update_appointment/${data._id}`, data);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao editar agendamento', error);
        }
    }

    useEffect(() => {
        const { startDate, endDate } = getMonthDates(currentMonth); // Atualiza startDate e endDate
        getAppointments(startDate, endDate); // Passa os novos valores para a API
    }, [currentMonth]); // Reexecuta quando o mês mudar

    return (
        <div>
            {isPopupOpen && (
                <Popup type='agendamentos' togglePopup={togglePopup} createAppointment={createAppointment} editAppointment={editAppointment} isEditing={false} />
                // <StatusModal togglePopup={togglePopup} editAppointment={editAppointment} />
            )}
            <C.Appointments>
                <C.Container>
                    <C.TitleContainer>
                        <C.Title>Agendamentos
                        <C.Description>Lista de agendamentos</C.Description>
                        </C.Title>
                        
                    <MonthSelector currentMonth={currentMonth} onMonthChange={handleMonthChange} />
                    </C.TitleContainer>
                    <C.HeaderContainer>
                        <C.SearchContainer>
                            <C.SearchIcon />
                            <C.SearchInput placeholder='Buscar por barbeiro' />
                            <C.AddButton onClick={togglePopup}>Criar agendamento</C.AddButton>
                        </C.SearchContainer>
                    </C.HeaderContainer>
                    {appointments ? (
                        <Table data={appointments.sort((a, b) => {
                            const dateA = new Date(a.date);
                            const dateB = new Date(b.date);

                            if (dateA.getTime() !== dateB.getTime()) {
                                return dateA - dateB;
                            }

                            const [hourA, minuteA] = a.hour.split(':').map(Number);
                            const [hourB, minuteB] = b.hour.split(':').map(Number);
                            const timeA = hourA * 60 + minuteA;
                            const timeB = hourB * 60 + minuteB;

                            return timeA - timeB;
                        })} type='agendamentos' api={api} editAppointment={editAppointment} />
                    ) : 'Carregando...'}
                </C.Container>
            </C.Appointments>
        </div>
    );
};

export default Index;
