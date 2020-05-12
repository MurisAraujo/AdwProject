import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  margin-top:10px;
  width:100%;
`;

export const CarouselSection = styled.div `
  width:100%;
  justify-content:center;
  display:flex;
`;


export const ItemsSection = styled.div `
  h1{
    text-align:center;
    width:100%;
    margin-top:10px;
  }
  width:75%;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
