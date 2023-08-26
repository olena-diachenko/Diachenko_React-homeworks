import {Component} from "react";
import cn from "classnames";

class Collapse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opened: this.props.opened
        }
    }

    onClickHandler = () => {
        this.setState((state) => {
            const {opened} = state;
            return {opened: !opened}
        })
    }

    render() {
        const {text} = this.props;
        const currentClass = cn("collapse", {
            "show": this.state.opened
        })

        return (
            <div>
                <p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button"
                       aria-expanded={this.state.opened} onClick={this.onClickHandler}>Link with href</a>
                </p>
                <div className={currentClass}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        )
    }
}

Collapse.defaultProps = {
    text: "Ku-ku :)",
    opened: false
}

export default Collapse;