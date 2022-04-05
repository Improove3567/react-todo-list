import classes from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={classes.wrapper}>
            header({props.count} / 2)
        </div>
    );
}

export default Header;
