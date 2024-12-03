import React from 'react';
import * as C from './styles';

const Index = ({ data }) => {
    return (
        <C.Table>
            <C.TableHeader>
                <C.TableRow>
                    <C.TableHeaderCell>Id</C.TableHeaderCell>
                    <C.TableHeaderCell>Produto</C.TableHeaderCell>
                    <C.TableHeaderCell>Preço</C.TableHeaderCell>
                    <C.TableHeaderCell>Quantidade</C.TableHeaderCell>
                </C.TableRow>
            </C.TableHeader>
            <C.TableBody>
                {data.map((product, index) => (
                    <C.TableRow key={index}>
                        <C.TableCell>{product._id}</C.TableCell>
                        <C.TableCell>{product.name}</C.TableCell>
                        <C.TableCell>{(`R$ ${product.price.toFixed(2)}`).replace('.', ',')}</C.TableCell>
                        <C.TableCell>{product.stock}</C.TableCell>
                    </C.TableRow>
                ))}
            </C.TableBody>
        </C.Table>
    )
}

export default Index