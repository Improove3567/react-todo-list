import React from 'react';
import css from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={css.wrapper}>
            Todo ({props.count})
        </div>
    );
}

export default Header;
