import PropTypes from "prop-types";
import CongeCard from "./CongeCard";

function CongeSection({ status, conges, userId, userStatus }) {
  function verifyStatus(statusUser) {
    if (statusUser === "employe") {
      return conges.filter(
        (conge) => conge.statut === status && `${conge.userId}` === userId
      );
    }
    if (statusUser === "patron") {
      return conges.filter((conge) => conge.statut === status);
    }
    return null;
  }
  return (
    <section className="conge-status">
      {verifyStatus(userStatus).map((conge) => (
        <CongeCard
          key={conge.id}
          conge={conge}
          userStatus={userStatus}
          status={status}
        />
      ))}
    </section>
  );
}

CongeSection.propTypes = {
  status: PropTypes.string.isRequired,
  conges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      start: PropTypes.string,
      end: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
    })
  ).isRequired,
  userId: PropTypes.string.isRequired,
  userStatus: PropTypes.string.isRequired,
};

export default CongeSection;
