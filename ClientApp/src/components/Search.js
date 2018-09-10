import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import axios from 'axios';
import { Modal } from './Modal';

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

    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }

    //Grabs data (test json) on component mount
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
                        <SearchResult photo={photo} />
                    )}
            </div>
        )
    }
};

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    handleToggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        const { showModal } = this.state;

        return (
            <div className="searchResult" id={this.props.photo.id}>
                <h4>{this.props.photo.title}</h4>
                <p>Album ID: {this.props.photo.albumId}</p>
                <a src="#"
                    className="modalButton"
                    onClick={() => this.handleToggleModal()}>
                    <img src={this.props.photo.thumbnailUrl} />
                </a>

                {showModal &&
                    <Modal onCloseRequest={() => this.handleToggleModal()}>
                        <img src={this.props.photo.url} alt={this.props.photo.title} />
                    </Modal>
                }
            </div>
        )
    }
};