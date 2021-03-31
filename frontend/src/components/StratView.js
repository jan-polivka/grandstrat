import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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


    return (
        <div>
            This is the strat view
        </div>
    );
};

StratView.propTypes = {
    
};

export default StratView;