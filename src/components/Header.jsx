const Header = (props) => (
            <div className="modal-header">
                <div className="modal-title">{props.children}</div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.toggle}>
                </button>
            </div>
    )

Header.defaultProps = {
    children: "Some title"
}

export default Header;