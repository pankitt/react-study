import React, { Component } from 'react';

/*function ErrorMessage(props) {
    return <h3>Произошла ошибка на сервере. Не удалось сохранить ваши данные.</h3>;
}
function SuccessMessage(props) {
    return <h3>Ваши данные успешно сохранены!</h3>;
}
function Response(props) {
    const isSuccess = props.isSuccess;
    if (isSuccess) {
        return <SuccessMessage/>;
    }
    return <ErrorMessage/>;
    //или
    //return isSuccess ? <SuccessMessage/> : <ErrorMessage/>
}*/


class S18 extends Component {
    errorMessage = <p>Произошла ошибка на сервере. Не удалось сохранить ваши данные.</p>;
    successMessage = <p>Ваши данные успешно сохранены!</p>;

    Response(props) {
        return props ? this.successMessage : this.errorMessage;
    }

    render() {
        return (
            <section className="inner">
                {/*<Response isSuccess={true} />*/}
                {this.Response(true)}
            </section>
        )
    }
}

export default S18;