import React from "react";

function activarMensaje(e){
    e.preventDefault();
    alert("Bienvenido a barbería tres amigos");
}

class Eventos extends React.Component{
    render(){
        return(
            <div>
                <h4>Pulse para ver mensaje</h4>
                <button className="btn btn-primary" onClick={activarMensaje}> Mensaje</button>
            </div>
        );
    }
}

export default Eventos;