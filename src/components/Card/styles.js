import styled from "styled-components";
import { FaChartLine } from "react-icons/fa";

export const CardContainer = styled.div`
    width: 230px;
    height: 90px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    user-select: none;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Title = styled.h3`
    font-size: 0.875rem;
`;

export const Content = styled.p`
    font-size: 0.813rem;
`;

export const Icon = styled(FaChartLine)`
    font-size: 16px;
`;