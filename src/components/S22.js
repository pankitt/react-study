import React, { Component } from 'react';

const users = ['Вася', 'Петя', 'Максим', 'Егор'];
function UserList(props){
    const users = props.users;
    const items = users.map((user, index) => <li key={index}>{user}</li>);
    return (<ul>{items}</ul>)
}

const users2 = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 3, name: 'Максим'},
    {id: 4, name: 'Егор'}
];
function UserList2(props){
    const users = props.users;
    const items = users.map((user) => <li key={user.id}>{user.name}</li>);
    return (<ul>{items}</ul>)
}

class S22 extends Component {
    render() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = numbers.map((num) => num * 10);
        console.log(numbers, result);


        return (
            <div className="inner">
                <UserList users={users}/>
                <UserList2 users={users2}/>
            </div>
        )
    }
}

export default S22;