import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios'

const StratView = props => {

    const [respo, setResp] = useState([])

    useEffect (() => {
        console.log('effect')
        axios
            .get('http://localhost:8080/strattest')
            .then(response => {
                console.log('promise fulfilled')
                setResp(response.data)
            })
    },[])
    console.log('render', respo, 'respo')
    console.log('render', typeof(respo), 'respo')

    return (
        <React.Fragment>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Sheet</th>
                    </tr>
                </thead>
                <tbody>
                    {respo.map((item) => {
                        return(
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <th>{item.name}</th>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        </React.Fragment>
    );
};

export default StratView;