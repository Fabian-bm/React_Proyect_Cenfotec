import React from "react";

class Reloj extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() { //metodo de montaje
        this.timerID = setInterval(
            () => this.iteraccion(),
            1000
        );
    }

    iteraccion() { // metodo para actualizar el estado
        this.setState({ date: new Date() })
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h7>Hora de la sesion: {this.state.date.toLocaleTimeString()}.</h7>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Reloj;