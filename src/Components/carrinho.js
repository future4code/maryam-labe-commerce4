import React from 'react';
import "../App.css"

export default class Carrinho extends React.Component {
    render (){
        return(
            <div className="carrinho">
                <h4> CARRINHO DE COMPRAS </h4>
            {this.props.carrinho.map((item) => {
                return (<div className="produtoCarrinho">
                <p>{item.name}</p>
                <p>{`R$${item.price},00`}</p>
                <p>{item.quantity}</p>
                <button onClick={() => this.props.removeCarrinho(item)}>Remover</button>
                </div>)
            })}
            <p>Total = {`R$${this.props.precoFinal(this.props.carrinho)},00`} </p>
            </div>
        )
    }
}
