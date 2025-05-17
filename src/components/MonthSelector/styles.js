import styled from 'styled-components';

export const MonthNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  position: absolute;
  left: 50%;
`;

export const MonthButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  /* margin: 0 30px; */
  transition: 0.3s;

  &:hover {
    color: #007bff;
  }
`;

export const MonthName = styled.span`
    width: 200px;
  font-size: 16px;
  font-weight: bold;
  padding: 0 30px;
  text-align: center;
`;
