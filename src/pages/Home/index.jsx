import React from 'react';
import ImageCarousel from '../../components/Carousel';
import ItemCard from '../../components/ItemCard';
import {Container, ItemsSection, CarouselSection} from './styles'

function Home() {
  return (
    <Container>
      <CarouselSection>
        <ImageCarousel/>
      </CarouselSection>
      <ItemsSection>
        <h1>SÓ AS MELHORES OFERTAS</h1>
        <ItemCard/>
      </ItemsSection>
    </Container>
  );
}

export default Home;