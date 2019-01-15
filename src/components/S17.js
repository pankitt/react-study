import React, { Component } from 'react';

class S17 extends Component {
    constructor(props) {
        super(props);
        this.state = {temperature: 0};

        // Привязка необходима, чтобы сделать this доступным в коллбэке
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    }

    onIncrease(){
        this.setState(prevState => ({
            temperature: prevState.temperature + 1
        }))
    }

    onDecrease(){
        this.setState(prevState => ({
            temperature: prevState.temperature - 1
        }))
    }

    render() {
        return (
            <section className="inner">
                <div>Текущая температура: <strong>{this.state.temperature}</strong></div>
                <button onClick={this.onDecrease}>-</button>
                <button onClick={this.onIncrease}>+</button>
            </section>
        )
    }
}

export default S17;