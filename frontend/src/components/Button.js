import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';

const Button = props => {

    return (
        <div>
            <button type="button">{props.text}</button>
        </div>
    );
};

Button.propTypes = {
    
};

export default Button;