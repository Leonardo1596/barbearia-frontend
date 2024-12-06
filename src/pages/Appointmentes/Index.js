import React, { useEffect, useState } from 'react';
import * as C from './styles';
import api from '../../services/api';
import getMonthDates from '../../services/getMonthDates';
import Table from '../../components/Table/Index';

const Index = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { startDate, endDate } = getMonthDates();
    const [appointments, setAppointments] = useState(null);

    async function getAppointments() {
        try {
            const response = await api.get(`get_appointement/${user.barbershop}?startDate=${startDate}&endDate=${endDate}`);
            setAppointments(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao buscar agendamentos', error);
        }
    };

    useEffect(() => {
      getAppointments();
    }, [])
    

  return (
    <div>
        <C.Appointments>
            <C.Container>
                <C.TitleContainer>
                    <C.Title>Agendamentos</C.Title>
                    <C.Description>Lista de agendamentos</C.Description>
                </C.TitleContainer>
                {appointments ? <Table data={appointments.reverse()} type='agendamentos' /> : 'Carergando...'}
            </C.Container>
        </C.Appointments>
    </div>
  )
}

export default Index;