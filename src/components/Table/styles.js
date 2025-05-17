import styled from "styled-components";
import { FaEdit, FaTrash, FaCheckSquare, FaSquare, FaTimes, FaSyncAlt  } from "react-icons/fa";

// Tabela principal
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

// Cabeçalho da Tabela
export const TableHeader = styled.thead`
  background-color: #007bff;
  color: white;
`;

// Linha do Cabeçalho
export const TableRow = styled.tr``;

// Célula do Cabeçalho
export const TableHeaderCell = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
`;

// Corpo da Tabela
export const TableBody = styled.tbody``;

// Célula da Tabela
export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  font-size: 13px;
`;

// Linha do Corpo da Tabela
export const TableRowBody = styled.tr`
  &:hover {
    background-color: #f9f9f9;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const EditIcon = styled(FaEdit)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #007bff;
  cursor: pointer;
`;

export const TrashIcon = styled(FaTrash)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: red;
  cursor: pointer;
`;

export const SyncIcon = styled(FaSquare)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #FFA500;
  cursor: pointer;
`;

export const UpdateIcon = styled(FaSyncAlt )`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #007bff;
  cursor: pointer;
`;







