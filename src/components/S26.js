import React, { Component } from 'react';

class S26 extends Component {
    constructor(props) {
        super(props);
        this.state = {language: 'JavaScript'};

        this.onSelectChange = this.onSelectChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSelectChange(event) {
        this.setState({language: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(`Вы выбрали язык: ${this.state.language}`);
    }

    render() {
        return (
            <div className="inner">
                <form onSubmit={this.onSubmit}>
                    <label>
                        Выберите язык программирования:
                        <select value={this.state.language} onChange={this.onSelectChange}>
                            <option value="C++">C++</option>
                            <option value="Java">Java</option>
                            <option value="C#">C#</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Scala">Scala</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default S26;