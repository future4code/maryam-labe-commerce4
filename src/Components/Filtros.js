import React from 'react';
import "../App.css"

export default class Filtros extends React.Component {
    render (){
        return(
            <div className="filtros">
                <h1>Filtros </h1>
                <button>Valpor Maximo</button>
                <button>Valor Minimo</button>
            </div>
        )
    }
}
