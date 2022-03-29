import React from 'react';

const Header = (props) => {
    return (
        <div className='head text-dark '>
            <h1 className='pt-2 pb-2 ' >Todos ({props.count})</h1>
        </div>
    );
}

export default Header;
