import React, { Component } from 'react';

class S36 extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        if(this.fileInput.files[0]) console.log(`Selected file - ${this.fileInput.files[0].name}`);
    }

    render() {
        return (
            <div className={"inner"}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Upload file:
                        <input type="file" ref={el => this.fileInput = el} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default S36;