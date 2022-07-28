import React from 'react'
import './Login.css'
import Logo from "./images/logos/logo.jpeg" 
import { Button } from '@material-ui/core'
import {auth, provider } from './firebase';
import { actionTypes } from './reducer';
import {useStateValue} from "./StateProvider"

function Login() {

    // eslint-disable-next-line
    const [{user}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        })})
        .catch(error=> alert(error.message));
    };
    
    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} alt=""/>
                <div className="login__text">
                    <h3>Sign in to GlossCare</h3>
                </div>
                <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                 Username/Email:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                 Password:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
                </div>
                <Button onClick={signIn} type="submit">
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
