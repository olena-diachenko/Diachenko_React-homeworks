const ListItem = (props) => {
    return (
        <button
            type="button"
            className="list-group-item list-group-item-action"
            onClick={props.handleClick}>
            {props.inner}
        </button>
    )
}

ListItem.defaultProps = {
    inner: 1,
    handleClick: () => {
        alert("You can't delete this item")
    }
}

export default ListItem;