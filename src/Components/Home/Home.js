import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import NavigationBar from "../../Navigation/Navigation_Bar";
export default function HomeIndex() {
  return (
    <>
        <NavigationBar />


    <div className="Carousel__Content">

        <Carousel variant="dark">
            <Carousel.Item>
    <img
      className="d-block w-100"
      src="../img/slides/"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../img/slides/"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../img/slides/"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
         </Carousel.Item>
</Carousel>
    </div>
      <Container fluid
       className="GridContent__Container">
        <Row sm={3}>
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
                <Card.Title> Judgements </Card.Title> <Card.Text>administration order removal and status update from credit bureau.                                  </Card.Text>{" "}
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
