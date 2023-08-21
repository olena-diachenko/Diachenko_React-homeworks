import {Component} from "react";
import cn from "classnames";

class BtnGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: null

        };
    }

    handleClick = (e) => {
        e.preventDefault();
        const buttonName = e.target.textContent;
        this.setState({active: buttonName});

    }

    render() {
        return (
            <div className="btn-group" role="group">
                <button type="button" className={cn("btn btn-secondary", { active: this.state.active === "Left" })} onClick={this.handleClick}>Left</button>
                <button type="button" className={cn("btn btn-secondary", { active: this.state.active === "Right" })} onClick={this.handleClick}>Right</button>
            </div>
        )
    }
}

export default BtnGroup;