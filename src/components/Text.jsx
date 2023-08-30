const Text = (props) => <p className="card-text">{props.children}</p>;

Text.defaultProps = {
    children: "Take a rest"
};

export default Text;