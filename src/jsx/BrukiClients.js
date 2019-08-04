import React, { Component } from 'react';
import '../scss/clients.scss';

class BrukiClients extends Component {
    render() {
        return (
            <section id="clients">
                <h2>Nuestros clientes</h2>
                <div class="section-wrapper clients-wrapper">
                    <img src="assets/client-aeromar.png" alt="Aeromar" />
                    <img src="assets/client-conair.png" alt="CONAIR" />
                    <img src="assets/client-coppertone.png" alt="Coppertone" />
                    <img src="assets/client-heineken.png" alt="Heineken" />
                    <img src="assets/client-idem-perfumes.png" alt="IDEM Perfumes" />
                    <img src="assets/client-innovasport.png" alt="InnovaSport" />
                    <img src="assets/client-nivea.png" alt="Nivea" />
                </div>
            </section>
        );
    }
}

export default BrukiClients;