import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  width: 20%;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
  background-color: #fff;
  border-radius: 2px;
  margin: 20px;
  padding:5px;
  p{
    font-size: 26px
  }
  small{
    font-size: 16px;
    color: red;
  }
  @media (max-width: 1242px) {
    width: 40%;
    
  }
  @media (max-width: 624px) {
    width: 75%;
    
  }
`;

export const Image = styled.img `
  width:180px;
  height:180px;
`
