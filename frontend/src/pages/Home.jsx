import { Panel, PanelGroup } from "rsuite";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Formulaire from "../components/Formulaire";
import CongeSection from "../components/Conges/CongeSection";

function Home() {
  const { search } = useLocation();
  const status = useMemo(() => new URLSearchParams(search), [search]).get(
    "status"
  );
  const userId = useMemo(() => new URLSearchParams(search), [search]).get(
    "userId"
  );

  const [conges, setConges] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/conges`)
      .then((data) => setConges(data.data));
  }, []);

  return (
    <>
      <Header />
      <Formulaire />
      <main>
        <PanelGroup>
          <Panel header="En Attente">
            <CongeSection
              status="attente"
              conges={conges}
              userId={userId}
              userStatus={status}
            />
          </Panel>
          <Panel header="Validé">
            <CongeSection
              status="valide"
              conges={conges}
              userId={userId}
              userStatus={status}
            />
          </Panel>
          <Panel header="Refusé">
            <CongeSection
              status="refus"
              conges={conges}
              userId={userId}
              userStatus={status}
            />
          </Panel>
        </PanelGroup>
      </main>
    </>
  );
}

export default Home;
