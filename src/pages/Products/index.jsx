import React from 'react';
import ItemCard from '../../components/ItemCard';

 import { Container, ItemsSection, FilterSection } from './styles';

function Products() {
  return (
    <Container>
      <FilterSection>
        <h2>Notebook</h2>
        <h4>Categorias</h4>
        <p>Notebook Gamer</p>
        <p>Notebook 2 em 1</p>
        <h4>Marca</h4>
        <p>Dell</p>
        <p>Lenovo</p>
        <p>Samsumb</p>
        <p>LG</p>
        <p>HP</p>
        <p>ASUS</p>
        <p>ACER</p>
        <p>POSITIVO</p>
        <h4>Preço</h4>
        <p>Até R$ 2.586,00</p>
        <p>R$ 2.586,00 a R$ 5.172,00</p>
        <p>R$ 5.172,00 a 7.758,00</p>
        <p>R$ 7.758,00 a R$ 10.344,00</p>
        <p>R$ 10.344,00 a 12.930,00</p>
        <p>A partir de R$12.930,00</p>
      </FilterSection>
      <ItemsSection>
        <ItemCard/>
      </ItemsSection>
    </Container>
  )
}

export default Products;