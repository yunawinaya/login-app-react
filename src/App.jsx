import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { Navbar, Nav, Button } from "react-bootstrap";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { AuthContext } from "./AuthContext";
import RequireAuth from "./components/RequireAuth";

export default function App() {
  const [token, setToken] = useLocalStorage("token", null);

  function logout() {
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">
            Login App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {!token && (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              {token && (
                <>
                  <Nav.Link as={Link} to="/dashboard">
                    Dashboard
                  </Nav.Link>
                  <Nav.Link as={Link} to="/profile">
                    Profile
                  </Nav.Link>
                </>
              )}
            </Nav>
            {token && (
              <Button variant="primary" onClick={logout}>
                Logout
              </Button>
            )}
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
            path="/dashboard"
          />
          <Route
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
            path="/profile"
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
