import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './login.scss'

export default class Example extends React.Component {
  render() {
    return (
      <Form className='loginForm'>
        <FormGroup>
          <Label for="userName">Email</Label>
          <Input type="email" name="username" id="userName" placeholder="userName" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Remember me
          </Label>
        </FormGroup>
        <Button color='primary'>Login</Button>
      </Form>
    );
  }
}