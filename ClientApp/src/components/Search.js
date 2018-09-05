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
        };
        this.updateInput = this.updateInput.bind(this);
        this.renderSearchResults = this.renderSearchResults.bind(this);
    }

    updateInput(event) {
        this.setState({ inputValue: event.target.value })
    }

    renderSearchResults= () => {
        return <SearchResults searchValue={this.state.inputValue} />;
    }

    render() {
        return (
            <div className="searchBox">
                <input type="text"/>
                <button onClick={this.updateInput}>GO</button>
                <SearchResults searchValue={this.state.inputValue} />
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

//class Test extends React.Component {
//    state = {
//        text: 'some text'
//    }

//    onClickButton1 = () => {
//        this.setState({
//            text: 'clicked 1'
//        });
//    }

//    onClickButton2 = () => {
//        this.setState({
//            text: 'clicked 2'
//        });
//    }

//    // etc...

//    render() {
//        return (
//            <div>
//                <button onClick={this.onClickButton1}>
//                    Button 1
//        </button>
//                <button onClick={this.onClickButton2}>
//                    Button 2
//        </button>
//                <h1>{this.state.text}</h1>
//                <SearchResults searchValue={this.state.text} />
//            </div>
//        );
//    }
//};

