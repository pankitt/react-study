import React, {Component} from 'react';

class S34 extends Component {
    constructor(props) {
        super(props);

        this.focusTextInput = () => {
            // Фокусировка на текстовом поле, используя нативный DOM API
            if (this.textInput) this.textInput.focus();
        };
    }

    componentDidMount() {
        // автофокус на input при монтировании
        this.focusTextInput();
    }

    render() {
        return (
            <div className="inner">
                <input
                    type="text"
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