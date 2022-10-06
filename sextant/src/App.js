import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="I'm an exhibit!" child="My name is praise"></Exhibit>
                <Exhibit name="I'm also an exhibit!" child="My name is praise"></Exhibit>
                <Exhibit name="Don't forget about me, I'm an exhibit too!" child="My name is praise"></Exhibit>
            </div>
        );
    }
}

export default App;
