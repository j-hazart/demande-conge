import { Button } from "rsuite";
import PropTypes from "prop-types";
import axios from "axios";

function CongeCard({ conge, userStatus, status, fetchData, userId }) {
  function makeChoice(choice) {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/conges/${conge.id}`, {
        statut: choice,
      })
      .then(fetchData());
  }
  function deleteConge() {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/conges/${conge.id}`)
      .then(fetchData());
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
      {conge.userId === userId && status === "refus" && (
        <div className="button-choice">
          <Button
            onClick={() => deleteConge()}
            appearance="ghost"
            color="yellow"
          >
            Supprimer
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
    userId: PropTypes.number,
  }).isRequired,
  userStatus: PropTypes.string.isRequired,
  fetchData: PropTypes.func,
  userId: PropTypes.number.isRequired,
};

CongeCard.defaultProps = {
  fetchData: undefined,
};

export default CongeCard;
