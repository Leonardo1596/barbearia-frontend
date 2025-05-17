import styled from "styled-components";
import { FaRegCircleUser, FaRegBell } from "react-icons/fa6";

export const Navbar = styled.div`
    width: 100%;
    height: 60px;
    background-color: #fff;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Brand = styled.h1`
    font-size: 1.25rem;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const IconNotification = styled(FaRegBell  )`
    font-size: 20px;
    cursor: pointer;
`;

export const IconUser = styled(FaRegCircleUser)`
    font-size: 20px;
    cursor: pointer;
`;