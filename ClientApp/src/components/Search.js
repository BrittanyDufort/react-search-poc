import React from 'react';

export class SearchPage extends React.Component {
    render() {
        return (
            <div className="searchPage">
                <h1>Search</h1>
                <SearchBox />
            </div>
        );
    }
};

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            clicked: false,
        };
        this.updateInput = this.updateInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    updateInput(event) {
        this.setState({ inputValue: event.target.value })
    }

    handleClick= () => {
        this.setState({
            clicked: true
        });
    }

    render() {
        return (
            <div className="searchBox">
                <input type="text" onChange={this.updateInput} />
                <button onClick={this.handleClick}>GO</button>
                {this.state.clicked ? <SearchResults searchValue={this.state.inputValue} /> : null}
            </div >
        );
    }
};

class SearchResults extends React.Component {

    render() {
        return (
            <div className="searchResults">
                <h2>Results</h2>
                <p>You searched for {this.props.searchValue}.</p>
            </div>
        );
    }
};