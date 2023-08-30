import React from "react";
import classNames from "classnames";
import Modal from "./Modal.jsx";

class Component extends React.Component {
    state = { modal: false };

    toggle = (e) => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    render() {
        const currentClass = classNames("modal-open-button btn btn-danger", {
            ["visually-hidden"]: this.state.modal
        })

        return (
            <div>
                <button type="button" className={currentClass} onClick={this.toggle}>Open</button>
                <Modal isOpen={this.state.modal}>
                    <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
                    <Modal.Body>Lorem ipsum dolor sit amet</Modal.Body>
                    <Modal.Footer toggle={this.toggle}>Cancel</Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Component;