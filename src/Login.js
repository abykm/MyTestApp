import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function Login(props) {
  console.log(props);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
  }
  return (
    <div className="App">
      <h2>Sign In</h2>
      <Form className="form">
        <FormGroup>
          <Label for="exampleEmail">Username : </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password : </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" type="submit" onClick={handleSubmit}>
          Login
        </Button>
        <Button color="success" href="/123">
          Register
        </Button>
      </Form>
    </div>
  );
}
