import React from 'react';
import * as C from './styles';

const Index = ({ data, type }) => {
    return (
        <C.Table>
            <C.TableHeader>
                {type === 'produtos' ? (
                    <C.TableRow>
                        <C.TableHeaderCell>Produto</C.TableHeaderCell>
                        <C.TableHeaderCell>Descrição</C.TableHeaderCell>
                        <C.TableHeaderCell>Preço</C.TableHeaderCell>
                        <C.TableHeaderCell>Quantidade</C.TableHeaderCell>
                        <C.TableHeaderCell>Ações</C.TableHeaderCell>
                    </C.TableRow>
                ) : (
                    <C.TableRow>
                        <C.TableHeaderCell>Data</C.TableHeaderCell>
                        <C.TableHeaderCell>Nome do cliente</C.TableHeaderCell>
                        <C.TableHeaderCell>Hora</C.TableHeaderCell>
                        <C.TableHeaderCell>Barbeiro</C.TableHeaderCell>
                        <C.TableHeaderCell>Preço</C.TableHeaderCell>
                        <C.TableHeaderCell>Status</C.TableHeaderCell>
                        <C.TableHeaderCell>Ações</C.TableHeaderCell>
                    </C.TableRow>
                )}
            </C.TableHeader>
            <C.TableBody>
                {type === 'produtos'
                    ? data.map((product, index) => (
                          <C.TableRow key={index}>
                              <C.TableCell>{product.name}</C.TableCell>
                              <C.TableCell>{product.description}</C.TableCell>
                              <C.TableCell>{(`R$ ${product.price.toFixed(2)}`).replace('.', ',')}</C.TableCell>
                              <C.TableCell>{product.stock}</C.TableCell>
                              <C.TableCell>
                                  {/* Botões ou ações aqui */}
                                  <button>Editar</button>
                                  <button>Excluir</button>
                              </C.TableCell>
                          </C.TableRow>
                      ))
                    : data.map((appointment, index) => (
                          <C.TableRow key={index}>
                              <C.TableCell>{new Date(appointment.date).toLocaleDateString("pt-BR")}</C.TableCell>
                              <C.TableCell>{appointment.client_name}</C.TableCell>
                              <C.TableCell>{appointment.hour}</C.TableCell>
                              <C.TableCell>{appointment.barber.name}</C.TableCell>
                              <C.TableCell>{appointment.service.reduce((acc, service) => acc + service.price, 0).toFixed(2).replace('.', ',')}</C.TableCell>
                              <C.TableCell>{appointment.status}</C.TableCell>
                              <C.TableCell>
                                  {/* Botões ou ações aqui */}
                                  <button>Editar</button>
                                  <button>Excluir</button>
                              </C.TableCell>
                          </C.TableRow>
                      ))}
            </C.TableBody>
        </C.Table>
    );
};

export default Index;
