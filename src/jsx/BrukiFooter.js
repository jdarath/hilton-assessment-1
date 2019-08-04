import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TOGGLE_BUDGET } from './common/action-types';
import '../scss/footer.scss';

const mapStateToProps = state => {
    return { 
        budgetOn: state.budgetOn
    };
}
const mapDispatchToProps = dispatch => {
    return {
        toggleBudget: () => dispatch({ type: TOGGLE_BUDGET })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(
    class BrukiFooter extends Component {
        constructor(props) {
            super(props);
            this.toggleBudget = this.toggleBudget.bind(this);
        }

        toggleBudget() {
            this.props.toggleBudget();
        }

        render() {
            return (
                <section id="footer">
                    <div class="footer-top section-wrapper">
                        <div class="our-brand">
                            <img src="assets/logo_r.png" alt="Bruki logo" />
                            <div class="socialMedia">
                                <a class="socialMedia-item" href="https://instagram.com/brukiagency?igshid=172exbl7ptnua" target="_blank">
                                    <img src="assets/sm-instagram.png" alt="Instagram" />
                                </a>
                                <a class="socialMedia-item" href="https://www.facebook.com/BrukiAgency/" target="_blank">
                                    <img src="assets/sm-facebook.png" alt="Facebook" />
                                </a>
                            </div>
                        </div>
                        <div class="contact">
                            <div class="contact-item contact-cotizacion" onClick={this.toggleBudget}>
                                <img src="assets/ico-cotizacion.png" alt="Cotización" />
                                <span class="contact-item_label">Solicitar presupuesto</span>
                            </div>
                            <a class="contact-item contact-email" href="mailto:contacto@brukimedia.com" target="_blank">
                                <img src="assets/ico-email.png" alt="email" />
                                <span class="contact-item_label">contacto@brukimedia.com</span>
                            </a>
                            <a class="contact-item contact-address" href="https://goo.gl/maps/e79tDJPXNqfJZaqu8" target="_blank">
                                <img src="assets/ico-compass.png" alt="Donde estamos" />
                                <span class="contact-item_label">Montes Urales 424,<br />Lomas de Chapultepec.<br />CDMX, México</span>
                            </a>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        Copyright &copy; 2019 <span class="brand">Bruki Digital Agency</span>
                    </div>
                </section>
            );
        }
    }
);