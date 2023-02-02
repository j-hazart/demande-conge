import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "rsuite";

function Login() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  function handleSubmit() {
    if (formValue.email === "boss@mail.fr" && formValue.password === "boss") {
      navigate(`/accueil?status=patron&id=1`);
    } else if (
      formValue.email === "johndoe@mail.fr" &&
      formValue.password === "doe"
    ) {
      navigate(`/accueil?status=employe&id=2`);
    } else {
      console.warn("no matching result");
    }
  }

  return (
    <main className="login">
      <h1>Connexion</h1>
      <Form
        layout="inline"
        className="login-form"
        onChange={setFormValue}
        formValue={formValue}
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

        <Button
          className="login-form-btn"
          onClick={() => {
            handleSubmit();
          }}
        >
          Se connecter
        </Button>
      </Form>
    </main>
  );
}

export default Login;
