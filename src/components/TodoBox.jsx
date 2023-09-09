import { Fragment, useState, useRef } from "react";
import { v4 as uuid } from 'uuid';
import Item from "./Item.jsx";

const TodoBox = (props) => {
    const [todoItems, setTodoItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const inputEl = useRef(null);

    const handleChange = () => {
        setInputValue(inputEl.current.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        const arr = [...todoItems];
        arr.unshift(inputValue);
        setTodoItems(arr);
        setInputValue("");
    }

    const onRemoveItem = (task) => (e) => {
        const arr = [...todoItems];
        const index = arr.indexOf(task);
        arr.splice(index, 1)
        setTodoItems(arr);
    }

    return (
        <Fragment>
            <div className="mb-3">
                <form className="d-flex">
                    <div className="me-3">
                        <input
                            ref={inputEl}
                            type="text"
                            value={inputValue}
                            required=""
                            className="form-control"
                            placeholder="I am going..."
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleClick}
                    >
                        add
                    </button>
                </form>
            </div>
            <Fragment>
                {todoItems.map(item => <Item
                    task={item}
                    onRemove={onRemoveItem(item)}
                    key={uuid()}/>)}
            </Fragment>
        </Fragment>
    )
}

export default TodoBox;