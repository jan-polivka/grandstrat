import React, { Component } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

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
        const {values} = this.props;
        return (
            <React.Fragment>
                <Form>
                    Hello<br/>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Idea</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th>{values.idea}</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th>{values.idea2}</th>
                            </tr>
                        </tbody>
                    </Table>
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