import React from 'react';
import * as C from './styles';

const MonthNavigation = ({ currentMonth, onMonthChange }) => {
  const formatMonth = (date) => {
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const handleMonthChange = (direction) => {
    const newDate = new Date(currentMonth);
    if (direction === 'previous') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else if (direction === 'next') {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    onMonthChange(newDate);
  };

  return (
    <C.MonthNavigation>
      <C.MonthButton onClick={() => handleMonthChange('previous')}>
        ◁
      </C.MonthButton>
      <C.MonthName>{formatMonth(currentMonth)}</C.MonthName>
      <C.MonthButton onClick={() => handleMonthChange('next')}>
        ▷
      </C.MonthButton>
    </C.MonthNavigation>
  );
};

export default MonthNavigation;
