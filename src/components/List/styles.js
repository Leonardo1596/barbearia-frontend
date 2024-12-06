import styled from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 320px;
    height: 350px;
    margin-top: 30px;
    padding: 30px 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: auto;
`;

export const Title = styled.h4`
    font-size: 0.813rem;
    color: #5a5a5a;
`;

export const CardList = styled.div`
    margin-top: 30px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
`;

export const CardTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
`;

export const CardTitle = styled.h5`
    font-size: 0.75rem;
    color: #5a5a5a;
`;

export const CardDate = styled.span`
    font-size: 0.688rem;
`;

export const CardValue = styled.span`
    font-size: 0.75rem;
    font-weight: bold;
`;