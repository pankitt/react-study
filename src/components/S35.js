import React, {Component} from 'react';

class S35 extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.nameTextField.value) console.log(`Имя пользователя: ${this.nameTextField.value}`);
    }

    render() {
        return (
            <div className={"inner"}>
                <form onSubmit={this.onSubmit}>
                    <label>Имя пользователя:
                        <input ref={(el) => this.nameTextField = el} name="name" type="text" defaultValue="Аноним"/></label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default S35;