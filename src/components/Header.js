import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <section>
                <h3><Link to='/'>close</Link></h3>
            </section>
        )
    }
}

export default Header;