const Item = (props) => {

    return (
        <div>
            <div className="row">
                <div className="col-auto">
                    <button type="button" className="btn btn-primary btn-sm" onClick={props.onRemove}>-</button>
                </div>
                <div className="col">{props.task}</div>
            </div>
            <hr />
        </div>
    )
}

Item.defaultProps = {
    task: "Start to add your tasks",
    onRemove: () => {
        alert("Sorry, but you're not able to remove this task at this moment")
    }
}

export default Item;