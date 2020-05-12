import React from 'react';

import { Container, Image } from './styles';
import product from '../../assets/notebook.jpg';

function ItemCard() {

    const items = [
        {
            src: product,
            title: 'Notebook1',
            price: 'R$ 2000,99',
            qtd: 10
        },

        {
            src: product,
            title: 'Notebook1',
            price: 'R$ 2000,99',
            qtd: 10
        },

        {
            src: product,
            title: 'Notebook1',
            price: 'R$ 2000,99',
            qtd: 0
        },

        {
            src: product,
            title: 'Notebook1',
            price: 'R$ 2000,99',
            qtd: 10
        },

        {
            src: product,
            title: 'Notebook1',
            price: 'R$ 2000,99',
            qtd: 10
        },

        {
            src: product,
            title: 'Notebook1',
            price: 'R$ 2000,99',
            qtd: 10
        },

        {
            src: product,
            title: 'Notebook1',
            price: 'R$ 2000,99',
            qtd: 10
        },

        {
            src: product,
            title: 'Notebook1',
            price: 'R$ 2000,99',
            qtd: 0
        },
    ]

    return (
        <>
            {items.map(item => (
                <Container>
                    <Image src={item.src} alt={item.src} />
                    <p>{item.title}</p>
                    <small>{item.qtd} no estoque</small>
                    <p> {item.price} </p>
                </Container>
            ))}
        </>
    );
}

export default ItemCard;