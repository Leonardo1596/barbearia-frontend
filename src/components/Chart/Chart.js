import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { getWeekDates } from '../../services/getWeekDates';
import api from '../../services/api';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ClipLoader } from 'react-spinners';

// Registre as escalas e outros componentes necessários
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MyChart = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const { startDate, endDate } = getWeekDates();

    const fetchData = async () => {
      try {
        const response = await api.get(`/daily-data/${user.barbershop}?startDate=${startDate}&endDate=${endDate}`);

        // Processando os dados recebidos
        const aggregatedData = {
          'Seg': 0,
          'Ter': 0,
          'Qua': 0,
          'Qui': 0,
          'Sex': 0,
          'Sab': 0,
          'Dom': 0
        };

        Object.values(response.data).forEach(transaction => {
          // Obter o dia da semana
          const transactionDate = new Date(transaction.date);
          const dayOfWeek = transactionDate.getUTCDay(); // 0: Domingo, 1: Segunda, 2: Terça, etc.

          // Mapear o número do dia para o nome
          const dayLabels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
          const dayName = dayLabels[dayOfWeek];

          // Agregar o valor (totalAmount) para o dia correspondente
          aggregatedData[dayName] += transaction.totalAmount;
        });

        // Atualizando o estado com os dados processados
        setChartData({
          labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
          datasets: [
            {
              label: 'Receita',
              data: [
                aggregatedData['Seg'],
                aggregatedData['Ter'],
                aggregatedData['Qua'],
                aggregatedData['Qui'],
                aggregatedData['Sex'],
                aggregatedData['Sab'],
                aggregatedData['Dom'],
              ],
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(40, 167, 69, 0.2)',
            },
          ],
        });
      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    };
    fetchData();
  }, [])

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Receita Semanal',
      },
    },
  };

  return (
    <C.ChartContainer>
      {chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <ClipLoader color="#007bff" loading={!chartData} size={50} />
        </div>
      )}
    </C.ChartContainer>
  );
};

export default MyChart;
