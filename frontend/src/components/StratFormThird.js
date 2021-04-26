import React, { Component } from 'react';
import PostForm from './PostForm';

export class StratFormThird extends Component {

    render() {
        const {values} = this.props;
        return (
            <React.Fragment>
                <PostForm 
                    country={values.country}
                    idea1={values.idea1}
                    idea2={values.idea2} />
            </React.Fragment>
        );
    }
}

export default StratFormThird;