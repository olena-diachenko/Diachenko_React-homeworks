import {Component, Fragment} from "react";
import Table from "./Table.jsx";

class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: "",
                password: "",
                address: "",
                city: "",
                country: "",
                acceptRules: false
            },
            isSubmitted: false
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.setState({
            isSubmitted: true
        })
    }

    onChangeHandler = (e) => {
        const { name } = e.target;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }

    onBackHandler = (e) => {
        e.preventDefault()
        this.setState({
            isSubmitted: false
        })
    }

    render() {

        return (
            <Fragment>
                {this.state.isSubmitted ? (
                    <Table
                        data={this.state}
                        onBackHandler={this.onBackHandler}
                    />
                    ) : (
                    <form name="myForm" className="container" onSubmit={this.onSubmitHandler}>
                        <h2>My form</h2>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="col-form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                value={this.state.form.email}
                                onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="password" className="col-form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={this.state.form.password}
                                onChange={this.onChangeHandler} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="address" className="col-form-label">Address</label>
                            <textarea
                                type="text"
                                className="form-control"
                                name="address"
                                id="address"
                                placeholder="1234 Main St"
                                value={this.state.form.address}
                                onChange={this.onChangeHandler} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="city" className="col-form-label">City</label>
                            <input
                                type="text"
                                className="form-control"
                                name="city" id="city"
                                value={this.state.form.city}
                                onChange={this.onChangeHandler} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="country" className="col-form-label">Country</label>
                            <select
                                id="country"
                                name="country"
                                className="form-control"
                                value={this.state.form.country}
                                onChange={this.onChangeHandler}>
                                <option>Choose</option>
                                <option value="argentina">Argentina</option>
                                <option value="ukraine">Ukraine</option>
                                <option value="china">China</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="rules">
                                    <input
                                        id="rules"
                                        type="checkbox"
                                        name="acceptRules"
                                        className="form-check-input"
                                        value={this.state.form.acceptRules}
                                        onChange={this.onChangeHandler} />
                                    Accept Rules
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                )}
            </Fragment>
        )
    }
}

export default MyForm;