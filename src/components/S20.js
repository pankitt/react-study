import React, { Component } from 'react';

function Console(props) {
    const errors = props.errors;
    return (
        <div>
            <h3>Attention!</h3>
            {errors.length > 0 &&
                <p>You have <b>{errors.length}</b> errors.</p>
            }
        </div>
    );
}

class S20 extends Component {
    constructor(props) {
        super(props);
        this.state = {isSent: false};
        this.sendMess = this.sendMess.bind(this);
    }

    sendMess() {
        this.setState({isSent: true});
    }

    errors = [
        'Failed to load resource: net::ERR_INSECURE_RESPONSE',
        'TypeError: e is undefined',
        'Uncaught ReferenceError: calculate is not defined'
    ];

    render() {
        const isSent = this.state.isSent;

        return (
            <section className="inner">
                <Console errors={this.errors} />
                <div>
                    <p>
                        <button onClick={this.sendMess}>Отправить</button> :
                        Ваше сообщение {isSent ? 'успешно' : 'не'} отправлено
                    </p>
                    <p>
                        {isSent ? ('isSent = true') : ('isSent = false')}
                    </p>
                </div>
            </section>
        )
    }
}

export default S20;