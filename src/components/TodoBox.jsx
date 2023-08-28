import {Component, Fragment} from "react";
import { v4 as uuid } from 'uuid';
import Item from "./Item.jsx";

class TodoBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoItems: [],
            inputValue: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        const arr = [...this.state.todoItems];
        const value = this.state.inputValue;
        arr.unshift(value)
        this.setState({
            todoItems: arr,
            inputValue: ""
        })
    }

    onRemoveItem = (task) => {
        const arr = [...this.state.todoItems];
        const index = arr.indexOf(task);
        arr.splice(index, 1)
        this.setState({
            todoItems: arr
        })
    }

    render() {
        return (
            <Fragment>
                <div className="mb-3">
                    <form className="d-flex">
                        <div className="me-3">
                            <input
                                type="text"
                                value={this.state.inputValue}
                                required=""
                                className="form-control"
                                placeholder="I am going..."
                                onChange={this.handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={this.handleClick}
                        >
                            add
                        </button>
                    </form>
                </div>
                <Fragment>
                    {this.state.todoItems.map(item => <Item
                        task={item}
                        onRemove={() => this.onRemoveItem(item)}
                        key={uuid()} />)}
                </Fragment>
            </Fragment>
        )
    }
}

export default TodoBox;