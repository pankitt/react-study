import React, { Component } from 'react';

const users = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 3, name: 'Ваня'}
];
const messages = [
    {id: 1, message: 'Всем привет!', authorId: 1},
    {id: 2, message: 'И тебе привет!', authorId: 2},
    {id: 3, message: 'Привет, Вася :)', authorId: 3},
    {id: 4, message: 'Бла бла бла'}
];

function Chat(props) {
    const users = props.users;
    const userList = (
        <p> Пользователи чата:
            {users.map((user) =>
                <b key={user.id}> {user.name}; </b>
            )}
        </p>
    );
    const messageList = props.messages.map((message) => {
        let author = null;
        // users.filter((user) => {if(user.id === message.authorId) author = user; return author});
        users.forEach((user) => {if(user.id === message.authorId) author = user});


        return (<p key={message.id}>
            <b>{author ? author.name : 'Аноним'}: </b>
            <span>{message.message}</span>
        </p>)
    });
    return (
        <div>
            {userList}
            {messageList}
        </div>
    );
}

class S23 extends Component {
    render() {
        return (
            <div className="inner">
                <Chat users={users} messages={messages}/>
            </div>
        )
    }
}

export default S23