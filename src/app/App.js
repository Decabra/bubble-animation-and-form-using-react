import React, {Component} from 'react';
import Form from './form/Form';
import Board from './board/Board';
import { Switch, Route, Link, withRouter} from 'react-router-dom'
import './App.css'
class App extends Component{

    render() {
        return (
                <div className="App">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/components/form/Form" >Task 1</Link>
                        <Link className="navbar-item" to="/components/board/Board">Task 2</Link>
                    </div>
                    <Switch>
                        <Route path="/components/form/Form" >
                            <Form />
                        </Route>
                        <Route path="/components/board/Board" >
                            <Board/>
                        </Route>
                    </Switch>
                </div>
            )
    }
    componentDidMount() {
        this.navBarFate()
    }
    componentDidUpdate(prevProps){
        this.navBarFate()
    }
    navBarFate(){
        console.log(this.props.location.pathname)
        if (this.props.location.pathname === "/") {
            document.querySelector(".navbar-start").style.display = "flex"
        }
        else{
            document.querySelector(".navbar-start").style.display = "none"

        }
    }
}

export default withRouter(App);
