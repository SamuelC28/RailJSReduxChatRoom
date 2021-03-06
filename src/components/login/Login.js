import React, { Component } from 'react';
import postData from '../../actions/loginActions';
import {Redirect} from 'react-router-dom';
// import './Login.css';

class Login extends Component {

    constructor(props){
        super(props);
        this.props={
            username:'',
            password:'',
            redirect: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    login(){
        // console.log("Login function")
        if(this.state.username && this.state.password){
        postData('login', this.state).then ((result) => {
        let responseJSON = result;  
        // console.log(responseJSON)    
        if(responseJSON.userData) {
            sessionStorage.setItem('userData', responseJSON );
            this.setState({redirect: true});
        }
        else
          console.log("login error");
        });
      }
    }
    onChange(e){
        // console.log("coming here")
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        if(this.state.redirect) {
          return( <Redirect to={'/home'} />)
        }
        return(
            <div className="row small-up-2 medium-up-3 large-up-4">
                <div className="column">
                    <h2>Login Page</h2>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" onChange = {this.onChange} />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" onChange = {this.onChange} />
                    <input type="submit" value="Login" className="button" onClick={this.login} />
                </div>
            </div>
        );
    }

} 
export default Login; 

//for the channel position
//.channelid {
    // min-height: 200px;
// }