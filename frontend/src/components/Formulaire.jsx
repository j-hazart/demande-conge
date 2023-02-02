import PropTypes from "prop-types";
import { Form, Button, Modal } from "rsuite";
import { useState } from "react";
import axios from "axios";

function Formulaire({ userId, setIsSend }) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const minDate = `${year}-${`0${month}`.slice(-2)}-${`0${day}`.slice(-2)}`;

  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    dateDebut: "",
    dateFin: "",
    userId,
  });

  const handleSubmit = () => {
    setOpen(false);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/conges`, formValue)
      .then(setIsSend((old) => !old));
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="form-conge">
      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Header>
          <Modal.Title>Nouvelle demande de congés</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onChange={setFormValue} formValue={formValue}>
            <Form.Group controlId="dateDebut">
              <Form.ControlLabel>Début des congés</Form.ControlLabel>
              <Form.Control name="dateDebut" type="date" min={minDate} />
              <Form.HelpText>Une date de début est requis</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="dateFin">
              <Form.ControlLabel>Fin des congés</Form.ControlLabel>
              <Form.Control
                name="dateFin"
                type="date"
                min={
                  formValue.dateDebut.length <= 0
                    ? minDate
                    : formValue.dateDebut
                }
              />
              <Form.HelpText>Une date de fin est requis</Form.HelpText>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} appearance="primary">
            Confirmer
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
      <Button className="form-button" onClick={handleOpen}>
        Poser des congés
      </Button>
    </div>
  );
}

Formulaire.propTypes = {
  userId: PropTypes.number.isRequired,
  setIsSend: PropTypes.func.isRequired,
};

export default Formulaire;
