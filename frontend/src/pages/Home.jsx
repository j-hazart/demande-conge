import { Panel, PanelGroup } from "rsuite";
import Header from "../components/Header";
import Formulaire from "../components/Formulaire";
import CongeSection from "../components/Conges/CongeSection";

function Home() {
  const conges = [
    {
      id: 1,
      start: "12-02-2023",
      end: "12-03-2023",
      name: "John Doe",
      status: "attente",
    },
    {
      id: 2,
      start: "25-01-2023",
      end: "18-02-2023",
      name: "John Doe",
      status: "valide",
    },
    {
      id: 3,
      start: "04-05-2023",
      end: "24-05-2023",
      name: "John Doe",
      status: "refus",
    },
    {
      id: 4,
      start: "08-06-2023",
      end: "30-07-2023",
      name: "John Doe",
      status: "refus",
    },
  ];
  return (
    <>
      <Header />
      <Formulaire />
      <main>
        <PanelGroup>
          <Panel header="En Attente" collapsible="true">
            <CongeSection status="attente" conges={conges} />
          </Panel>
          <Panel header="Validé" collapsible="true">
            <CongeSection status="valide" conges={conges} />
          </Panel>
          <Panel header="Refusé" collapsible="true">
            <CongeSection status="refus" conges={conges} />
          </Panel>
        </PanelGroup>
      </main>
    </>
  );
}

export default Home;
