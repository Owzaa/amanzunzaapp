import { AlertTitle, CardContent } from "@mui/material";
import React from "react";

import { Form, Button, Alert, FormText,Container, Card } from 'react-bootstrap';
import './contactForm.css'


// Form Completion Function
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    //binding stateEvent
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    Alert('your Form was Submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <br />
        <span> <h6 className="
        text-muted text-center" style={{ fontStyle: 'normal', color: 'greyLight', fontSize: 'absolute-size' }}>Amanzunza Debt Solution  (Pty) Ltd </h6></span>
        <span className="
        text-center"><h2 className="text-muted"><strong>CONTACT FORM </strong></h2> </span>
 <Container className="formContainer">
        <Form onSubmit={this.handleSubmit} className="col-md-12 col-offset-3">
         
            <Form.Group>
              <Form.Label> <strong>Full Name(s)</strong> </Form.Label>
              <Form.Control id="fullName" name="FullName" type="text-input" size="35"
                placeholder="Enter your full names" required />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label><strong>Subject</strong></Form.Label>
              <Form.Control id="subject" type="text-input" name="Email-Subject"
                placeholder="Your Subject...." required />

            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label><strong>E-mail</strong> </Form.Label>
              <Form.Control className="form-control form-control-md" type="email-input" id="email" name="Email"
                placeholder="Enter your your email address" required />
              <small id="emailHelp" className="form-text text-muted"> <AlertTitle color="secondary" > NB: We'll never share your email with anyone else.</AlertTitle></small>

            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label><strong>Requested Service</strong> </Form.Label>
              <Form.Select className="form-control form-select-lg" id="requestedService" placeholder="choose your Service?">
                <option defaultValue > Please Select Your Request</option>
                <option type="option" name="DebtAdministration" value="this.handleChange()" >Debt-Administration</option>
                <option type="option" name="DebtReviewCancellation" value="this.handleChange()" >Debt Review Cancellation</option>
                <option type="option" name="JudgementAndAdverse" value="this.handlehange()" > Judgements & Adverse</option>


              </Form.Select>
            </Form.Group>
            <br />
            <Form.Label>
              <strong>Send  Message</strong>
            </Form.Label>
            <Form.Group>

              <FormText type="text-field" placeholder="write your message here.....">
                <textarea className="form-control form-control-lg" multiline  type="textarea"></textarea>
              </FormText>
            </Form.Group>
            <br />
            <Button id="buttonSubmitText" className="btn btn-primary" variant="warning" type="submit">
              submit form
            </Button>
<br/>
<br/>         
<Card variant="contained" color="dark" className="Disclaimer__Container" >

  <CardContent >   <p className="text-muted">Disclaimer:</p> 
       
             
            <p className="text-muted" id="textClaimer">Kindly note: </p>
         
       
</CardContent>
     </Card>   
        </Form> 
      </Container>

      </>
    );
  }
}
export default ContactForm;