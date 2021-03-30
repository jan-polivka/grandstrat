import React from 'react';
import PropTypes from 'prop-types';
import { 
  BrowserRouter as Router,
  Link, Route, Redirect, Switch }
   from 'react-router-dom';
import Button from './Button';
import Create from './Create';


const Welcome = props => {
    return (
        <div>
            <h1>Welcome to Grand Strat!</h1>
            This bla bla bla
        </div>
    );
        
};

export default Welcome;