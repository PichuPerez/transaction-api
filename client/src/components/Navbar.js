import React, {Component} from 'react'
import '../css/navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="" onClick={() => this.props.handler('welcome')}>Transaction App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" >
                                <a className="nav-link"
                                   onClick={() => this.props.handler('form')}>
                                    New Transaction</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => this.props.handler('transactionView')}>View Transactions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => this.props.handler('currency')} tabIndex="-1"
                                   aria-disabled="true">New Currency</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
