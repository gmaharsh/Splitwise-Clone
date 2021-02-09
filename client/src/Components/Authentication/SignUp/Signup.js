import React from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import './Signup.css';

function Signup() {
    return (
        <div className="signup">
            <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="" />
            <div className="signup__details">
                <h4>INTRODUCE YOURSELF</h4>
                <Form>
                    <Form.Field>
                        <label>Hi there! My name is</label>
                        <input
                            type="text"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Here’s my email address:</label>
                        <input
                            type="text"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>And here’s my password:</label>
                        <input
                            type="text"
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
            </div>
        </div>
    )
}

export default Signup
