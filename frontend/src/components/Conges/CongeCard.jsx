import { Button } from "rsuite";
import PropTypes from "prop-types";

function CongeCard({ conge, userStatus, status }) {
  return (
    <div className="conge-card">
      <p>{conge.name}</p>
      <p>{`Du ${conge.start}`}</p>
      <p>{`Au ${conge.end}`}</p>
      {userStatus === "patron" && status === "attente" && (
        <div className="button-choice">
          <Button appearance="primary">Accorder</Button>
          <Button appearance="subtle">Refuser</Button>
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
};

export default CongeCard;
