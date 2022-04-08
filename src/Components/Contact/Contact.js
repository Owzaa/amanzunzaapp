import React from "react";

import {Form,Button, Alert} from 'react-bootstrap';
import './contactForm.css'


// Form Completion Function
class ContactForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

      //binding stateEvent
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
          Alert('A Your Fom was submitted: ' + this.state.value);
          event.preventDefault();
    }
  
     render(){
       return(
        <>
        <span> <h4>Amanzunza Debt SolutionS</h4></span>
      <Form onSubmit={this.handleSubmit}>
      <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control id="fullName" type="text" 
                        placeholder="Enter your full name" />
      </Form.Group>
      <Form.Group>
          <Form.Label>Subject:</Form.Label>
       <Form.Control id="subject"  type="text" 
                        placeholder="E-mail Subject...." />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" id="email"  
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Requested Service:</Form.Label>
          <Form.Control id="requestedService"  type="select" placeholder="choose your Service?" />
        </Form.Group>
        <Button variant="primary" type="submit">
          submit form
        </Button>
      </Form>
      </>
    );
}
}
export default ContactForm;