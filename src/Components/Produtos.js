import React from 'react';
import '../App.css';
import produtosList from'../Data/produtosList.json'
import styled from 'styled-components';



const CardProdutos = styled.div`
    display: flex;
    flex-direction: column;
    border: solid lightgray 1px;
    align-items: center;
    margin: 10px;
    border-radius: 10px;
    color: lightgray;
    font-weight: bold;
`

const ListaProdutos = styled.div`
    display: grid;
    grid-template-columns:  repeat(4, 1fr);
`

const ImagemProduto = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 10px;
`
const Button = styled.button`
    border-radius: 7px;
`

export default class Produtos extends React.Component {
    state = {
        produtos: produtosList,
        
    }
    componentDidUpdate() {
        window.localStorage.setItem("textoprodutos", JSON.stringify(this.state.produtos));
      };

    componentDidMount() {
        const produtos = localStorage.getItem("textoprodutos");
        if (produtos) {
          this.setState({ produtos: JSON.parse(produtos) });
        }
      };

    render (){
        const ListaDeProdutos = this.state.produtos
        return(
            <ListaProdutos>
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
                        <CardProdutos key={produto.id}>
                            <ImagemProduto src={produto.photo} alt={produto.alt} />
                            <p>{produto.name}</p>
                            <p>{`R$${produto.price},00`}</p>
                            <Button onClick={() => this.props.addCarrinho(produto)}>Adicionar ao carrinho</Button>
                        </CardProdutos>
                    )
                })}
            </ListaProdutos>
        )
    }
}
