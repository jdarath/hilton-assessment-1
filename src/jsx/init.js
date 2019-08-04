import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './common/store';
import BrukiHeader from './BrukiHeader';
import BrukiIntro from './BrukiIntro.js';
import BrukiAbout from './BrukiAbout.js';
import BrukiTeam from './BrukiTeam.js';
import BrukiFocus from './BrukiFocus.js';
import BrukiStats from './BrukiStats.js';
import BrukiProjects from './BrukiProjects.js';
import BrukiClients from './BrukiClients.js';
import BrukiFooter from './BrukiFooter.js';
import BrukiBudget from './BrukiBudget.js';
import '../scss/main.scss';

class BrukiApp extends Component {
    render() {
        return(
            <section id="BrukiApp">
                <BrukiHeader />
                <BrukiIntro />
                <BrukiAbout />
                <BrukiTeam />
                <BrukiFocus />
                <BrukiStats />
                <BrukiProjects />
                <BrukiClients />
                <BrukiFooter />
                <BrukiBudget />
            </section>
        );
    }
}

render(
    <Provider store={store}>
        <BrukiApp />
    </Provider>, 
    document.getElementById('bruki-app')
);