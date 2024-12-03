import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { FaChartLine, FaCreditCard, FaChartArea, FaCut, FaCartPlus, FaCalendarAlt } from "react-icons/fa";
import api from '../../services/api';
import getMonthDates from '../../services/getMonthDates';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Card from '../../components/Card/Index';
import Chart from '../../components/Chart/Chart';

const Index = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { startDate, endDate } = getMonthDates();
  const [reportData, setReportData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    // Fetch report
    async function fetchReport() {
      try {
        const response = await api.get(`partial-monthly-report/${user.barbershop}?startDate=${startDate}&endDate=${endDate}`);
        setReportData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    };

    // Fetch appointments
    async function fetchAppointments() {
      try {
        const response = await api.get(`get_appointement/${user.barbershop}?startDate=${startDate}&endDate=${endDate}`);
        setAppointmentData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    }
    fetchReport();
    fetchAppointments();
  }, []);
  return (
    <div>
      <C.Home>
        <C.Container>
          <C.TitleContainer>
            <C.Title>Dashboard</C.Title>
            <C.BarbershopName>{!reportData ? (
              <Skeleton width={150} height={20} />
            ) : (
              user.barbershopName
            )}</C.BarbershopName>
          </C.TitleContainer>
          <C.CardContainer>
            <Card
              title='Receita Mensal'
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
          <Chart />
        </C.Container>
      </C.Home >

    </div >
  )
}

export default Index