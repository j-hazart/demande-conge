import PropTypes from "prop-types";
import CongeCard from "./CongeCard";

function CongeSection({ status, conges }) {
  return (
    <section className="conge-status">
      {conges
        .filter((conge) => conge.status === status)
        .map((conge) => (
          <CongeCard conge={conge} />
        ))}
    </section>
  );
}

CongeSection.propTypes = {
  status: PropTypes.string.isRequired,
  conges: PropTypes.arrayOf(
    PropTypes.shape({
      id: 1,
      start: PropTypes.string,
      end: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
    })
  ).isRequired,
};

export default CongeSection;
