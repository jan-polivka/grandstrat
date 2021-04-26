import axios from 'axios'
import React, {useEffect} from 'react';

const PostForm = props => {

    const noteObject = {
        country: props.country,
        idea1: props.idea1,
        idea2: props.idea2
    }

    //how does this work? why do I need to have useEffect
    //I think useEffect is a hook
    useEffect (() => {
        axios
            .post('http://localhost:8080/posttest', noteObject)
            .then(response => {
                console.log(response)
            })
    },[])

    return (
        <React.Fragment>
            <div>Sent!</div>
        </React.Fragment>      
    );
};

export default PostForm;