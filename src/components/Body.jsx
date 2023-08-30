const Body = (props) => <div className="modal-body">{props.children}</div>

Body.defaultProps = {
    children: "Really interesting content"
}

export default Body;