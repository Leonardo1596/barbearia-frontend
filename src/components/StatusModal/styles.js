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
    
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`;

export const Label = styled.label`
    color: rgb(87, 87, 87);
`;

export const Input = styled.input`
    height: 30px;
    border-radius: 4px;
    border: 1px solid rgb(200, 178, 178);;
    outline: none;
    padding: 0px 15px;
`;