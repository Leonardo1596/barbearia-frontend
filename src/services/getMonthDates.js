
export default function getMonthDates(date = new Date()) {
  const startDate = new Date(date.getFullYear(), date.getMonth(), 1); // Primeiro dia do mês
  const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0); // Último dia do mês

  return {
    startDate: startDate.toISOString().split('T')[0], // Formato YYYY-MM-DD
    endDate: endDate.toISOString().split('T')[0], // Formato YYYY-MM-DD
  };
}

