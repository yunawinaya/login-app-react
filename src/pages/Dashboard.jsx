import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function logout() {
    authContext.setToken(null);
    navigate("/login");
  }

  return (
    <Container>
      <h1 className="my-3">Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Sigma School Analytics</Card.Title>
              <Card.Text>People who graduate and get jobs: 80%</Card.Text>
            </Card.Body>
          </Card>
          <Button variant="primary" onClick={logout}>
            Logout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
