import React, { Component } from 'react';
import '../scss/about.scss';

class BrukiAbout extends Component {
    render() {
        return (
            <section id="about">
                <div class="section-wrapper about-wrapper">
                    <h2>¿Quiénes somos?</h2>
                    <p>Somos una agencia digital creada para proyectar a nuestros clientes
                        desde la creación de las estrategias basadas en las últimas tendencias.
                        Nos especializamos en el entendimiento del ecosistema digital
                        en torno a una marca para poder trabajar ajustado a resultados y necesidades.</p>
                </div>
            </section>
        );
    }
}

export default BrukiAbout;