import React, { Component } from 'react';

function Fireplace(props) {
    const { isBurning, fireON, fireOFF } = props;
    const setFireMessage = (
        <div>
            <p>Камин горит!</p>
            <button className="blue" onClick={fireOFF}>Потушить</button>
        </div>
    );
    const snuffOutMessage = (
        <div>
            <p>Камин не горит</p>
            <button className="orange" onClick={fireON}>Зажечь</button>
        </div>
    );

    return isBurning ? setFireMessage : snuffOutMessage;
}

class S19 extends Component {
    constructor(props) {
        super(props);
        this.onSetFire = this.onSetFire.bind(this);
        this.onSnuffOut = this.onSnuffOut.bind(this);
        this.state = {isBurning: false};
    }

    onSetFire() {
        this.setState({isBurning: true});
    }
    onSnuffOut() {
        this.setState({isBurning: false});
    }

    render() {
        const isBurning = this.state.isBurning;

        return (
            <div className="inner">
                <Fireplace isBurning={isBurning} fireON={this.onSetFire} fireOFF={this.onSnuffOut} />
            </div>
        );
    }
}

export default S19;