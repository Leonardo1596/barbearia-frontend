import React, { useEffect, useState } from 'react';
import * as C from './styles';
import api from '../../services/api';
import getMonthDates from '../../services/getMonthDates';
import Table from '../../components/Table/Index';
import Popup from '../../components/Popup/Index';

const Index = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { startDate, endDate } = getMonthDates();
    const [appointments, setAppointments] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    async function getAppointments() {
        try {
            const response = await api.get(`get_appointment/${user.barbershop}?startDate=${startDate}&endDate=${endDate}`);
            setAppointments(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao buscar agendamentos', error);
        }
    };

    async function createAppointment(data) {
        try {
            let body = data;
            const response = await api.post('/create_appointment', body);
            // console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao criar agendamento', error);
        }
    }

    async function editAppointment(data) {
        try {
            let body = data;
            const response = await api.put(`/update_appointment/${body._id}`, body);
            // console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao editar agendamento', error);
        }
    }

    useEffect(() => {
        getAppointments();
    }, []);

    return (
        <div>
            {isPopupOpen && (
                <Popup type='agendamentos' togglePopup={togglePopup} createAppointment={createAppointment} editAppointment={editAppointment} isEditing={false} />
            )}
            <C.Appointments>
                <C.Container>
                    <C.TitleContainer>
                        <C.Title>Agendamentos</C.Title>
                        <C.Description>Lista de agendamentos</C.Description>
                    </C.TitleContainer>
                    <C.HeaderContainer>
                        <C.SearchContainer>
                            <C.SearchIcon />
                            <C.SearchInput placeholder='Buscar por barbeiro' />
                            <C.AddButton onClick={togglePopup}>Adicionar</C.AddButton>
                        </C.SearchContainer>
                    </C.HeaderContainer>
                    {appointments ? <Table data={appointments.reverse()} type='agendamentos' api={api} editAppointment={editAppointment} /> : 'Carergando...'}
                </C.Container>
            </C.Appointments>
        </div>
    )
}

export default Index;