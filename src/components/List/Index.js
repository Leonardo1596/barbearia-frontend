import React from 'react';
import * as C from './styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Index = ({ appointments }) => {

    return (
        <div>
            <C.ListContainer>
                <C.Title>Agendamentos recentes</C.Title>
                {!appointments ? (
                    // Exibir Skeleton quando os dados estão sendo carregados
                    Array(2).fill().map((_, index) => (
                        <C.CardList key={index}>
                            <C.CardTitleContainer>
                                <Skeleton width={80} height={15} />
                                <Skeleton width={80} height={15} />
                            </C.CardTitleContainer>
                            <Skeleton width={60} height={15} />
                        </C.CardList>
                    ))
                ) : (
                    // Exibir dados reais quando a API já respondeu
                    appointments && appointments.slice(0, 6).reverse().map((appointment, index) => (
                        <C.CardList key={appointment._id}>
                            <C.CardTitleContainer>
                                <C.CardTitle>{appointment.client_name}</C.CardTitle>
                                <C.CardDate>{new Date(appointment.date).toLocaleDateString("pt-BR")}</C.CardDate>
                            </C.CardTitleContainer>
                            <C.CardValue>
                                {`R$ ${appointment.service.reduce((acc, service) => acc + service.price, 0).toFixed(2).replace('.', ',')}`}
                            </C.CardValue>
                        </C.CardList>
                    ))
                )}
            </C.ListContainer>
        </div>
    )
}

export default Index;