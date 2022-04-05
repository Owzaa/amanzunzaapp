import React from "react";
import { render } from "react-dom";
import {Form,Button} from 'react-bootstrap'


// Form Completion Function
export default function ContactForm (){

    render(

<>
<div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>React-Bootstrap Form Component</h4>
      <Form onsubmit={"submit"}>
      <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Subject:</Form.Label>
          <Form.Control type="text" 
                        placeholder="E-mail Subject...." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Requested Service:</Form.Label>
          <Form.Control type="select" placeholder="choose your Service?" />
        </Form.Group>
        <Button variant="primary" type="submit">
          submit form
        </Button>
      </Form>
    </div>
</>


    );
}