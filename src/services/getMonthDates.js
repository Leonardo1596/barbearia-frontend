const getMonthDates = () => {
  // Obtém a data atual
  const currentDate = new Date();

  // Define o início do mês (primeiro dia do mês atual)
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  
  // Define o fim do mês (último dia do mês atual)
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  // Formatar as datas no formato 'YYYY-MM-DD'
  const formatDate = (date) => date.toISOString().split('T')[0];

  return {
    startDate: formatDate(startOfMonth),
    endDate: formatDate(endOfMonth),
  };
};

export default getMonthDates;
