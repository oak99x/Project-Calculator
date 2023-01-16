import React, { Component } from "react"
import './Calculator.css'

import Button from "../components/Button"
import Display from "../components/Display"

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}


export default class Calculador extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)
        this.cleanMemory = this.cleanMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    cleanMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]

            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.clearMemory()
                return
                }
            } catch (e) {
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })

        }
    }

    addDigit(n) {
        //não deixa adicioar . mais de uma vez exemplo 2.065.2
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        //tratando caso queira um numeros por exemplo 0.33 0.0058
        let clearDisplay = false

        if (this.state.displayValue === '0' && n === '.') {
            clearDisplay = false
        } else {
            clearDisplay = this.state.displayValue === '0' ||
                this.state.clearDisplay
        }

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label='AC' click={this.cleanMemory} triple />
                <Button label='/' click={this.setOperation} operation />
                <Button label='7' click={this.addDigit} />
                <Button label='8' click={this.addDigit} />
                <Button label='9' click={this.addDigit} />
                <Button label='*' click={this.setOperation} operation />
                <Button label='4' click={this.addDigit} />
                <Button label='5' click={this.addDigit} />
                <Button label='6' click={this.addDigit} />
                <Button label='-' click={this.setOperation} operation />
                <Button label='1' click={this.addDigit} />
                <Button label='2' click={this.addDigit} />
                <Button label='3' click={this.addDigit} />
                <Button label='+' click={this.setOperation} operation />
                <Button label='0' click={this.addDigit} double />
                <Button label='.' click={this.addDigit} />
                <Button label='=' click={this.setOperation} operation />
            </div>
        )
    }
}