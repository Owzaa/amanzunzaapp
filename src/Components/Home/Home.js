import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
export default function HomeIndex() {
  return (
    <>
  
     


    <div fluid className="Container">
   
    <Carousel variant="white" fade="5.2">
            <Carousel.Item>
            <img
      className="d-block w-100"
      src="../img/slides/debts1.png"
      height="450vh"
      alt="First slide"
        />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../img/slides/economys2.png"
      height="450vh"
fluid
      alt="Second slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../img/slides/debts3.jpg"
       height="450vh"

      alt="Third slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
         </Carousel.Item>
</Carousel>
<hr></hr>
<div className="about__Container">
<h1 className="text-center text-muted"><u>WHO ARE WE?</u></h1><p  className="container text-muted">
in credit legal matters and is clear that since covid 19 has affected almost 
85 percent of finances it has left majority of consumers struggling to pay 
their debts so as credit legal expect we commit to assist consumers regain 
their financial freedom to can qualify again for vehicle finances homes loans 
and personal loans
</p>
</div>

<hr></hr>
<span className="HeaderTextContainer">
    <h1 className="text-muted" id="TextHeader"><u><bold>OUR SOLUTIONS</bold></u></h1>
</span>

        </div>
      <Container fluid
       className="GridContent__Container">
        <Row md={3}>
          <Col>
            <Card
              style={{
                width: "18rem"
              }}
            >
              <Card.Img className="responsive-image" fluid width="75px" height="200px"  variant="top" src="../img/debt.png" />
              <Card.Body>
                <Card.Title> Debt Review </Card.Title> 
                <Card.Text>
                Debt review cancellation and status update with credit bureau.                                     
                </Card.Text>{" "}
                <Button variant="outlined"> View More </Button>{" "}
              </Card.Body>{" "}
            </Card>
          </Col>{" "}
          <Col> <Card
              style={{
                width: "18rem"
              }}
            >
              <Card.Img className="responsive-image" fluid width="75px" height="200px"  variant="top" src="../img/judge.png" />
              <Card.Body>
                <Card.Title> Judgements & Adverse </Card.Title> <Card.Text>administration order removal and status update from credit bureau.                                  </Card.Text>{" "}
                <Button variant="outlined" color="primary"> View More </Button>{" "}
              </Card.Body>{" "}
            </Card></Col> <Col> <Card
              style={{
                width: "18rem"
              }}
            >
              <Card.Img className="responsive-image" fluid  width="75px" height="200px" variant="top" src="../img/admin.png" />
              <Card.Body>
                <Card.Title> Administration</Card.Title> <Card.Text>judgements and Adverse removal from credit bureaus.                                                   </Card.Text>{" "}
                <Button variant="outlined"> View More </Button>{" "}
              </Card.Body>{" "}
            </Card></Col>{" "}
        </Row>{" "}

      </Container>
      <hr></hr>
      </>
  );
}
