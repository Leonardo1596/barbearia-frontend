import React from 'react';
import * as C from './styles';
import { logout } from '../../services/auth'
import { FaTachometerAlt, FaCalendarAlt, FaDollarSign, FaBox, FaSignOutAlt, FaChartBar, FaCog, FaClipboardList, FaClock } from 'react-icons/fa';

const Index = () => {
    // const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = async () => {
        const endSession = await logout();
    }

    return (
        <div>
            <C.Sidebar>
                <C.List>
                    <C.Items>
                        <C.Item href='/'>
                            <C.IconWrapper><C.Icon><FaTachometerAlt /></C.Icon></C.IconWrapper>
                            <span>Dashboard</span>
                        </C.Item>
                        <C.Item href='/agendamentos'>
                            <C.IconWrapper><C.Icon><FaCalendarAlt /></C.Icon></C.IconWrapper>
                            <span>Agendamentos</span>
                        </C.Item>
                        <C.Item>
                            <C.IconWrapper><C.Icon><FaDollarSign /></C.Icon></C.IconWrapper>
                            <span>Financeiro</span>
                        </C.Item>
                        <C.Item href='/servicos'>
                            <C.IconWrapper><C.Icon><FaClipboardList /></C.Icon></C.IconWrapper>
                            <span>Serviços</span>
                        </C.Item>
                        <C.Item>
                            <C.IconWrapper><C.Icon><FaClock /></C.Icon></C.IconWrapper>
                            <span>Horários</span>
                        </C.Item>
                        <C.Item>
                            <C.IconWrapper><C.Icon><FaChartBar  /></C.Icon></C.IconWrapper>
                            <span>Relatórios</span>
                        </C.Item>
                        <C.Item href='/produtos'>
                            <C.IconWrapper><C.Icon><FaBox /></C.Icon></C.IconWrapper>
                            <span>Produtos</span>
                        </C.Item>
                        <C.Item>
                            <C.IconWrapper><C.Icon><FaCog /></C.Icon></C.IconWrapper>
                            <span>Configurações</span>
                        </C.Item>
                    </C.Items>
                    <div>
                        <C.Item style={{ justifyContent: 'center' }}>
                            <C.IconWrapper style={{ marginLeft: '0' ,marginRight: '20px' }}><C.Icon><FaSignOutAlt /></C.Icon></C.IconWrapper>
                            <span onClick={handleLogout}>Logout</span>
                        </C.Item>
                    </div>
                </C.List>
            </C.Sidebar>
        </div>
    )
}

export default Index