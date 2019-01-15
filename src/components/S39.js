import React, { Component } from 'react';

const arr = [
    {name: 'Bob', age: 20},
    {name: 'Fin', age: 21},
    {name: 'Sam', age: 22}
];

class Columns extends Component {
    render() {
        return (
            <React.Fragment>
                {arr.map((item, i) => (
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </React.Fragment>
        );
    }
}

class S39 extends Component {
    render() {
        return (
            <div className={"inner"}>
                <table>
                    <tbody>
                        <Columns arr={arr} />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default S39;