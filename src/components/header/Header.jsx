import classes from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={classes.wrapper}>
            header({props.count})
        </div>
    );
}

export default Header;
