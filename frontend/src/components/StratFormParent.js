import React, { Component } from 'react';
import StratFormFirst from './StratFormFirst';
import StratFormSecond from './StratFormSecond';
import StratFormThird from './StratFormThird';

export class StratFormParent extends Component {

    state = {
        step: 1,
        country: '',
        idea1: '',
        idea2: '',
        tag: ''
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
        const {country, idea1, idea2, tag} = this.state;
        const values = {country, idea1, idea2, tag}
        
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
            case 4:
                return (
                    <div>This is case 4</div>
                )
        }
    }
}

export default StratFormParent;