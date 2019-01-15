import React, {Component} from 'react';

function StatusMessage(props) {
    const status = props.status === 'ok' ? 'message_success' : 'message_failure';

    return (
        <div className={'message ' + status}>
            <h4>{props.title}</h4>
            <p>{props.children}</p>
        </div>
    );
}

function Inner(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

class S30 extends Component {
    render() {
        return (
            <div className="inner">
                <Inner>childrens:</Inner>
                <StatusMessage title="Успех" status="ok">Операция завершена успешено!</StatusMessage>
                <StatusMessage title="Ошибка">Операция не выполнена!</StatusMessage>
            </div>
        )
    }
}

export default S30;