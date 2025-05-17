import styled from "styled-components";

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    max-width: calc(100vw - 240px);
    height: calc(100vh - 60px);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

export const TitleContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-size: 1.375rem;
    margin-bottom: 10px;
`;

export const BarbershopName = styled.span`
    font-size: 0.813rem;
    display: block;
    margin-top: 5px;
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