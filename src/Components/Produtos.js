import React from 'react';
import '../App.css';
import produtosList from'../Data/produtosList.json'
import Filtros from './Filtros'

export default class Produtos extends React.Component {
    state = {
        produtos: produtosList,
        //   query:props.query,
        //  minPrice:"2,00",
        //  maxPrice:"3,00",
        //  ordenacao:"",
        //  ordenacaoCrescente: 1
    }

    render (){
        const ListaDeProdutos = this.state.produtos
        return(
            <div className="listaProdutos">
                {ListaDeProdutos
                .filter(produto =>{
                    return produto.name.toLowerCase().includes(this.props.query.toLowerCase())
                })
                .filter(produto =>{
                    return this.props.minPrice === "" || produto.valor >= this.props.minPrice
                })
                .filter(produto =>{
                    return this.props.maxPrice === "" || produto.valor <= this.props.maxPrice
                })
                .sort((produto,proximoProduto)=>{
                    switch (this.props.ordenacao){
                        case "preco":
                            return this.props.ordenacaoCrescente * (produto.price - proximoProduto.price)
                        default:
                            return this.props.ordenacaoCrescente * produto.name.localeCompare(proximoProduto.name)
                    }
                    
                })
                .map(produto =>{
                    return(
                        <div className = "cardProdutos">
                            <img className="imagemProduto" src={produto.photo} alt="Imagem Produto" />
                            <p>{produto.name}</p>
                            <p>{produto.price}</p>
                            <button>Adicionar ao carrinho</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
