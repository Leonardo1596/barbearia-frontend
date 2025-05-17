import styled from "styled-components";

export const Sidebar = styled.div`
    width: 240px;
    height: 100%;
    background-color: #fff;
    color: #333;
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 20px;
    `;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const Item = styled.a`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    span {
        font-size: 0.875rem;
    }
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
`;

export const IconWrapper = styled.div`
    margin: 0 25px;
`;

export const Icon = styled.div`
    font-size: 20px;
`;