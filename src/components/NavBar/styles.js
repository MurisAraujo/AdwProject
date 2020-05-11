import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  background-color: #b81414;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items:center;
  h1{
    color: #fff;
  }
`;

export const Input = styled.div`
  width: 50%;
  height: 5vh;
  position: relative;
  

  input{
    height:100%;
    width:100%;
    border-width: 0px;
    border-style: none;
    font-size: 16px
  }

  div{
    position: absolute;
    top:0;
    right:0;
    height:100%;
    display:flex;
    align-items:center;
    margin-right: 10px;
  }

  @media (max-width: 842px) {
    width: 100%;
    display: flex;
    justify-content:center;
    input{
      width:90%;
    }
    div{
      right:30px;
    }
  }
`



export const Icons = styled.div `
  display: flex;
  width: 10%;
  height: 4.3;
  justify-content: space-evenly;
  margin:15px;
  @media (max-width: 842px) {
    justify-content: space-around;
    width:100%;
  }
`

export const NavbarDiv = styled.div `
  width: 100%;
`
