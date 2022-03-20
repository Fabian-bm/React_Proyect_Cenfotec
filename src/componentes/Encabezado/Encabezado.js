import React from 'react';
import logo from '../../assets/images/logo.jpg';

export default function encabezado() {
  return (
    <div className='container'>
    <div className='row'>
          <div className='col'>
              <div class='text-center'>
                  <img class='img-fluid' src={logo}></img>
                  <h1>Barbería tres amigos</h1>
                  <div class="lead mb-4">Since 2017</div>
              </div>
          </div>
    </div>
    </div>
  );
}
