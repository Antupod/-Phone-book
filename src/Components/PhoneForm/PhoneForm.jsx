import React from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {useState} from "react";
import classes from "./PhoneForm.module.css"

const PhoneForm = ({create}) => {
    const [oneNumPhone, setOneNumPhone] = useState({title: "", body: ""})

    const addNewPhoneNumber = (e) => {
        e.preventDefault()
        const newPhone = {
            ...oneNumPhone, id: Date.now()
        }
        create(newPhone)
        setOneNumPhone({title: "", body: ""});
    }

    return (
        <form action="#" className={classes.formWrapper}>
            <div className={classes.inputItem}>
                <label htmlFor="name">Имя</label>
                <MyInput
                    id="name"
                    value={oneNumPhone.title}
                    onChange={e => setOneNumPhone({...oneNumPhone, title: e.target.value})}
                    maxLength={30}
                    type="text"
                    placeholder="Имя"/>
            </div>

            <div className={classes.inputItem}>
                <label htmlFor="phone">Номер телефона в формате 8(999)777-77-77</label>
                <MyInput
                    id="phone"
                    value={oneNumPhone.body}
                    onChange={e => setOneNumPhone({...oneNumPhone, body: e.target.value})}
                    type="tel"
                    maxlength={20}
                    placeholder="Номер телефона"/>
            </div>

            <MyButton onClick={addNewPhoneNumber}>Добавить</MyButton>
        </form>
    );
};

export default PhoneForm;