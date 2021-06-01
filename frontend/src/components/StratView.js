import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import axios from 'axios'

const StratView = props => {

    const [respo, setResp] = useState([])

    useEffect (() => {
        console.log('effect')
        axios
            .get('http://localhost:8080/strats')
            .then(response => {
                console.log('promise fulfilled')
                setResp(response.data)
            })
    },[])

    return (
        <React.Fragment>
            <Accordion>
                {respo.map((item) => { 
                    return (
                    <Card key={item.id}>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={item.id}>
                            {item.country}
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={item.id}>
                        <Card.Body>
                            {item.idea1}
                            <br></br>
                            {item.idea2}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    )
                })}
            </Accordion>
        </React.Fragment>
    );
};

export default StratView;