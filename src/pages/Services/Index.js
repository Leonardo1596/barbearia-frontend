import React, { useEffect, useState } from 'react';
import * as C from './styles';
import Table from '../../components/Table/Index';
import api from '../../services/api';
import Popup from '../../components/Popup/Index';

const Index = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [services, setServices] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    async function getServices() {
        const response = await api.get(`/get_services/${user.barbershop}`);
        setServices(response.data)
        console.log(response.data);
    };

    useEffect(() => {
        getServices();
    }, []);

    async function createService(data) {
        try {
            let body = data;
            const response = await api.post('/create_service' ,body);
            console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao criar o serviço', error);
        }
    }

    return (
        <div>
            {isPopupOpen && <Popup type='serviços' createService={createService} togglePopup={togglePopup} />}
            <C.Services>
                <C.Container>
                    <C.TitleContainer>
                        <C.Title>Serviços</C.Title>
                        <C.Description>Lista de serviços cadastrados</C.Description>
                    </C.TitleContainer>
                    <C.HeaderContainer>
                        <C.SearchContainer>
                            <C.SearchIcon />
                            <C.SearchInput placeholder='Buscar produtos' />
                            <C.AddButton onClick={togglePopup}>Cadastrar serviço</C.AddButton>
                        </C.SearchContainer>
                    </C.HeaderContainer>
                    {services ? <Table data={services} type={'serviços'} /> : 'Carregando'}
                </C.Container>
            </C.Services>
        </div>
    )
}

export default Index