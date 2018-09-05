import React, { Component } from 'react';
import { SearchPage } from './components/Search';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <SearchPage />
        );
    }
}
