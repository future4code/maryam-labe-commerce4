import React from 'react';
import './App.css';
import Produtos from './Components/Produtos';
import Filtros from './Components/Filtros';
import Carrinho from './Components/Carrinho';

function App() {
  return (
    <div className="App">
      <div className="cabecalho">
        <h1> Produtos do espaço </h1> 
      </div>
      <div className="Main">
        <Filtros/>
        {/* <div className="produtos">
          <Produtos/>
        </div> */}
      </div>
      <div className="cabecalho">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
