import PhoneItem from "../PhoneItem/PhoneItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PhoneList = ({phones, title, remove}) => {

    if (!phones.length) {
        return (
            <h1 className="listTitle">Ничего не найдено :(</h1>
        )
    }

    return (
        <div>
            <h1 className="listTitle">{title}</h1>
            <TransitionGroup>

                {phones.map((phone, index) =>
                    <CSSTransition
                        key={phone.id}
                        timeout={500}
                        classNames="phone"
                    >
                        <PhoneItem remove={remove} number={index + 1} phone={phone}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default PhoneList;