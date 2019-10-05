import React, {Component} from 'react'

class TransactionForm extends Component {
    componentDidMount() {
        fetch(('/users'))
    }
    render () {
        return (
            <div>
                <h1>This is my transaction form component</h1>
            </div>
        )
    }
}

export default TransactionForm
