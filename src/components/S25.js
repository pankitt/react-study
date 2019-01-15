import React, { Component } from 'react';

class S25 extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', message: ''};

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        return (
            (this.state.message && this.state.email) ? console.log(`Сообщение успешно отправлено получателю "${this.state.email}"`) : null
        );
    }

    onMessageChange(event){
        this.setState({message: event.target.value});
    }

    onEmailChange(e) {
        this.setState({email: e.target.value});
    }

    render() {
        return (
            <div className="inner">
                <form onSubmit={this.onSubmit}>
                    <p><label>
                        email получателя:
                        <input type="text" name="email" value={this.state.email} onChange={this.onEmailChange}/>
                    </label></p>
                    <p><label>
                        Текст сообщения:
                        <textarea type="text" name="message" value={this.state.message} onChange={this.onMessageChange}/>
                    </label></p>
                    <p><input type="submit" value="Submit" /></p>
                </form>
            </div>
        );
    }
}

export default S25;