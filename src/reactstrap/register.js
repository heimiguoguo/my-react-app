import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './login.scss'

export default class Example extends React.Component {
  render() {
    return (
      <Form className='loginForm'>
        <FormGroup>
          <Label for="userName">Username</Label>
          <Input type="email" name="username" id="userName" placeholder="userName" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        <FormGroup tag="fieldset">
          <Label>Role</Label>
          <FormGroup check inline>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Boss
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Customer
            </Label>
          </FormGroup>
        </FormGroup>
        <Button color='primary'>Register</Button>
      </Form>
    );
  }
}