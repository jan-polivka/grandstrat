import React, { Component } from 'react';
import StratFormFirst from './StratFormFirst';
import StratFormSecond from './StratFormSecond';
import StratFormThird from './StratFormThird';

export class StratFormParent extends Component {

    state = {
        step: 1,
        country: '',
        idea: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {

        const {step} = this.state;
        const {country, idea} = this.state;
        const values = {country, idea}
        
        switch(step){
            case 1:
                return (
                    <StratFormFirst
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <StratFormSecond
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    //Just have done! Click View strats in the top bar menu to get started?
                    //I want to also make a POST request here though
                    <StratFormThird
                        values={values}/>
                )
        }
    }
}

export default StratFormParent;