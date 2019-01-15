import React, { Component } from 'react';

function DeleteUserLink() {
    function onClick(e) {
        e.preventDefault();
        console.log('Пользователь был удален.');
    }

    return (
        <button onClick={onClick}>Удалить пользователя</button>
    );
}

class S16 extends Component {

    onLog = () => {
        console.log('объект:', this);
    };

    render() {
        return (
            <section className="inner">
                <DeleteUserLink/>
                <br/>
                <button onClick={this.onLog}>Лог</button>
            </section>
        )
    }
}

export default S16;