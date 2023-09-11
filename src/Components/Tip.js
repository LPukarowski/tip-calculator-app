import React from 'react';

const Tip = ({num}) => {
    return (
        <button className='tip__percent input'>
            {num}%
        </button>
    );
};

export default Tip;