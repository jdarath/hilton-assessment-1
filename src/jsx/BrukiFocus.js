import React, { Component } from 'react';
import '../scss/focus.scss';

class BrukiFocus extends Component {
    render() {
        return (
            <section id="servicios">
                <div class="section-wrapper focus-wrapper">
                    <h2>Nuestro enfoque</h2>
                    <div class="focus-item">
                        <img src="assets/ico-roi.png" alt="ROI" />
                        <p class="focus-label">ROI</p>
                    </div>
                    <div class="focus-item">
                        <img src="assets/ico-automatizacion-digital.png" alt="Automatización Digital" />
                        <p class="focus-label">Automatización Digital</p>
                    </div>
                    <div class="focus-item">
                        <img src="assets/ico-cart.png" alt="Commerce" />
                        <p class="focus-label">Drive to Commerce</p>
                    </div>
                    <div class="focus-item">
                        <img src="assets/ico-digital-transformation.png" alt="Digital Transformation" />
                        <p class="focus-label">Digital Transformation</p>
                    </div>
                    <div class="focus-item">
                        <img src="assets/ico-inbound-mkt.png" alt="Inbound Marketing" />
                        <p class="focus-label">Inbound Marketing</p>
                    </div>
                    <div class="ctas">
                        <a href="#cotizar" class="btn">Cotizar</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default BrukiFocus;