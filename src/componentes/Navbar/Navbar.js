import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Publicacion from '../Publicacion/Publicacion';
import Gallery from '../Gallery/Gallery'

function Navbar() {
    return (
        <div>
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h5 class="text-white h4">Menu</h5>
                    <Link to="/" >Home.</Link>
                    <br></br>
                    <Link to="/Publicacion" >Citas.</Link>
                    <br></br>
                    <Link to="/Calendario" >Calendario.</Link>
                    <br></br>
                </div>

            </div>


            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Gallery />}></Route>
                <Route path='/Publicacion' element={<Publicacion />}></Route>
            </Routes>
        </div>
    );
}

export default Navbar;