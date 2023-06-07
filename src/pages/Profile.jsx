import { Container, Button } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function Profile() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function logout() {
    authContext.setToken(null);
    navigate("/login");
  }

  return (
    <Container>
      <h1 className="my-3">Profile Page</h1>
      <Button variant="primary" onClick={logout}>
        Logout
      </Button>
    </Container>
  );
}
