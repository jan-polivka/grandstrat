import axios from 'axios'

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