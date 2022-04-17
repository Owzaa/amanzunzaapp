import React from 'react'
import {  Row, Col, Card, Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Button } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';



const Home = () => {

    return(
    <section>

      <Carousel variant="white" fade="5.2">
        <Carousel.Item>
          <img
            className="mdb-logotypes d-block w-100"
            src="../img/slides/debts1.png"
            height="430vh"
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/slides/economys2.png"
            height="430vh"
            alt="Second slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" bg-image d-block w-100"
            src="../img/slides/debts3.jpg"
            height="430vh"

            alt="Third slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr></hr>
      <div className="Container
      ">
       <Breadcrumb><BreadcrumbItem><p>Home / Our Values</p></BreadcrumbItem></Breadcrumb> 
        <p className="text-lighter" id="textAbout">In credit legal matters it is clear that since covid 19 has affected almost
          85 percent of finances it has left majority of consumers struggling to pay
          their debts so as credit legal expect we commit to assist consumers regain
          their financial freedom to can qualify again for vehicle finances homes loans
          and personal loans
        </p>
      </div>

      <hr></hr>
      <span className="HeaderTextContainer">
        <h1 className="text-muted text-center" id="TextHeader">OUR SOLUTIONS</h1>
      </span>
      <hr></hr>

     <div className="container">
        <Row  md={3} spacing={2}>
          <Col>
            <Card
              style={{
                width: "18rem"
              }}
            >
              <Card.Img   className="responsive-image" alt="Debt-Review" width="35px" height="200px" variant="bottom" src="../img/debt.png" />
              <Card.Body>
                <Card.Title className="text-center text-info"> Debt-Review </Card.Title>
                <Card.Text>
                  Debt review cancellation and status update with credit bureau.
                </Card.Text>{" "}
                <Button href="/services-solutions" color="warning" variant="outlined"> View More </Button>{" "}
              </Card.Body>{" "}
            </Card>
          </Col>{" "}
          <Col> <Card
            style={{
              width: "18rem"
            }}
          >
            <Card.Img className="responsive-image" alt="Debt" width="35px" height="200px" variant="bottom" src="../img/judge.png" />
            <Card.Body>
              <Card.Title className="text-center text-danger">Debt-Administration  </Card.Title  > <Card.Text >administration order removal and status update from credit bureau.                                  </Card.Text>{" "}
              <Button href="/services-solutions" variant="outlined" color="info"> View More </Button>{" "}
            </Card.Body>{" "}
          </Card></Col> <Col> <Card
            style={{
              width: "18rem"
            }}
          >
            <Card.Img className="responsive-image" alt="Judgements" width="35px" height="200px" variant="bottom" src="../img/admin.png" />
            <Card.Body>
              <Card.Title className="text-center text-warning">Judgements & Adverse </Card.Title> <Card.Text>judgements and Adverse removal from credit bureaus.                                                   </Card.Text>{" "}
              <Button href="/services-solutions" color="success" variant="outlined"> View More </Button>{" "}
            </Card.Body>
          </Card></Col>
        </Row>

      </div>
  
      <hr></hr>
      <div className="Jumbotron" >
    <h1 id="coverJumb" class="display-2"> Need assistance with your <strong>DEBT-ISSUES?....</strong><a href="/contact-us" id="enquireButton" 
      class="btn btn-light btn-lg text-lighter" role="button"><i className="fas fa-envelope-open"></i> ENQUIRE NOW</a></h1>

     
 
  <hr />
</div>


    </section>
  );
}
export default Home;