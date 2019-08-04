import React, { Component } from 'react';
import '../scss/projects.scss';

class BrukiProjects extends Component {
    constructor(props) {
        super(props);
        this.projects = [
            {
                key: 'conair',
                img: 'assets/project-conair.png',
                name: 'CONAIR',
                reto: 'Crear engagement con las clientas, posicionar la marca en tiendas departamentales.',
                logro: 'Generamos una experiencia muy emotiva para las clientas, quienes compartieron el momento en redes sociales generando mucho contenido.'
            },
            {
                key: 'malikian',
                img: 'assets/project-Malikian.jpg',
                name: 'Malikian',
                reto: 'Promocionar el espectáculo del Violinista en México.',
                logro: 'Se promocionó el evento musical en Vía Verde, generando impactos visuales masivos en un medio sustentable.'
            },
            {
                key: 'gm',
                img: 'assets/project-GM.png',
                name: 'General Motors',
                reto: 'Dar a conocer su nuevo modelo eléctrico BOLT EV.',
                logro: 'Creamos comunicación directa con clientes potenciales, en un evento segmentado al público que nos interesaba en Arena CDMX.'
            }
        ];
    }

    render() {
        const { projects } = this;
        return (
            <section id="portafolio">
                <div class="section-wrapper projects-wrapper">
                    <h2>Trabajos</h2>
                    {
                        projects.map((project) => {
                            return(
                                <div class="projects-item" id={project.key}>
                                    <div class="project-img-wrapper">
                                        <img src={project.img} alt={project.name} />
                                    </div>
                                    <div class="project-info">
                                        <h3>{project.name}</h3>
                                        <p class="project-info_subtitle">Reto</p>
                                        <p>{project.reto}</p>
                                        <p class="project-info_subtitle">Logro</p>
                                        <p>{project.logro}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        );
    }
}

export default BrukiProjects;