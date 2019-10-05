import React, {Component} from 'react'

class Welcome extends Component {
    render () {
        return (
            <div>
                <div className="jumbotron">
                    <h1>💰 Welcome to the transaction app</h1>
                    <hr></hr>
                    <h5>Instructions:</h5><span>Click on the navbar for the desired movement.</span>
                </div>
                <div className="container">
                    <p><strong>New Transaction:</strong> transfer a currency from one user to another user.</p>
                    <p><strong>View Transactions:</strong> vie all transaction history and their status.</p>
                    <p><strong>New Currency:</strong> create a new currency to use in the app.</p>

                </div>
            </div>
        )
    }
}

export default Welcome
