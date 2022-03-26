import React from 'react';

const Header = (props) => {
    return (
        <div className='head'>
            <h1>Todo ({props.count})</h1>
        </div>
    );
}

export default Header;
