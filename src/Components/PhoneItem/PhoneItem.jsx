import classes from "./PhoneItem.module.css";
import MyLink from "../UI/MyLink/MyLink";

const PhoneItem = (props) => {
    return (
        <div className={classes.phoneNumber}>
            <div>
                <strong className={classes.phoneTitle}>{props.number}. {props.phone.title}</strong>
                <div>
                    {props.phone.body}
                </div>
            </div>
            <div className={classes.phoneControl}>
                <MyLink href={["tel:",props.phone.body].join("")}>
                    <img src="./image/phone.svg" alt="Позвонить"/>
                </MyLink>
                <button className={classes.buttonBin} onClick={() => props.remove(props.phone)}>
                    <img src="./image/bin.svg" alt="Удалить"/>
                </button>
            </div>
        </div>
    );
};

export default PhoneItem;