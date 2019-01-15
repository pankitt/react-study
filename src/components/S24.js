import React, { Component } from 'react';

class S24 extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};

        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        return (
            this.state.login ? console.log(`${this.state.login}, добро пожаловать!`) : null
        )
    }

    onPasswordChange(event){
        this.setState({password: event.target.value});
    }

    onLoginChange(event) {
        this.setState({login: event.target.value.toUpperCase()});
    }

    render() {
        return (
            <div className="inner">
                <form onSubmit={this.onSubmit}>
                    <p><label> Логин:
                        <input type="text" name="login" value={this.state.login} onChange={this.onLoginChange}/>
                    </label></p>
                    <p><label> Пароль:
                        <input type="password" name="password" value={this.state.password} onChange={this.onPasswordChange}/>
                    </label></p>
                    <p><input type="submit" value="Submit" /></p>
                </form>
            </div>
        );
    }
}

export default S24;