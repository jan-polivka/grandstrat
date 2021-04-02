import React, { Component } from 'react';
import PostForm from './PostForm';

export class StratFormThird extends Component {

    render() {
        const {values} = this.props;
        return (
            <React.Fragment>
                <PostForm note={values.country} />
            </React.Fragment>
        );
    }
}

export default StratFormThird;