import React, {Component} from 'react';
import Menu from './Menu/Menu'
import AddPlayer from './AddPlayer/AddPlayer'
import List from './List/List'
import RemovePlayer from './RemovePlayer/RemovePlayer'
import EditPlayer from './EditPlayer/EditPlayer'
import Payment from './Payment/Payment'
import StartGame from './StartGame/StartGame'
import MakeTeams from './MakeTeams/MakeTeams'
import Login from './LoginRegister/Login'
import Register from './LoginRegister/Register'
import {withRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom' //import route components from library react-router-dom


class App extends Component {

    state = {
        players: [], //Array of added players
        backdropVisibility: "hidden", //Backdrop visibility property.
        textOfBackdrop: "", //text of backdrop to put correct text according operation.
        signedIn: false,
        isAuth: false,
        users: [],
        isRegistered: false
    }
    

    // -------------------------------Render
    // function------------------------------------------------------
    render() {
      
        return (
            <div>
            {/*Route switch for pass to match screen*/}
            {/*I am pass main state to every component and set state func to update the state continued we need to refactor this with using Redux!!!! */}
                <Switch >
                    <Route
                        exact
                        path='/'
                        render=
                        {()=>{ if(this.state.isAuth) return <Menu mainstate={this.state} setSt={(element)=>this.setState(element)}/> 
                        if(this.state.isRegistered) return <Login mainstate={this.state} setSt={(element)=>this.setState(element)} /> 
                        else return <Register mainstate={this.state} setSt={(element)=>this.setState(element)}/>}}/>

                     {/* <Route
                        exact
                        path='/Menu'
                        render={() => this.state.isAuth
                        ? <Menu mainstate={this.state} setSt={(element) => this.setState(element)}/>
                        : <Register mainstate={this.state} setSt={(element) => this.setState(element)}/>}/>  */}

                    <Route
                        exact
                        path='/AddPlayer'
                        render={() => this.state.isAuth
                        ? <AddPlayer mainstate={this.state} setSt={(element) => this.setState(element)}/>
                        : <Register mainstate={this.state} setSt={(element) => this.setState(element)}/>}/>
                    <Route
                        exact
                        path='/RemovePlayer'
                        render={() => this.state.isAuth
                        ? <RemovePlayer
                                mainstate={this.state}
                                setSt={(element) => this.setState(element)}/>
                        : <Register mainstate={this.state} setSt={(element) => this.setState(element)}/>}/>
                    <Route
                        exact
                        path='/EditPlayer'
                        render={() => this.state.isAuth
                        ? <EditPlayer mainstate={this.state} setSt={(element) => this.setState(element)}/>
                        : <Register mainstate={this.state} setSt={(element) => this.setState(element)}/>}/>
                    <Route
                        exact
                        path='/Payment'
                        render={() => this.state.isAuth
                        ? <Payment mainstate={this.state}/>
                        : <Register mainstate={this.state} setSt={(element) => this.setState(element)}/>}/>
                    <Route
                        exact
                        path='/StartGame'
                        render={() => this.state.isAuth
                        ? <StartGame mainstate={this.state}/>
                        : <Register mainstate={this.state} setSt={(element) => this.setState(element)}/>}/>
                    <Route
                        exact
                        path='/MakeTeams'
                        render={() => this.state.isAuth
                        ? <MakeTeams mainstate={this.state}/>
                        : <Register mainstate={this.state} setSt={(element) => this.setState(element)}/>}/>
                    <Route
                        exact
                        path='/List'
                        render={() => this.state.isAuth
                        ? <List mainstate={this.state}/>
                        : <Register mainstate={this.state} setSt={(element) => this.setState(element)}/>}/>
                </Switch>
        </div>)}}


export default withRouter(App);