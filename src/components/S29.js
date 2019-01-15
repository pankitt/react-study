import React, { Component } from 'react';


const UNIT = {
    KPH: 'Км/ч',
    MPH: 'Миль/ч'
};

function SpeedDetector(props) {
    const unit = props.unit;
    if (props.speed >= props.maxSpeed) {
        return <div>Скорость в {UNIT[unit]} превышена!</div>;
    }
    return <div>Скорость в {UNIT[unit]} не превышена.</div>;
}

function isSpeedValid(value){
    if(value !== null && value !== '' && value !== undefined){
        let intValue = parseInt(value, 10);
        return !(isNaN(intValue) || !isFinite(intValue));
    }
    return 0;
}

function convertToKph(mph) {
    return mph * 1.61;
}

function convertToMph(kph) {
    return kph / 1.61;
}

function сonvertSpeed(value, convertor) {
    if(isSpeedValid(value)){
        const intValue = parseInt(value, 10);
        let converted = convertor(intValue);
        return Math.round(converted* 100) / 100;
    }
    return '';
}

class SpeedSetter extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onSpeedChange(e.target.value);
    }

    render() {
        let speed = this.props.speed;
        let unit = this.props.unit;
        return (
            <p>
                <span>Введите скорость в "{UNIT[unit]}": </span>
                <input value={speed} onChange={this.onChange}/>
            </p>
        );
    }
}


class S29 extends Component {
    constructor(props){
        super(props);
        this.onSpeedInKphChange = this.onSpeedInKphChange.bind(this);
        this.onSpeedInMphChange = this.onSpeedInMphChange.bind(this);
        this.state = {speed: 0, unit: 'KPH'};
    }

    MAX_SPEED_IN_CITY_IN_KPH = 60;

    onSpeedInKphChange(speed) {
        this.setState({unit: 'KPH', speed});
    }

    onSpeedInMphChange(speed) {
        this.setState({unit: 'MPH', speed});
    }

    render() {
        const unit = this.state.unit;
        const speed = this.state.speed;
        const kph = unit === 'MPH' ? сonvertSpeed(speed, convertToKph) : speed;
        const mph = unit === 'KPH' ? сonvertSpeed(speed, convertToMph) : speed;

        return (
            <div className="inner">
                <SpeedSetter unit="KPH" speed={kph} onSpeedChange={this.onSpeedInKphChange}/>
                <SpeedSetter unit="MPH" speed={mph} onSpeedChange={this.onSpeedInMphChange}/>
                <SpeedDetector speed={kph} unit="KPH" maxSpeed={this.MAX_SPEED_IN_CITY_IN_KPH}/>
            </div>
        );
    }
}

export default S29;