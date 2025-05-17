import styled from "styled-components";
import { FaTimes } from "react-icons/fa";


export const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const Popup = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 400px;
    position: relative;
`;

export const CloseButton = styled(FaTimes)`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
`;

export const Title = styled.h3`
    font-size: 1rem;
`;

export const ButtonsContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
`;

export const Button = styled.button`
    width: 120px;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
`;