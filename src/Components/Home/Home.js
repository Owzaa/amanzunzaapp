import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import NavigationBar from "../../Navigation/Navigation_Bar";
export default function HomeIndex() {
  return (
    <>
    <div className="navigation__container">   
        <NavigationBar />
    </div>
     

<br></br>
    <div className="Carousel__Content">
   
    <Carousel variant="dark" fade="1.2">
            <Carousel.Item>
            <img
      className="d-block w-100"
      src="../img/slides/debts1.png"
      alt="First slide"
        />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../img/slides/economys2.png"
      alt="Second slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../img/slides/debts3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
         </Carousel.Item>
</Carousel>
<hr></hr>
<div className="about__Container">
 <span id="TextHeader"><h1 className="text-muted">WHO ARE WE?</h1></span>
<p  className="Container text-muted">
in credit legal matters and is clear that since covid 19 has affected almost 
85 percent of finances it has left majority of consumers struggling to pay 
their debts so as credit legal expect we commit to assist consumers regain 
their financial freedom to can qualify again for vehicle finances homes loans 
and personal loans
</p>
</div>

<hr></hr>
<span className="Header__TextContainer">
    <h1 className="text-muted text-center" id="TextHeader"><bold>OUR SOLUTIONS</bold></h1>
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
              <Card.Img fluid width="75px" height="200px"  variant="top" src="../img/debt.png" />
              <Card.Body>
                <Card.Title> Debt Review </Card.Title> 
                <Card.Text>
                Debt review cancellation and status update with credit bureau.                                     
                </Card.Text>{" "}
                <Button variant="primary"> View More </Button>{" "}
              </Card.Body>{" "}
            </Card>
          </Col>{" "}
          <Col> <Card
              style={{
                width: "18rem"
              }}
            >
              <Card.Img fluid width="75px" height="200px"  variant="top" src="../img/judge.png" />
              <Card.Body>
                <Card.Title> Judgements & Adverse </Card.Title> <Card.Text>administration order removal and status update from credit bureau.                                  </Card.Text>{" "}
                <Button variant="primary"> View More </Button>{" "}
              </Card.Body>{" "}
            </Card></Col> <Col> <Card
              style={{
                width: "18rem"
              }}
            >
              <Card.Img fluid width="75px" height="200px" variant="top" src="../img/admin.png" />
              <Card.Body>
                <Card.Title> Administration</Card.Title> <Card.Text>judgements and Adverse removal from credit bureaus.                                                   </Card.Text>{" "}
                <Button variant="primary"> View More </Button>{" "}
              </Card.Body>{" "}
            </Card></Col>{" "}
        </Row>{" "}
      </Container>
      </>
  );
}
