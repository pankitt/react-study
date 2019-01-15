import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: new Date().toLocaleTimeString()
        };
    }

    timer(){
        this.setState({
            value: new Date().toLocaleTimeString()
        });
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.timer(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <p>{value}</p>
            </div>
        )
    }
}

class S15 extends Component {
    render() {
        return (
            <section className="inner">
                <Time/>
            </section>
        )
    }
}

export default S15;