import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./services/authContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/accueil/:role" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
