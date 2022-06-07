import classes from "./MyLink.module.css";

const MyLink = ({children, ...props}) => {
    return (
        <a {...props} className={classes.myLink}>
            {children}
        </a>
    );
};

export default MyLink;