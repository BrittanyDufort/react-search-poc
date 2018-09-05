import React, { Component } from 'react';

export class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm /> 
            </div>
        ); 
    }
};

export class CommentList extends React.Component {
    render() {
        const data = [
            { Id: 1, Author: "Daniel Lo Nigro", Text: "Hello ReactJS.NET World!" },
            { Id: 2, Author: "Pete Hunt", Text: "This is one comment" },
            { Id: 3, Author: "Jordan Walke", Text: "This is *another* comment" }
        ];
        const commentNodes = this.props.data.map(comment => (
            <Comment author={comment.Author} key={comment.Id}>
                {comment.Text}
            </Comment>
        ));
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
};

export class CommentForm extends React.Component {
    render() {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
      </div>
        );
    }
};

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
};