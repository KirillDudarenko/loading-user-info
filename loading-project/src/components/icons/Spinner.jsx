import React from 'react';

const Spinner = (props) => {
    const { className } = props;
    return (
        <svg className={className} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.2959 11.4976C21.2959 6.03107 16.8644 1.59961 11.398 1.59961C5.93146 1.59961 1.5 6.03107 1.5 11.4976C1.5 16.964 5.93146 21.3955 11.398 21.3955" stroke="#219653" strokeWidth="3"/>
        </svg>
    )
}

export { Spinner };