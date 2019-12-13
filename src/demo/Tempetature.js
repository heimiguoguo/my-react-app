import React, { Component } from 'react'

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleTemp = this.handleTemp.bind(this);
    }
    handleTemp(e) {
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        console.log(this.props.inputStyle)
        return (
            <div>
                <label htmlFor=''>请输入温度</label>
                <input style={this.props.inputStyle} value={this.props.temperature} onChange={this.handleTemp}></input>
            </div>
        )
    }
}


class TemperatureShow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.temperature < 10) {
            return <p>好冷</p>
        }
        else if (this.props.temperature < 20) {
            return <p>舒服</p>
        }
        else if (this.props.temperature >= 10) {
            return <p>有点热</p>
        }
    }
}


class TemperatureContainer extends Component {
    constructor() {
        super();
        this.state = {
            temperature: 0,
            inputStyle: {
                borderColor: 'black',
                borderWidth: 2
            }
        }
        this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    }
    handleTemperatureChange(temperature) {
        this.setState({
            temperature: temperature
        })
        if (temperature > 20) {
            let inputStyle = Object.assign({}, this.state.inputStyle);
            inputStyle.borderColor = 'red';
            console.log(this.state.inputStyle);
            this.setState({
                inputStyle: inputStyle
            })
        }
    }
    render() {
        let temperature = this.state.temperature;
        return (
            <div>
                <TemperatureInput inputStyle={this.state.inputStyle} temperature={temperature} onTemperatureChange={this.handleTemperatureChange}></TemperatureInput>
                <TemperatureShow temperature={parseFloat(temperature)}></TemperatureShow>
            </div>
        )
    }
}

export default TemperatureContainer;
