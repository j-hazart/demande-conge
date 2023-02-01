import { useRef, useState } from "react";
import { Form, Button } from "rsuite";

function Login() {
  const [email, setEmail] = useState("");
  const password = useRef();

  function handleSubmit() {}
  return (
    <main className="login">
      <h1>Connexion</h1>
      <Form
        layout="inline"
        className="login-form"
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <Form.Group
          controlId="email"
          className="login-form-group"
          ref={password}
        >
          <Form.ControlLabel>Adresse e-mail</Form.ControlLabel>
          <Form.Control
            value={email}
            placeholder="adresse e-mail"
            name="email"
            type="email"
            onChange={() => setEmail(email.target.value)}
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
