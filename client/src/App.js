import React, {Component} from 'react'
import TransactionForm from './components/TransactionForm'
import Welcome from './components/Welcome'
import Navbar from "./components/Navbar";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'welcome'
        }
        this.handler = this.handler.bind(this)
    }

    handler(value) {
        this.setState({
            view: value
        })
    }
    render(){
    let view
        switch(this.state.view) {
            case 'welcome': view = <Welcome />
            break
            case 'form': view = <TransactionForm />
        }

    return (
            <div className="App">
                <Navbar handler = {this.handler}/>
                {view}
            </div>
        );
    }
}

export default App;
