import React, { Component } from 'react';

import OutputBox from './output-box';
import InputButton from './input-button';

class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            result : ''
        };
    }

    appendDataToResult = (data) => {
        const numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ''];
        const lastChar = this.state.result.charAt(this.state.result.length - 1);
        if(numeric.some(function(value){ return value === lastChar }) || numeric.some(function(value){ return data === value })){
            this.setState({
                result: this.state.result + data
            });
        }
    }

    calculateResult = () => {
        const numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ''];
        const lastChar = this.state.result.charAt(this.state.result.length - 1);
        if(numeric.some(function(value){ return value === lastChar })){
            this.setState({
                result: eval(this.state.result).toString()
            });
        }
    }

    clearResult = () => {
        this.setState({
            result: ''
        });
    }

    clearLastChar = () => {
        const result = this.state.result.slice(0, this.state.result.length-1);
        this.setState({
            result
        });
    }

    render() {
        return (
            <div className="calculator-box">
            <div>
                <OutputBox result={this.state.result} />
            </div>
            <div>
                <div>
                    <InputButton value={1} result={(data) => { this.appendDataToResult('1'); }} />
                    <InputButton value={2} result={(data) => { this.appendDataToResult('2'); }} />
                    <InputButton value={3} result={(data) => { this.appendDataToResult('3'); }} />
                    <InputButton value={"+"} result={(data) => { this.appendDataToResult('+'); }} />
                </div>
                <div>
                    <InputButton value={4} result={(data) => { this.appendDataToResult('4'); }} />
                    <InputButton value={5} result={(data) => { this.appendDataToResult('5'); }} />
                    <InputButton value={6} result={(data) => { this.appendDataToResult('6'); }} />
                    <InputButton value={"-"} result={(data) => { this.appendDataToResult('-'); }} />
                </div>
                <div>
                    <InputButton value={7} result={(data) => { this.appendDataToResult('7'); }} />
                    <InputButton value={8} result={(data) => { this.appendDataToResult('8'); }} />
                    <InputButton value={9} result={(data) => { this.appendDataToResult('9'); }} />
                    <InputButton value={"*"} result={(data) => { this.appendDataToResult('*'); }} />
                </div>
                <div>
                    <InputButton value={0} result={(data) => { this.appendDataToResult('0'); }} />
                    <InputButton value={"%"} result={(data) => { this.appendDataToResult('%'); }} />
                    <InputButton value={"/"} result={(data) => { this.appendDataToResult('/'); }} />
                    <InputButton value={"="} result={() => { this.calculateResult(); }}  />
                </div>
                <div>
                    <InputButton value={"AC"} result={() => { this.clearResult(); }} />
                    <InputButton value={"C"} result={() => { this.clearLastChar(); }} />
                </div>
            </div>
            </div>
        );
    }
}

export default Calculator;
