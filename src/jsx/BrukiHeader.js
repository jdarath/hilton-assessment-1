import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TOGGLE_BUDGET } from './common/action-types';
import '../scss/header.scss';

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
    class BrukiHeader extends Component {
        constructor(props) {
            super(props);
            this.state = {
                mobNavOpen: false
            };
            this.navToggler = this.navToggler.bind(this);
            this.toggleBudget = this.toggleBudget.bind(this);
        }

        toggleBudget() {
            this.props.toggleBudget();
            this.navToggler();
        }

        navToggler() {
            let {movNavOpen} = this.state;
            this.setState({ movNavOpen: !movNavOpen})
        }

        render() {
            const {movNavOpen} = this.state;
            return (
                <header>
                    <div class="menu-wrapper">
                        <a href="#home" class="logo-ws"><img id="logo" src="assets/logo_w.png" /></a>
                        <a href="#home" class="logo-mb"><img id="logo" src="assets/logo_r.png" /></a>
                        <img id="menu-mb" src="assets/menu.png" onClick={this.navToggler} />
                        <nav class={movNavOpen? 'visible' : ''}>
                            <a class="navItem" href="#equipo" onClick={this.navToggler}>Equipo</a>
                            <span class="mn-sep">|</span>
                            <a class="navItem" href="#servicios" onClick={this.navToggler}>Servicios</a>
                            <span class="mn-sep">|</span>
                            <a class="navItem" href="#portafolio" onClick={this.navToggler}>Portafolio</a>
                            <span class="mn-sep">|</span>
                            <a class="navItem" href="#cotizar" onClick={this.toggleBudget}>Cotizar</a>
                        </nav>
                    </div>
                </header>
            );
        }
    }
);