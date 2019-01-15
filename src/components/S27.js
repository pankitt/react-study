import React, { Component } from 'react';

class S27 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sex: 'female',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        const name = event.target.name;

        this.setState({
            [name]:event.target.value
        });
    }

    render() {
        return (
            <div className="inner">
                <form>
                    <label>
                        First Name:
                        <input name="firstName" type="text" value={this.state.firstName} onChange={this.onInputChange}/>
                    </label>
                    <label>
                        Last Name:
                        <input name="lastName" type="text" value={this.state.lastName} onChange={this.onInputChange}/>
                    </label>
                    <label>
                        Email:
                        <input name="email" type="email" value={this.state.email} onChange={this.onInputChange}/>
                    </label>
                    <label>
                        Phone:
                        <input name="phone" type="tel" value={this.state.phone} onChange={this.onInputChange}/>
                    </label>
                    <label>
                        Sex:
                        <select name="sex"  value={this.state.sex} onChange={this.onInputChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                </form>
            </div>
        );
    }
}

export default S27;