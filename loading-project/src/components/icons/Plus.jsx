import React from 'react';

const Plus = (props) => {
    const { className } = props;
    return (
        <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 455 455">
            <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
                455,242.5 "/>
        </svg>
    )
}

export { Plus };