import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div>
            <footer class="page-footer font-small bg-dark pt-4">
                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                        <h5 class="text-uppercase text-center text-light">Footer Content</h5>
                        <p className="text-light">Bienvenido a barbería tres amigos</p>
                        <hr class="clearfix w-100 d-md-none pb-3" />
                    </div>
                </div>
                <div class="footer-copyright text-light text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    )

}

export default Footer;