import React, { useContext, useState } from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import './Signup.css';
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks';
import { AuthContext } from '../../../context/auth';


function Signup(props) {
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, {data : {register: userData}}) {
            context.register(userData)
            props.history.push('/')
        },onError(err) {
            // setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables:values
    })


    const onChangeValues = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        addUser()
    }
    

    return (
        <div className="signup">
            <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="" />
            <div className="signup__details">
                <h4>INTRODUCE YOURSELF</h4>
                <Form onSubmit={onSubmit} noValidate className={loading? 'loading' :''}>
                    <Form.Field>
                        <label>Hi there! My name is</label>
                        <input
                            type="text"
                            name="username"
                            value={values.username}
                            onChange={onChangeValues}
                            autocomplete="off"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Here’s my email address:</label>
                        <input
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={onChangeValues}
                            autocomplete="off"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>And here’s my password:</label>
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={onChangeValues}
                            autocomplete="off"
                        />
                    </Form.Field>
                    <div className="buttons">
                        <Button className="ui orange button" type='submit'>
                            Sign me up!
                        </Button>
                        or 
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

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
  ) {
    register(registerInput:{
    username:$username
    password:$password
    email:$email
    }){
        id
        email
        token
        username
    }
  }
`;

export default Signup
