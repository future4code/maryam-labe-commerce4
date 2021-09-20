import React from 'react';
import "../App.css"
import styled from 'styled-components';

const ProdutoCarrinho = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    height: 80vh; 
    border: solid black 1px;
    margin-top: 5px;
    padding-left: 1vw;
    padding-right: 1vw;
    color: lightgray;
    background-color: rgba(219, 219, 219, 0.25);
    border-radius: 10px;
    margin-right: 0;
    position: relative;
`

const Total = styled.h3`
    margin-top: 10px;
`

const ProdutoSeparado = styled.div`
    margin-top: 10px
`

const Quantidade = styled.div`
    display: flex;
    justify-content: space-between;   
    width: 300px; 
    margin-top: -10px;
`

const Button = styled.button`
    border-radius: 7px;
`

export default class Carrinho extends React.Component {
    precoFinal = (carrinho) => {
        const precofinal = carrinho.reduce((a, b) => ( (a) + (b.price *b.quantity)), 0)
        console.log(precofinal)
        return precofinal;
    }
    render (){
        return(
            <ProdutoCarrinho>
                <h2> CARRINHO DE COMPRAS </h2>
                {this.props.carrinho.map((item) => {
                return (
                    <ProdutoSeparado key={item.id} >
                        <h4>{item.name}</h4>
                        <p>{`R$${item.price},00`}</p><br></br>
                        <Quantidade>
                            <div>
                                <p>Quantidade: {item.quantity}</p>
                            </div>
                            <Button onClick={() => this.props.removeCarrinho(item)}>Remover</Button>
                            
                        </Quantidade>
                        <hr></hr>
                    </ProdutoSeparado>)
                })}
                <Total>Total = {`R$${this.precoFinal(this.props.carrinho)},00`} </Total>
            </ProdutoCarrinho>
        )
    }
}
