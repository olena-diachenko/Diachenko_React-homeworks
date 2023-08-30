import React from "react";

const Footer = (props) => (
        <div className="modal-footer">
            <button type="button" className="modal-close-button btn btn-secondary" onClick={props.toggle}>{props.children}</button>
        </div>
    )

Footer.defaultProps = {
    children: "Close"
}

export default Footer;