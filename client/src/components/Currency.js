import React, {Component} from 'react'

class Currency extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            prefix: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }
    handleSubmit(){
        let body = {
            name: this.state.name,
            prefix: this.state.prefix,
        }

        fetch('/currency/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(function(response) {
            let res = response.json()
            return res
        }).then(function(myJson) {
            console.log(myJson);
        })
        this.setState({success: true})
    }

    render(){
        return(
            <div>
                <form className="container mt-5 align-content-center">
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">Name</label>
                            <input  type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    placeholder="Currency Name"
                                    className="form-control">
                            </input>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">Prefix</label>
                            <input  type="text"
                                    name="prefix"
                                    onChange={this.handleChange}
                                    placeholder="ej. BTC"
                                    className="form-control">
                            </input>
                        </div>
                    <button
                        type="button"
                        onClick={this.handleSubmit}
                        className="btn btn-info btn-block col-md-8 ml-5">Save New Currency</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default Currency
