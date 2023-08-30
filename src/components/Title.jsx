const Title = (props) => <h4 className="card-title">{props.children}</h4>;

Title.defaultProps = {
    children: "Really important title"
};

export default Title;