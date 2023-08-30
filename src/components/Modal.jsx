import {Component} from "react";
import classNames from "classnames";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

class Modal extends Component {

    static Header = Header;

    static Body = Body;

    static Footer = Footer;

    render() {
        const {isOpen} = this.props

        const styles = {
            display: isOpen ? "block" : "none"
        }

        const currentClass = classNames("modal", {
            ["fade show"]: isOpen
        })
        return (
            <div>
                <div className={currentClass} style={styles} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;