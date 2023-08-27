import cn from "classnames";

const Table = (props) => {
    const { data, onBackHandler } = props;
    const acceptRules = data.form.acceptRules === true ? "accepted" : "not accepted";

    const classes = cn("container", {
        "visually-hidden": !data.isSubmitted
    })

    return (
        <div className={classes}>
            <button type="button" className="btn btn-primary" onClick={onBackHandler}>Back</button>
            <table className="table">
                <tbody>
                <tr>
                    <td>acceptRules</td>
                    <td>{acceptRules}</td>
                </tr>
                <tr>
                    <td>address</td>
                    <td>{data.form.address}</td>
                </tr>
                <tr>
                    <td>city</td>
                    <td>{data.form.city}</td>
                </tr>
                <tr>
                    <td>country</td>
                    <td>{data.form.country}</td>
                </tr>
                <tr>
                    <td>email</td>
                    <td>{data.form.email}</td>
                </tr>
                <tr>
                    <td>password</td>
                    <td>{data.form.password}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;