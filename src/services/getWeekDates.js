// Função para calcular a data de início e fim da semana atual
export function getWeekDates() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 (Domingo) a 6 (Sábado)

    // Ajustar para o início da semana (Domingo)
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDay); // Subtrai o número de dias até Domingo
    startOfWeek.setHours(0, 0, 0, 0); // Define a hora como 00:00:00

    // Ajustar para o fim da semana (Sábado)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Adiciona 6 dias para chegar ao Sábado
    endOfWeek.setHours(23, 59, 59, 999); // Define a hora como 23:59:59

    // Retornar as datas formatadas
    return {
        startDate: startOfWeek.toISOString().split('T')[0], // Formato YYYY-MM-DD
        endDate: endOfWeek.toISOString().split('T')[0], // Formato YYYY-MM-DD
    };
}