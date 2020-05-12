import styled from 'styled-components';

export const Container = styled.div`
  display:grid;
  @media (min-width:781px) {
    grid-template-columns: .2fr .8fr;

  }
  @media (max-width:780px) {
    grid-template-rows: .2fr .8fr;
    text-align:center;
    
  }
`;

export const ItemsSection = styled.div`
  h1{
    text-align:center;
    width:100%;
    margin-top:10px;
  }
  width:100%;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const FilterSection = styled.div` 
    width:100%;
    p{
        text-decoration: underline;
    }
    
    @media (min-width:781px) {
        margin:60px;

    }
    @media (max-width:780px) {
        margin-top: 10px;
        height:558px;
        overflow-y: auto;
    }
`