import React, { Component } from 'react';
import '../scss/team.scss';

class BrukiTeam extends Component {
    render() {
        return (
            <section id="equipo">
                <div class="section-wrapper team-wrapper">
                    <h2>Equipo</h2>
                    <p>Somos un grupo de expertos multicultural y multidisciplinar, reconocido internacionalmente
                        que se unen en este nuevo proyecto para diseñar estrategias 
                        basadas en las últimas tendencias del mercado.
                    </p>
                    <div class="team-member">
                        <img src="assets/Manu-Cota.jpg" alt="Manu Cota" />
                        <div class="member-info">
                            <h3 class="member-name">Manu Cota</h3>
                            <p class="member-position">CEO</p>
                        </div>
                    </div>
                    <div class="team-member">
                        <img src="assets/Poulet-Patino.jpg" alt="Poulet Patiño" />
                        <div class="member-info">
                            <h3 class="member-name">Poulet Patiño</h3>
                            <p class="member-position">CSO</p>
                        </div>
                    </div>
                    <div class="team-member">
                        <img src="assets/Lili-Meneses.jpg" alt="Lili Meneses" />
                        <div class="member-info">
                            <h3 class="member-name">Lili Meneses</h3>
                            <p class="member-position">Project Manager</p>
                        </div>
                    </div>
                    <div class="team-member">
                        <img src="assets/Chucho-Salinas.jpg" alt="Chucho Salinas" />
                        <div class="member-info">
                            <h3 class="member-name">Chucho Salinas</h3>
                            <p class="member-position">New Business Development</p>
                        </div>
                    </div>
                    <div class="team-member">
                        <img src="assets/Oscar-Gonzalez-Lukie.jpg" alt="Oscar González Lukie" />
                        <div class="member-info">
                            <h3 class="member-name">Oscar González Lukie</h3>
                            <p class="member-position">COO</p>
                        </div>
                    </div>
                    <div class="team-member">
                        <img src="assets/Sara-Navarro.jpeg" alt="Sara Navarro" />
                        <div class="member-info">
                            <h3 class="member-name">Sara Navarro</h3>
                            <p class="member-position">RRHH</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BrukiTeam;