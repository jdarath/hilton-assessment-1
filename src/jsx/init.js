import React, { Component } from 'react';
import { render } from 'react-dom';
import HHeader from './HHeader';
import HHotel from './HHotel';
import '../scss/main.scss';

class HiltonA1App extends Component {
    render() {
        return(
            <>
                <HHeader />
                <HHotel />
            </>
        );
    }
}

render(
    <HiltonA1App />, 
    document.getElementById('HiltonA1-app')
);