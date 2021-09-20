import React from 'react';
import "../App.css"
import Produtos from './Produtos';
import Carrinho from './Carrinho';
import styled from 'styled-components';


const ContainerFiltros = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 300px;
border: solid black 1px;
background-color: rgba(219, 219, 219, 0.25);
border-radius: 10px;
color: lightgray;
position:relative;
`

const FiltrosPrincipal = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`

const Ordenacao = styled.div`
padding: 5px;

`

const InputFiltros = styled.div`
// display: flex;
// align-itens: flex-start
// justify-content: space-between; 
// // margin-right: 0;  
// margin-botton: 10px;
`

export default class Filtros extends React.Component {
    state = {
        query:"",
        minPrice:"",
        maxPrice:"",
        ordenacao:"titulo",
        ordenacaoCrescente: 1,
        carrinho: [],
    }

    updateQuery=(event)=>{
        this.setState({
            query: event.target.value
        })
    }

    updateMinPrice=(event)=>{
        this.setState({
            minPrice: event.target.value
        })
    }

    updateMaxPrice=(event)=>{
        this.setState({
            maxPrice: event.target.value
        })
    }

    updateOrdenacao=(event)=>{
        this.setState({
            ordenacao: event.target.value
        })
    }

    updateOrdenacaoCrescente=(event)=>{
        this.setState({
            ordenacaoCrescente: event.target.value
        })
    }

    addCarrinho = (produto) => {
        console.log(produto);
        if (!this.state.carrinho.includes(produto)) {
            this.setState({
                carrinho: [
                ...this.state.carrinho,
                produto,
                ]
            })
        } else {
            produto.quantity += 1;
            this.setState({
                carrinho: [
                ...this.state.carrinho,
                ]
            })
        }
    }

    removeCarrinho = (produto) => {
        if (produto.quantity > 1){
            produto.quantity -=1;
            this.setState({
                carrinho: [
                    ...this.state.carrinho
                ]
            })
        }else {

        const novoCarrinho = this.state.carrinho.filter((item) => item !== produto)
        this.setState({
            carrinho: novoCarrinho,
        })}
    }

    render (){
        return(
            <FiltrosPrincipal>
                <ContainerFiltros>
                    <h1>Filtros </h1>
                    <InputFiltros>
                        <label>Nome:</label>
                        <input 
                            placeholder="Nome do Produto"
                            value={this.state.query}
                            onChange={this.updateQuery}
                        />
                    </InputFiltros>
                    <InputFiltros>
                        <label>Valor Mínimo:</label>
                        <input 
                            type="number"
                            placeholder="Preço Mínimo"
                            value={this.state.minPrice}
                            onChange={this.updateMinPrice}
                        />
                    </InputFiltros>
                    <InputFiltros>
                        <label>Valor Máximo:</label>
                        <input 
                            type="number"
                            placeholder="Preço Máximo"
                            value={this.state.maxPrice}
                            onChange={this.updateMaxPrice}
                        />
                    </InputFiltros>
                    
                    <h3>Ordenação</h3>
                    <Ordenacao>
                        <select 
                            name="sort"
                            value={this.state.ordenacao}
                            onChange={this.updateOrdenacao}
                            >
                            <option value="titulo">Título</option>
                            <option value="preco">Preço</option>
                        </select>
                        <select 
                            name="sortcrescente"
                            value={this.state.ordenacaoCrescente}
                            onChange={this.updateOrdenacaoCrescente}
                            >
                            <option value={1}>Crescente</option>
                            <option value={-1}>Decrescente</option>
                        </select>
                    </Ordenacao>
                </ContainerFiltros>
                <Produtos
                    query = {this.state.query}
                    minPrice = {this.state.minPrice}
                    maxPrice = {this.state.maxPrice}
                    ordenacao = {this.state.ordenacao}
                    ordenacaoCrescente = {this.state.ordenacaoCrescente}
                    addCarrinho = {this.addCarrinho}
                />
                    <Carrinho 
                        carrinho={this.state.carrinho}
                        removeCarrinho = {this.removeCarrinho}
                    />
            </FiltrosPrincipal>
        )
    }
}
