import React, { Component } from 'react';
import { Layout } from './components/Layout';
import { SearchPage } from './components/Search';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>
                <SearchPage />
            </Layout>
        );
    }
}
