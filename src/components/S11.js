import React, { Component } from 'react';

class S11 extends Component {
    formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }
    Perez = {
        firstName: 'Harper',
        lastName: 'Perez'
    };
    element = (
        <p>
            Hello, {this.formatName(this.Perez)}!
        </p>
    );
     getGreeting(user) {
        if (user) {
            return <p>Hello, {this.formatName(user)}!</p>;
        }
        return <p>Hello, Stranger.</p>;
    }
    time = (
        <div>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    );

    render() {
        return (
            <section className="inner">
                {this.element}
                {this.getGreeting()}
                {this.getGreeting(this.Perez)}
                <h5>{this.time}</h5>
            </section>
        )
    }
}

export default S11;