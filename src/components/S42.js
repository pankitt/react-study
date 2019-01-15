import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/dialog';
import 'jquery-ui/themes/base/all.css';


class Dialog extends Component {
    componentDidMount() {
        this.$element = $(this.element);
        this.$element.dialog({title: this.props.title, close: this.props.onClose});
    }

    componentWillUnmount() {
        this.$element.dialog('destroy');
    }

    render() {
        // показать диалог по условию
        return this.props.isShowed ?
            <div ref={element => this.element = element}>{this.props.children}</div> : null;
    }
}

class S42 extends Component {
    constructor(props){
        super(props);
        this.showDialog = this.showDialog.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
        this.state = {isDialogShowed: false};
    }

    showDialog(){
        this.setState({isDialogShowed: true});
    }

    hideDialog(){
        this.setState({isDialogShowed: false});
    }

    render(){
        return (
            <div className={"inner"}>
                <button onClick={this.showDialog}>Показать диалог</button>
                {this.state.isDialogShowed ? <Dialog isShowed={true} title="Диалог" onClose={this.hideDialog}>Диалог!</Dialog> : null}
            </div>
        );
    }
}

export default S42;