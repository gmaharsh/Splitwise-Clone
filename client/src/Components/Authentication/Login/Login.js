import React, { useContext, useState } from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import './Login.css';
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks';
import { AuthContext } from '../../../context/auth';


function Login(props) {
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, { data: { login: userData } }) {
            context.login(userData)
            props.history.push('/')
        }, onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables:values
    })

    const onChangeValues = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        loginUser()
    }


    return (
        <div className="login">
            <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="" />
            <div className="login__details">
                <h4>WELCOME TO SPLITWISE</h4>
                <Form onSubmit={onSubmit} noValidate className={loading? 'loading' :''}>
                    <Form.Field>
                        <label>Email address</label>
                        <input
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={onChangeValues}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={onChangeValues}
                        />
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
                {Object.keys(errors).length > 0 && (
                    <div className="ui error message">
                    <ul className="list">
                        {Object.values(errors).map((value) => (
                        <li key={value}>{value}</li>
                        ))}
                    </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      name
      createdAt
      token
    }
  }
`;


export default Login
