import React, {Component} from 'react'

class TransactionForm extends Component {
    constructor(props) {
        super(props)
        this.state= {
            users: [],
            currencies: [],
            amount: '',
            targetUser: '',
            sourceUser: '',
            currency: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitTransaction = this.submitTransaction.bind(this);
    }
    componentDidMount() {
        fetch('/users')
            .then(response => response.json())
            .then(data => this.setState({ users : data }))

        fetch('/currency')
            .then(response => response.json())
            .then(data => this.setState({ currencies : data }))
    }
    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }
    submitTransaction(){
        console.log('submiting')
        let body = {
            amount: this.state.amount,
            currency: this.state.currency,
            sourceUser: this.state.sourceUser,
            targetUser: this.state.targetUser
        }

        fetch('/transaction/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
            });
    }

    render () {
        let users = this.state.users.map(user => <option value={JSON.stringify(user)}>{user.name}</option>)
        let currencies = this.state.currencies.map(currency => <option value={JSON.stringify(currency)}>{currency.name}</option>)
        return (
            <div>
                <form className="container mt-5">
                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <label htmlFor="inputState">Source User</label>
                            <select name="sourceUser"
                                    value={this.state.sourceUser}
                                    onChange={this.handleChange}
                                    className="form-control">
                                <option defaultValue=''>Choose source user</option>
                                {users}
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">Currency</label>
                            <select name="currency"
                                    value={this.state.currency}
                                    onChange={this.handleChange}
                                    className="form-control">
                                <option defaultValue=''>Choose currency</option>
                                {currencies}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <label>Target User</label>
                            <select name="targetUser"
                                    value={this.state.targetUser}
                                    onChange={this.handleChange}
                                    className="form-control">
                                <option defaultValue=''>Choose target user</option>
                                {users}
                            </select>
                        </div>
                        <div className="form-group ml-5 col-md-3">
                            <label>Amount
                                <input type="number"
                                       name="amount"
                                       value={this.state.amount}
                                       onChange={this.handleChange}
                                       className="form-control" />
                            </label>
                        </div>
                    </div>
                    <button
                        onClick={this.submitTransaction}
                        type="button"
                        className="btn btn-info btn-block col-md-8 ml-5">Create transaction</button>
                </form>
            </div>
        )
    }
}

export default TransactionForm
