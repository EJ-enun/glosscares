import React from 'react'
import './Login.css'
import Logo from "./images/logos/logo.jpeg" 
import { Button } from '@material-ui/core'
import {auth, provider } from './firebase';
import { actionTypes } from './reducer';
import {useStateValue} from "./StateProvider"
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
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
                    <h3>Glosscare...Access to Doctors and Patients.</h3>
                </div>
                <div>
                <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value={user?.email}
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Password</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value="Lol!DontEvenTryThis"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
                </div>
                <Button onClick={signIn} type="submit">
                    Sign In with Google
                </Button>
                <label htmlFor="forgotpassword"><a href="">Forgot Password</a></label>
            </div>
        </div>
    )
}

export default Login
