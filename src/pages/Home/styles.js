import styled from "styled-components";

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 20px;
    width: 100%;
    max-width: calc(100vw - 240px);
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
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

export const BarbershopName = styled.h2`
    font-size: 0.813rem;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    padding-bottom: 10px;
    overflow: auto;
`;