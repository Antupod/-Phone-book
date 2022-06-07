import './App.css';
import {useState} from "react";
import PhoneList from "./Components/PhoneList/PhoneList";
import PhoneForm from "./Components/PhoneForm/PhoneForm";
import PhoneFilter from "./Components/PhoneFilter/PhoneFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import {usePhones} from "./hooks/usePhones";

function App() {
    const [phone, setPhone] = useState([ ]);

    const [filter, setFilter] = useState({sort: "", query: ""})
    const [modal, setModal] = useState(false)

    const sortedAndSearchedPhone  = usePhones(phone, filter.sort, filter.query);

    const createPhone = (newPhone) => {
        setPhone([...phone, newPhone])
        setModal(false)
    }

    const removePhone = (phoneRemove) => {
        setPhone(phone.filter(p => p.id !== phoneRemove.id))
    }

    return (<div className="App">
        <button className="buttonAdd"  onClick={() => setModal(true)}>
            <img alt="Добавить" className="imageBtn" src="./image/add.svg"/>
        </button>
        <PhoneFilter
            filter={filter}
            setFilter={setFilter}
        />

        <MyModal visible={modal} setVisible={setModal}>
            <PhoneForm create={createPhone}/>
        </MyModal>

        <PhoneList remove={removePhone} phones={sortedAndSearchedPhone} title="Телефонная книга"/>

    </div>);
}

export default App;
