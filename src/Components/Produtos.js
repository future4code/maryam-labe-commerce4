import React from 'react';
import '../App.css';
import produtosList from'../Data/produtosList.json'

export default class Produtos extends React.Component {
    state = {
        produtos: produtosList,
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
                    return this.props.minPrice === "" || produto.price >= this.props.minPrice
                })
                .filter(produto =>{
                    return this.props.maxPrice === "" || produto.price <= this.props.maxPrice
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
                        <div key={produto.id} className = "cardProdutos">
                            <img className="imagemProduto" src={produto.photo} alt="Imagem Produto" />
                            <p>{produto.name}</p>
                            <p>{`R$${produto.price},00`}</p>
                            <button onClick={() => this.props.addCarrinho(produto)}>Adicionar ao carrinho</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
