import React, { useEffect, useState } from 'react';
import * as C from './styles';
import Table from '../../components/Table/Index';
import api from '../../services/api';
import Form from '../../components/Form/Index';

const Index = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [products, setproducts] = useState([]);

    async function getProducts() {
        try {
            const response = await api.get(`/products/${user.barbershop}`);
            setproducts(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <C.Produtcs>
                <C.Container>
                    {/* <Form /> */}
                    <C.TitleContainer>
                        <C.Title>Produtos</C.Title>
                        <C.Description>Lista de produtos cadastrados</C.Description>
                    </C.TitleContainer>
                    <C.HeaderContainer>
                        <C.SearchContainer>
                            <C.SearchIcon />
                            <C.SearchInput placeholder='Buscar produtos' />
                            <C.AddButton>Adicionar</C.AddButton>
                        </C.SearchContainer>
                    </C.HeaderContainer>
                    <Table data={products} />
                </C.Container>
            </C.Produtcs>
        </div>
    )
}

export default Index