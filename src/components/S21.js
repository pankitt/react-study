import React, { Component } from 'react';

function DangerAlert(props) {
    return (
        <p className="alert alert-danger">{props.text}</p>
    );
}

class S21 extends Component {
    constructor(props) {
        super(props);
        this.state = {isDangerAlertShowed: true};
        this.toggleDangerAlert = this.toggleDangerAlert.bind(this);
    }

    toggleDangerAlert() {
        this.setState(prevState => ({
            isDangerAlertShowed: !prevState.isDangerAlertShowed
        }));
    }

    render() {
        return (
            <div className="inner">
                {this.state.isDangerAlertShowed ?
                    <DangerAlert text={'Внимание! В приложении возникли некоторые проблемы!'} /> : null}
                <button onClick={this.toggleDangerAlert}>
                    {this.state.isDangerAlertShowed ? 'Скрыть' : 'Показать'}
                </button>
            </div>
        );
    }
}

export default S21;