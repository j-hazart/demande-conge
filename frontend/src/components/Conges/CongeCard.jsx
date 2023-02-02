import { Button } from "rsuite";
import PropTypes from "prop-types";
import axios from "axios";

function CongeCard({ conge, userStatus, status, setIsSend }) {
  function makeChoice(choice) {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/conges/${conge.id}`, {
        statut: choice,
      })
      .then(setIsSend((old) => !old));
  }
  return (
    <div className="conge-card">
      <p>{conge.name}</p>
      <p>{`Du ${conge.start}`}</p>
      <p>{`Au ${conge.end}`}</p>
      {userStatus === "patron" && status === "attente" && (
        <div className="button-choice">
          <Button onClick={() => makeChoice("valide")} appearance="primary">
            Accorder
          </Button>
          <Button onClick={() => makeChoice("refus")} appearance="subtle">
            Refuser
          </Button>
        </div>
      )}
    </div>
  );
}

CongeCard.propTypes = {
  status: PropTypes.string.isRequired,
  conge: PropTypes.shape({
    id: PropTypes.number,
    start: PropTypes.string,
    end: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  userStatus: PropTypes.string.isRequired,
  setIsSend: PropTypes.func.isRequired,
};

export default CongeCard;
