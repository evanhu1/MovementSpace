import React from "react";
import './Create.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/FOrm';
import FormGroup from 'react-bootstrap/FormGroup';
import Label from 'react-bootstrap/Label';
import Input from 'react-bootstrap/Input';

//import FacebookLoginButton from 'react-social-login-buttons/FacebookLoginButton'

import { FacebookLoginButton } from 'react-social-login-buttons';
import { Link } from "react-router-dom";

class Create extends React.Component {
    render() {
        return (
            <Form className="create-form">
                <h1><span className="font-weight-bold">Start Your Own Movement!</span></h1>
                <h2 className="tex-center">We require social change in today's politics, religion, education, and health. Be the change today.</h2>
                <FormGroup>
                    <Label>Social Movement</Label>
                    <Input type="email" placeholder="Social Movement"/>
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    <Input type="email" placeholder="Description"/>
                </FormGroup>
            
            </Form>
        );
    }
}

export default Create;