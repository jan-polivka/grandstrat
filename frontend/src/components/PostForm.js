import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

//I want to create a form here
//I want the search bar slash select bar for countries
//I want a search bar slash select bar for ideas
//Three texts boxes for strat?
//Reddit link

//For now, I just might want to GET data from Spring

const PostForm = props => {

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
            Hello <br/>
            {respo.name}           
        </div>
    );
};

export default PostForm;