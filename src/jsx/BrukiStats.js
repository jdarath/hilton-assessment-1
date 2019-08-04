import React, { Component } from 'react';
import '../scss/stats.scss';

class BrukiStats extends Component {
    render() {
        return (
            <section id="stats">
                <div class="section-wrapper stats-wrapper">
                    <div class="stats-item">
                        <h3>80+</h3>
                        <h4>Proyectos</h4>
                    </div>
                    <div class="stats-item">
                        <h3>21</h3>
                        <h4>Casos de éxito</h4>
                    </div>
                    <div class="stats-item">
                        <h3>80+</h3>
                        <h4>Clientes satisfechos</h4>
                    </div>
                </div>
            </section>
        );
    }
}

export default BrukiStats;