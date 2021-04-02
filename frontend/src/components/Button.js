import React from 'react';

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