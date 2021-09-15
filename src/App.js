import React from 'react';
import './App.css';
import Produtos from './Components/Produtos';
import Filtros from './Components/Filtros';
import Carrinho from './Components/carrinho';

function App() {
  return (
    <div className="App">
      <div className="cabecalho">
        <h1> Produtos do espaço </h1> 
      </div>
      <div className="Main">
        <Filtros/>
      <div className="produtos">
        <Produtos/>
        <Produtos/>
        <Produtos/>
        <Produtos/>
        <Produtos/>
        <Produtos/>
        <Produtos/>
        <Produtos/>
        <Produtos/>
        <Produtos/>
      </div>
        <Carrinho/>
      </div>
      <div className="cabecalho">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
