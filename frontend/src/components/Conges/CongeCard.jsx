import PropTypes from "prop-types";

function CongeCard({ conge }) {
  return (
    <div className="conge-card">
      <p>{conge.name}</p>
      <p>{`Du ${conge.start}`}</p>
      <p>{`Au ${conge.end}`}</p>
    </div>
  );
}

CongeCard.propTypes = {
  conge: PropTypes.shape({
    id: 1,
    start: PropTypes.string,
    end: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default CongeCard;
