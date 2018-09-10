import React, { Component } from 'react';
import isNil from 'lodash/fp/isNil';

export class Modal extends Component {

    constructor(props) {
        super(props);

        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    // Add listeners immediately after the component is mounted.
    componentDidMount() {
        window.addEventListener('keyup', this.handleKeyUp, false);
        document.addEventListener('click', this.handleOutsideClick, false);
    }

    // Remove listeners immediately before a component is unmounted and destroyed.
    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    // Handle the key press event of ESC to close modal.
    handleKeyUp(e) {
        const { onCloseRequest } = this.props;
        const keys = {
            27: () => {
                e.preventDefault();
                onCloseRequest();
                window.removeEventListener('keyup', this.handleKeyUp, false);
            },
        };

        if (keys[e.keyCode]) { keys[e.keyCode](); }
    }

    // Handle the mouse click on browser window to close modal.
    handleOutsideClick(e) {
        const { onCloseRequest } = this.props;

        if (!isNil(this.modal)) {
            if (!this.modal.contains(e.target)) {
                onCloseRequest();
                document.removeEventListener('click', this.handleOutsideClick, false);
            }
        }
    }

    render() {
        const {
            onCloseRequest,
            children,
        } = this.props;

        return (
            <div className="modalOverlay">
                <div className="modal-content">
                    <button type="button" className="closeButton" onClick={onCloseRequest}> &times; </button>
                    <div className="modal-body" ref={node => (this.modal = node)}>
                        <div className="modalContent">
                            {children}
                            <p>Some text in the Modal Body</p>
                            <p>Some other text...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};