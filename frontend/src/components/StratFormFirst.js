import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export class StratFormFirst extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values, handleChange} = this.props;
        return (
            <React.Fragment>
                <Form>
                    <Form.Group>
                        <Form.Label>The name</Form.Label>
                        <Form.Control
                            as="textarea"
                            onChange={handleChange('country')}
                            defaultValue={values.country}
                        />
                        <Form.Label>The idea</Form.Label>
                        <Form.Control
                            as="textarea"
                            onChange={handleChange('idea')}
                            defaultValue={values.idea}
                        />
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={this.continue}>
                        Next
                    </Button>
                </Form>
            </React.Fragment>
        );
    }
}

export default StratFormFirst;