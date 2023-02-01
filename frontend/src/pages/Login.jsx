import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      email.current.value === "boss@mail.fr" &&
      password.current.value === "boss"
    ) {
      navigate(`/acceuil?status=patron&id=1`);
    } else if (
      email.current.value === "johndoe@mail.fr" &&
      password.current.value === "doe"
    ) {
      navigate(`/acceuil?status=employe&id=2`);
    } else {
      console.warn("no matching result");
    }
  }
  return (
    <main className="login">
      <h1>Connexion</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="login-form-group">
          <label htmlFor="email">Adresse email</label>
          <input
            type="email"
            name="email"
            placeholder="adresse email"
            ref={email}
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            placeholder="mot de passe"
            ref={password}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </main>
  );
}

export default Login;
