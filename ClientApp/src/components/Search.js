import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import axios from 'axios';

export class SearchPage extends React.Component {
    render() {
        return (
            <div className="searchPage">
                <h1>Search</h1>
                <p><strong>Please search by Album ID (1 - 100)</strong></p>
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

    handleClick = (event) => {
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

    state = {
        photos: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
                const photos = res.data;
                this.setState({ photos });
            })
    }

    render() {
        return (
            <div className="searchResults">
                {this.state.photos.filter(
                    ({ albumId }) => albumId == this.props.searchValue).map(photo =>
                    <div className="searchResult">
                        <h4>{photo.title}</h4>
                        <p>Album ID: {photo.albumId}</p>
                        <img src={photo.thumbnailUrl} />
                    </div>
                )}
            </div>
        )
    }
};