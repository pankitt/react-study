import React, { Component } from 'react';

class S37 extends Component{
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.style !== nextProps.style) return true;
        if (this.state.value !== nextState.value) return true;
        return false;
    }

    render() {
        return (
            <div className={"inner"}>
                <button style={this.props.style}
                        onClick={() => this.setState(state => ({value: state.value + 1}))}>
                    Число: {this.state.value}
                </button>
            </div>
        );
    }
}

export default S37;