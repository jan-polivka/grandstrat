import PropTypes from 'prop-types';
import axios from 'axios'

//I want to create a form here
//I want the search bar slash select bar for countries
//I want a search bar slash select bar for ideas
//Three texts boxes for strat?
//Reddit link

//For now, I just might want to GET data from Spring

const PostForm = props => {

    const noteObject = {
        content: props.note
    }

    axios
        .post('http://localhost:8080/posttest', noteObject)
        .then(response => {
            console.log(response)
        })

    return (
        <div>Sent!</div>        
    );
};

export default PostForm;