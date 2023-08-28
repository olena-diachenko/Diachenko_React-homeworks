import React from "react";
import ListItem from "./ListItem.jsx";

class Component extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listItems: []
        }
    }

    handleClick = (e) => {
        const arr = [...this.state.listItems];
        const firstValue = arr.length === 0 ? 0 : arr[0];
        const nextValue = e.target.textContent === "+" ? firstValue + 1 : firstValue - 1;
        arr.unshift(nextValue)
        this.setState({
            listItems: arr
        })
    }

    onRemoveItem = (e) => {
        const arr = [...this.state.listItems];
        const item = arr.indexOf(+e.target.textContent);
        arr.splice(item, 1)
        this.setState({
            listItems: arr
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="btn-group font-monospace mb-4" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={this.handleClick}>+</button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.handleClick}>-</button>
                </div>
                <div className="list-group">
                     {this.state.listItems.map(item => <ListItem
                         inner={item}
                         key={Math.floor(Math.random() * 1000)}
                         handleClick={this.onRemoveItem} />)}
                </div>
            </React.Fragment>
        )
    }
}

export default Component;