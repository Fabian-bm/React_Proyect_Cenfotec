import React from "react";

class Conmutador extends React.Component{
    constructor(props){
        super (props);
        this.state ={estaActivo: true};

        this.manejarCLick = this.manejarCLick.bind(this);
    }

    manejarCLick(){
        this.setState(state =>({
            estaActivo: !state.estaActivo
        }));
    }

    render(){
        return(
            <a class="link-info" onClick={this.manejarCLick}>
                {this.state.estaActivo ? 'ENCENDIDO' :'APAGADO'}
            </a>
        );
    }
}

export default Conmutador;