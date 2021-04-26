import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import {ideaGroups} from '../ideaGroups';

export class StratFormFirst extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    options = ideaGroups.map((item) => {
        return (
            <option key={item.label} value={item.value}>
                {item.label}
            </option>
        )
    })

    render() {

        const {values, handleChange} = this.props;

        return (
            <React.Fragment>
                <Form>
                    <Form.Group>
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={handleChange('country')}
                            defaultValue={values.country}
                        />
                        <Form.Label>First Idea</Form.Label>
                        <Form.Control
                            as="select"
                            value={values.idea1}
                            onChange={handleChange('idea1')}
                        >
                            {this.options}
                        </Form.Control>
                        <Form.Label>Second Idea</Form.Label>
                        <Form.Control
                            as="select"
                            value={values.idea2}
                            onChange={handleChange('idea2')}
                        >
                            {this.options}
                        </Form.Control>
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