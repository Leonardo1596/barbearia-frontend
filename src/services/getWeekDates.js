export const getWeekDates = (referenceDate = new Date()) => {
    // Garantir que a data seja em UTC
    const date = new Date(referenceDate);
    
    // Ajustar a data para o começo da semana (segunda-feira)
    const dayOfWeek = date.getDay(); // 0: Domingo, 1: Segunda, etc.
  
    // Se for domingo (0), retroceder 6 dias para alcançar a segunda-feira
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const startDate = new Date(date);
    startDate.setUTCDate(date.getUTCDate() + diffToMonday); // Ajusta para a segunda-feira da semana
  
    // O fim da semana será no domingo (6 dias após segunda)
    const endDate = new Date(startDate);
    endDate.setUTCDate(startDate.getUTCDate() + 6); // O domingo da mesma semana
  
    // Ajustar para o intervalo correto de segunda a domingo
    if (dayOfWeek === 0) {
      endDate.setUTCDate(endDate.getUTCDate() - 1); // Corrigir para o domingo da semana atual
    }
  
    // Retornar as datas como ISO
    return {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    };
  };
  