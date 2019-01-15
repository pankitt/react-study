import React, { Component } from 'react';
import PropTypes from 'prop-types';

class S33 extends Component {
    static propTypes = {
        name: PropTypes.string,
    };
    constructor(props) {
        super(props);
        this.state = {
            name: 'Igor'
        }
    }
    render() {
        return (
            <div className="inner">
                {this.state.name}
            </div>
        )
    }
}

export default S33;