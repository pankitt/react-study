import React, { Component } from 'react';

function Welcome(props) {
    return <p>Hello, {props.name}</p>;
}

class S12 extends Component {
    element = <Welcome name="Ingvar" />;

    render() {
        return (
            <section className="inner">
                {this.element}
                <Welcome name="Sara" />
                <Welcome name="Cahal" />
                <Welcome name="Edite" />
            </section>
        )
    }
}

export default S12;