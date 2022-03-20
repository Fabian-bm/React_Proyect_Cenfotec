import React from "react";
import Reloj from "../Reloj/Reloj";
import Formulario from "../Formulario/Formulario";
import { ListaDeServicios } from "../Listas/Listas";

function Publicacion() {
    return (
        <>
            <div>
                <br></br>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <Formulario />
                        </div>

                        <div class="col-md-6">
                            <Reloj/>
                            <br></br>
                            <ListaDeServicios />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Publicacion;