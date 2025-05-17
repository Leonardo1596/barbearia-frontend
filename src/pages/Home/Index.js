import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { FaChartLine, FaCreditCard, FaChartArea, FaCut, FaCartPlus, FaCalendarAlt } from "react-icons/fa";
import api from '../../services/api';
import getMonthDates from '../../services/getMonthDates';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import MonthSelector from '../../components/MonthSelector/Index';
import Card from '../../components/Card/Index';
import Chart from '../../components/Chart/Chart';
import List from '../../components/List/Index';

const Index = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  // const { startDate, endDate } = getMonthDates();
  const [reportData, setReportData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [allAppointments, setAllAppointments] = useState(null);

  const [currentMonth, setCurrentMonth] = useState(new Date()); // Inicializando com a data atual

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { startDate, endDate } = getMonthDates(currentMonth);
        const [reportRes, appointmentRes, allAppointmentsRes] = await Promise.all([
          api.get(`partial-monthly-report/${user.barbershop}?startDate=${startDate}&endDate=${endDate}`),
          api.get(`get_appointment/${user.barbershop}?startDate=${startDate}&endDate=${endDate}`),
          api.get(`/get_all_appointments/${user.barbershop}`)
        ]);
        console.log(reportRes.data);

        setReportData(reportRes.data);
        setAppointmentData(appointmentRes.data);
        setAllAppointments(allAppointmentsRes.data);
      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    }
    fetchData();
  }, [currentMonth]);

  return (
    <div>
      <C.Home>
        <C.Container>
          <C.TitleContainer>
            <C.Title>Dashboard
              <C.BarbershopName>{!reportData ? (
                <Skeleton width={150} height={20} />
              ) : (
                user.barbershopName
              )}</C.BarbershopName>
            </C.Title>
            <MonthSelector currentMonth={currentMonth} onMonthChange={handleMonthChange} />
          </C.TitleContainer>
          <C.CardContainer>
            <Card
              title='Saldo'
              content={!reportData ? (
                <Skeleton width={100} height={15} />
              ) : (
                `R$ ${reportData.Saldo_total.toFixed(2).replace('.', ',')}`
              )
              }
              iconName={FaChartLine}
              iconColor='#28a745'
            />
            <Card
              title='Receita Mensal'
              content={!reportData ? (
                <Skeleton width={100} height={15} />
              ) : (
                `R$ ${reportData.Total_receitas.toFixed(2).replace('.', ',')}`
              )
              }
              iconName={FaChartLine}
              iconColor='#28a745'
            />
            <Card
              title='Ganho Semanal'
              content={!reportData ? (
                <Skeleton width={100} height={15} />
              ) : (
                `R$ ${reportData.Ganho_semanal.toFixed(2).replace('.', ',')}`
              )
              }
              iconName={FaChartArea}
              iconColor='#007bff'
            />
            <Card
              title='Despesa Mensal'
              content={!reportData ? (
                <Skeleton width={100} height={15} />
              ) : (
                `R$ ${reportData.Total_despesas.toFixed(2).replace('.', ',')}`
              )
              }
              iconName={FaCreditCard}
              iconColor='#e74c3c'
            />
            <Card
              title='Serviços Realizados'
              content={!reportData ? (
                <Skeleton width={100} height={15} />
              ) : (
                reportData.Total_servicos_concluidos
              )
              }
              iconName={FaCut}
              iconColor='#ffc107'
            />
            <Card
              title='Produtos Vendidos'
              content={!reportData ? (
                <Skeleton width={100} height={15} />
              ) : (
                reportData.Total_produtos_vendidos
              )
              }
              iconName={FaCartPlus}
              iconColor='#8A2BE2'
            />
            <Card
              title='Agendamentos'
              content={!appointmentData ? (
                <Skeleton width={100} height={15} />
              ) : (
                appointmentData.length
              )
              }
              iconName={FaCalendarAlt}
              iconColor='#2F4F4F'
            />
          </C.CardContainer>
          <C.ContentWrapper>
            <Chart />
            <List appointments={allAppointments && allAppointments.reverse()} />
          </C.ContentWrapper>
        </C.Container>
      </C.Home >
    </div >
  )
}

export default Index