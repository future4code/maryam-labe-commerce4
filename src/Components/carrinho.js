import React from 'react';
import "../App.css"

export default class Carrinho extends React.Component {
    render (){
        return(
            <div className="carrinho">
                <h1>Carrinho</h1>
                <div>
                    <div className="produtoCarrinho">
                        <p>1x</p>{/*  Quantidade do mesmo produto */}
                        <p>Macacão espacial</p> {/*Descrição do produto */}
                        <p>R$ 1,99</p>{/*Valor */}
                        <button>Remover</button>
                    </div>
                    <p>Valor Total = R$1,99</p>
                </div>
            </div>
        )
    }
}
