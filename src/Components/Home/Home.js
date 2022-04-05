import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavigationBar from "../../Navigation/Navigation_Bar";
export default function HomeIndex() {
  return (
    <>
        <NavigationBar />
      <Container fluid
       className="GridContent__Container">
        <Row sm={3}>
          <Col>
            <Card
              style={{
                width: "18rem"
              }}
            >
              <Card.Img width="75px" height="200px"  variant="top" src="../img/debt.png" />
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
              <Card.Img width="75px" height="200px"  variant="top" src="../img/judge.png" />
              <Card.Body>
                <Card.Title> Judgements </Card.Title> <Card.Text>administration order removal and status update from credit bureau.                                  </Card.Text>{" "}
                <Button variant="primary"> View More </Button>{" "}
              </Card.Body>{" "}
            </Card></Col> <Col> <Card
              style={{
                width: "18rem"
              }}
            >
              <Card.Img width="75px" height="200px" variant="top" src="../img/admin.png" />
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
