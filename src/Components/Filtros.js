import React from 'react';
import "../App.css"
import Produtos from './Produtos';
import Carrinho from './Carrinho';



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
                ... this.state.carrinho,
                ]
            })
        }
    }

    removeCarrinho = (produto) => {
        const novoCarrinho = this.state.carrinho.filter((item) => item !== produto)
        this.setState({
            carrinho: novoCarrinho,
        })
    }

    precoFinal = (carrinho) => {
        const precofinal = carrinho.reduce((a, b) => (a.price * a.quantity + b.price*b.quantity), 0)
        return precofinal;
    }

    render (){
        return(
            <div>
               
            <div className="main">
                <div className="filtrosContainer">
                <h1>Filtros </h1>
                <div>
                    <input 
                        placeholder="Nome do Produto"
                        value={this.state.query}
                        onChange={this.updateQuery}
                    />
                </div>
                <div>
                    <label>Valor Mínimo</label>
                    <input 
                        type="number"
                        placeholder="Preço Mínimo"
                        value={this.state.minPrice}
                        onChange={this.updateMinPrice}
                    />
                </div>
                <div>
                    <label>Valor Máximo</label>
                    <input 
                        type="number"
                        placeholder="Preço Máximo"
                        value={this.state.maxPrice}
                        onChange={this.updateMaxPrice}
                    />
                </div>
                <label for="sort">Ordenação</label>
                <div>
                    
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
                </div>
                </div>
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
                    precoFinal = {this.precoFinal}
                />
            

            </div>
            </div>
        )
    }
}
