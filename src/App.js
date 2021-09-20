import React from 'react';
import './App.css';
import Filtros from './Components/Filtros';
import styled from 'styled-components';

const Main = styled.div`
display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: url("https://media.istockphoto.com/photos/starry-outer-space-background-texture-picture-id1064074580?k=20&m=1064074580&s=170667a&w=0&h=akiw5A9_RGa85zQKs513jAO0Du9e5otCri3J0AqjC1E=");
  position: relative;
`

const OpcaoFiltros = styled.div`
display: flex;
flex-direction: row;
`

const Cabecalho = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  color:lightgray;
  height: 10vh;
`

const Footer = styled.div`
display: flex;
justify-content: center;
align-items: center;
color:lightgray;
height: 10vh;
width: 100vw;
position: fixed;
bottom: 0;
`

const Icone = styled.img`
width: 30px;
margin-left: 10px
`

function App() {
  return (
    <Main>
      <Cabecalho>
        <h1> Viagens de Outro Mundo </h1> 
      </Cabecalho>
      <OpcaoFiltros>
        <Filtros/>
        {/* <div className="produtos">
          <Produtos/>
        </div> */}
      </OpcaoFiltros>
      <Footer>
        <h3>Acesse nossas redes sociais</h3>
        <a href="https://www.twitter.com" target="blank"><Icone src="https://cdn.icon-icons.com/icons2/792/PNG/512/TWITTER_icon-icons.com_65536.png" alt="Icone Twitter"/></a>
        <a href="https://www.facebook.com/" target="blank"><Icone src="https://cdn.icon-icons.com/icons2/792/PNG/512/FB_icon-icons.com_65534.png" alt="Icone Facebook"/></a>
        <a href="https://www.youtube.com/" target="blank"><Icone src="https://cdn.icon-icons.com/icons2/792/PNG/512/YOUTUBE_icon-icons.com_65537.png" alt="Icone YouTube"/></a>
        <a href="https://www.instagram.com/" target="blank"><Icone src="https://cdn.icon-icons.com/icons2/792/PNG/512/INSTAGRAM_icon-icons.com_65535.png" alt="Icone Instagram"/></a>
      </Footer>
    </Main>
  );
}

export default App;
