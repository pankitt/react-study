import React, {Component} from 'react';

/*function SpeedDetector(props) {
    if (props.speed > props.maxSpeed) {
        return <div>Скорость превышена!</div>;
    }
    return <div>Скорость не превышена.</div>;
}*/

class S28 extends Component {
    constructor(props) {
        super(props);
        this.onSpeedChange = this.onSpeedChange.bind(this);
        this.state = {speed: 0};
    }

    MAX_SPEED_COUNTRY = 60;

    onSpeedChange(e) {
        this.setState({speed: e.target.value});
    }

    SpeedDetector(props) {
        if (this.state.speed > this.MAX_SPEED_COUNTRY) {
            return <div>Скорость превышена!</div>;
        }
        return <div>Скорость не превышена.</div>;
    }

    render() {
        const speed = this.state.speed;
        return (
            <div className="inner">
                <div>Введите скорость в км/ч:</div>
                <input value={speed} onChange={this.onSpeedChange}/>
                {/*<SpeedDetector speed={parseFloat(speed)} maxSpeed={this.MAX_SPEED_COUNTRY}/>*/}
                {this.SpeedDetector()}
            </div>
        );
    }
}

export default S28;