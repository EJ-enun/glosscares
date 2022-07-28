import React from 'react'
import './Login.css'
import Logo from "./images/logos/logo.jpeg" 
import { Button } from '@material-ui/core'
import {auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
} from "shards-react";
function Login() {

    // eslint-disable-next-line
    const [{user}, dispatch] = useStateValue();
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    function validateForm() {

      return email.length > 0 && password.length > 0;

    }

    function handleSubmit(event) {

      event.preventDefault();

    }

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
                    <h3>Glosscare</h3>
                </div>
                <div>
                <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label textAlign="left" htmlFor="feEmail">Email</label>
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
                  <label textAlign="left" htmlFor="fePassword">Password</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    onChange={() => {}}
                </Col>
               </Row>
              </div>
                <Button width="300px" onClick={handleSubmit} type="submit">
                    Sign In with Email
                </Button>
                <label textAlign="left" htmlFor="signUp"><a href="">Sign up with Email</a></label>
                <Button width="300px" onClick={signIn} type="submit">
                    Sign In with Google
                </Button>
                <label textAlign="left" htmlFor="forgotpassword"><a href="">Forgot Password</a></label>
            </div>
        </div>
    )
}

export default Login
