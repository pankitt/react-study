import React, { Component } from 'react';

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100%', border: '1px solid #ccc' }} onMouseMove={this.handleMouseMove}>
                <p>The mouse position is: ({this.state.x}, {this.state.y})</p>
            </div>
        );
    }
}

class S40 extends Component {
    render() {
        return (
            <div className={"inner"}>
                <Mouse />
            </div>
        )
    }
}

export default S40;