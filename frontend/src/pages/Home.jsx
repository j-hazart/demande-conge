import { Panel, PanelGroup } from "rsuite";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../services/authContext";
import Header from "../components/Header";
import Formulaire from "../components/Formulaire";
import CongeSection from "../components/Conges/CongeSection";

function Home() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  if (!auth.isAuth) {
    navigate("/");
  }

  const [conges, setConges] = useState([]);
  const [isSend, setIsSend] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/conges`).then((data) => {
      setConges(data.data);
    });
  }, [isSend]);
  return (
    <>
      <Header />
      {auth.role === "employe" && (
        <Formulaire userId={auth.id} setIsSend={setIsSend} />
      )}
      <main>
        <PanelGroup>
          <Panel header="En Attente">
            <CongeSection
              status="attente"
              conges={conges}
              userId={auth.id}
              userStatus={auth.role}
              setIsSend={setIsSend}
            />
          </Panel>
          <Panel header="Validé">
            <CongeSection
              status="valide"
              conges={conges}
              userId={auth.id}
              userStatus={auth.role}
            />
          </Panel>
          <Panel header="Refusé">
            <CongeSection
              status="refus"
              conges={conges}
              userId={auth.id}
              userStatus={auth.role}
              setIsSend={setIsSend}
            />
          </Panel>
        </PanelGroup>
      </main>
    </>
  );
}

export default Home;
