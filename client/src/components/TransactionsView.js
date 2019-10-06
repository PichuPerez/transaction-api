import React, {Component} from 'react'
import Welcome from "../App";

class TransactionsView extends Component {
    constructor(props) {
        super(props)
        this.state= {
            transactions: [],
            view : 'transactions',
            transaction: ''
        }
        this.transactionDetail = this.transactionDetail.bind(this)
    }
    componentDidMount() {
        fetch('/transactions')
            .then(response => response.json())
            .then(data => this.setState({ transactions : data }))

    }
    transactionDetail(transaction){
        this.setState({
            view: 'transactionDetail',
            transaction: transaction
        })
    }

    render () {
        let transactions = this.state.transactions.map( transaction =>{
            return(
                <div className="card mt-3 border-dark">
                    <h5 className="card-header">ID: {transaction._id}</h5>
                    <div className="card-body">
                        <div className="card-text">
                            <li>SourceUser : {transaction.sourceUserName} - {transaction.sourceUserId}</li>
                            <li>TargetUser : {transaction.targetUserName} - {transaction.targetUserId}</li>
                            <h5>Amount : {transaction.amount}</h5>
                        </div>
                        <button className="btn btn-info"
                                type="button"
                                onClick={() => this.transactionDetail(transaction)}>
                                See more detail
                        </button>
                    </div>
                </div>
            )
        })

        if(this.state.view === 'transactions' ){
            return(<div>
                <div className="container mt-5">
                    <h1>Transactions </h1>
                    {transactions}
                </div>
            </div>)
        }else if ((this.state.view === 'transactionDetail' )){
            let transaction = this.state.transaction
            return (
                <div>
                    <div className="container mt-5">
                        <h1>Transaction Detail</h1>
                        <div className="card">
                            <div className="card-header text-white bg-info">
                                ID: {transaction._id}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Source User: {transaction.sourceUserName}- {transaction.sourceUserId}</li>
                                <li className="list-group-item">Target User: {transaction.targetUserName}- {transaction.targetUserId}</li>
                                <li className="list-group-item">Amount: {transaction.amount}{transaction.currency.prefix}</li>
                                <li className="list-group-item">State: {transaction.state}</li>
                                <li className="list-group-item">Date: {transaction.created}</li>

                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default TransactionsView
