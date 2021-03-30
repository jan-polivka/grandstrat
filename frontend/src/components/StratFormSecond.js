import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export class StratFormSecond extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange} = this.props;
        return (
            <React.Fragment>
                <Form>
                    Hello<br/>
                    <Button 
                        variant="secondary" 
                        type="submit"
                        onClick={this.back}>
                        Previous
                    </Button>
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={this.continue}>
                        Finish
                    </Button>
                </Form>
            </React.Fragment>
        );
    }
}

export default StratFormSecond;