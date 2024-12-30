import React, { useEffect, useState } from 'react';
import * as C from './styles';
import Table from '../../components/Table/Index';
import api from '../../services/api';
import Popup from '../../components/Popup/Index';

const Index = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [products, setproducts] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    async function getProducts() {
        try {
            const response = await api.get(`/products/${user.barbershop}`);
            setproducts(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    async function createProduct(data) {
        try {
            console.log('aqui')
            let body = data;
            const response = await api.post('/create_product', body);
            console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao criar o produto', error);
        }
    }

    return (
        <div>
             {isPopupOpen && <Popup type='produtos' togglePopup={togglePopup} createProduct={createProduct} />}
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
                            <C.AddButton onClick={togglePopup}>Cadastrar produto</C.AddButton>
                        </C.SearchContainer>
                    </C.HeaderContainer>
                    {products ? <Table data={products} type='produtos' />: 'Carregando...'}
                </C.Container>
            </C.Produtcs>
        </div>
    )
}

export default Index