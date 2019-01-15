import React, { Component } from 'react';


function formatDate(date) {
    return date.toLocaleDateString();
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
            <div className="UserInfo-name">
                <small>{props.user.name}</small>
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment clearfix">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                <small>{formatDate(props.date)}</small>
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};
const comment2 = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Felix',
        avatarUrl: 'http://placekitten.com/g/64/65'
    }
};


class S13 extends Component {

    render() {
        return (
            <section className="inner">
                <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author} />
                <Comment
                    date={comment2.date}
                    text={comment2.text}
                    author={comment2.author} />
            </section>
        )
    }
}

export default S13;