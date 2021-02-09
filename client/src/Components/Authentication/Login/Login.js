import React from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import './Login.css';
import gql from 'graphql-tag'


function Login() {
    return (
        <div className="login">
            <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="" />
            <div className="login__details">
                <h4>WELCOME TO SPLITWISE</h4>
                <Form>
                    <Form.Field>
                        <label>Email address</label>
                        <input
                            type="text"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input/>
                    </Form.Field>
                    <Button className="ui orange button" type='submit'>Log in</Button>
                    <p>Forgot your password? Click Here</p>
                    <hr />
                    <div className="login__socialButtons">
                        <p>Or log in with</p>
                        <Button basic>
                            <Icon name='google' /> Google
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;


export default Login
