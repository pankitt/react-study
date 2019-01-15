import React, {Component} from 'react';

class CustomTextInput extends Component {
    focusTextInput() {
        this.textInput.focus();
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    ref={el => this.textInput = el}
                />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput.bind(this)}
                />
            </form>
        );
    }
}

class S34_2 extends Component {
    componentDidMount() {
        // автофокус на input при монтировании
        this.textInput.focusTextInput();
    }

    render() {
        return (
            <div className="inner">
                <CustomTextInput ref={el => this.textInput = el} />
            </div>
        );
    }
}

export default S34_2;