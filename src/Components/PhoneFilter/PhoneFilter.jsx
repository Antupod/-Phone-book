import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";


const PhoneFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка по"
                options={[{value: "title", name: "По названию"}, {value: "body", name: "По номеру"}]}
            />
            <hr/>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                type="text"
                placeholder="Поиск.."
            />
        </div>
    );
};

export default PhoneFilter;