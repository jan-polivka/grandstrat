import React, { Component } from 'react';
import PostForm from './PostForm';

export class StratFormThird extends Component {

    //Just have done! Click View strats in the top bar menu to get started?
    //I want to also make a POST request here though
    render() {
        const {values, handleChange} = this.props;
        return (
            <React.Fragment>
                <PostForm
                    note={values.country} />
            </React.Fragment>
        );
    }
}

export default StratFormThird;