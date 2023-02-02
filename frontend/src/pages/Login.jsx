import axios from "axios";
import { Form, Button } from "rsuite";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../services/authContext";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  function login() {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, formValue)
      .then((res) => {
        if (res.data.id) {
          setAuth({
            id: res.data.id,
            nom: res.data.nom,
            prenom: res.data.prenom,
            role: res.data.role,
            isAuth: true,
          });
          navigate(`/accueil/${res.data.role}`);
        }
      });
  }

  return (
    <main className="login">
      <h1>Connexion</h1>
      <Form
        layout="inline"
        className="login-form"
        onChange={setFormValue}
        formValue={formValue}
        onSubmit={() => {
          login();
        }}
      >
        <Form.Group controlId="email" className="login-form-group">
          <Form.ControlLabel>Adresse e-mail</Form.ControlLabel>
          <Form.Control
            placeholder="adresse e-mail"
            name="email"
            type="email"
          />
        </Form.Group>

        <Form.Group controlId="password" className="login-form-group">
          <Form.ControlLabel>Mot de passe</Form.ControlLabel>
          <Form.Control
            placeholder="mot de passe"
            name="password"
            type="password"
            autoComplete="off"
          />
        </Form.Group>

        <Button className="login-form-btn" type="submit">
          Se connecter
        </Button>
      </Form>
    </main>
  );
}

export default Login;
