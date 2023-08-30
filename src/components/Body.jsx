const Body = (props) => <div className="card-body">{props.children}</div>

Body.defaultProps = {
    children: <h4 className="card-title">Any html structure can be placed here</h4>
};

export default Body;