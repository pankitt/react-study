import React, {Component} from 'react';

class S34 extends Component {
    constructor(props) {
        super(props);
        // this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // this.textInput.current.focus();
        this.textInput.focus();
    }

    render() {
        return (
            <div className="inner">
                <input
                    type="text"
                    // ref={this.textInput} />
                    ref={el => this.textInput = el} />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

export default S34;