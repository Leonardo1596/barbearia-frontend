import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";

export const Appointments = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
`;

export const TitleContainer = styled.div`
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 5px;
`;

export const Description = styled.span`
    display: block;
    font-size: 13px;
    margin-top: 5px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 15px;
  color: #aaa;
  font-size: 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 30px;
    padding: 10px 10px 10px 40px;
    border: 1px solid #ddd;
    border-radius: 12px;
    outline: none;
`;

export const AddButton = styled.button`
    width: 250px;
    height: 30px;
    outline: none;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 12px;
    margin-left: 20px;
    cursor: pointer;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  max-width: 700px;
  margin: 20px auto;
`;

export const Input = styled.input`
  padding: 8px;
  flex: 1 1 150px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const Select = styled.select`
  min-width: 180px;
  padding: 8px;
  flex: 1 1 120px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 14px;

  &:hover {
    background-color:rgb(0, 91, 189);
  }
`;