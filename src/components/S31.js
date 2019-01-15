import React, {Component} from 'react';

function Message(props) {
    return <div>{props.text}</div>;
}


const MyComponents = {
    Button: function Button(props) {
        return <button className={props.color} onClick={props.onClick}>{props.text}</button>;
    }
};

function SuccessButton(props) {
    return <MyComponents.Button color="green" text="OK" onClick={props.onClick}/>;
}
function ErrorButton(props) {
    return <MyComponents.Button color="red" text="Error" onClick={props.onClick}/>;
}

class S31 extends Component{
    showStatus = (e) => {
        console.log(e.target.innerHTML);
    };

    render() {
        return (
            <div className="inner">
                <Message text="Some Text" />
                <SuccessButton onClick={this.showStatus} />
                <ErrorButton onClick={this.showStatus} />
            </div>
        )
    }
}

export default S31;