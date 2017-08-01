import React from 'react';
import Auth from '../Auth/Auth.js';
import {Col, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap/lib/';

const auth = new Auth();

export default class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }
    login(e){
        auth.login();
    }

    render() {
        return (
            <div className="login">
                {/* <form className="login_box">
                    <input type="text" name="login_info"/><br/>
                    <span>{this.props.auth}</span>
                    <button onClick={this.login} type="button" name="submit" >hello </button>
                </form> */}
                <Form horizontal>
                  <FormGroup controlId="login_username">
                    <Col componentClass={ControlLabel} sm={2}>Username</Col>
                    <Col sm={6}>
                      <FormControl type="text" placeholder="Username" />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="login_password">
                    <Col componentClass={ControlLabel} sm={2}>Password</Col>
                    <Col sm={6}>
                      <FormControl type="password" placeholder="Password" />
                    </Col>
                  </FormGroup>
                </Form>
            </div>
        )
    }
}
