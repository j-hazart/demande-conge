import { Form, Button, Modal } from "rsuite";
import { useState } from "react";

function Formulaire() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const minDate = `${year}-${`0${month}`.slice(-2)}-${`0${day}`.slice(-2)}`;

  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    start: "",
    end: "",
  });

  const handleSubmit = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Header>
          <Modal.Title>Nouvelle demande de congés</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onChange={setFormValue} formValue={formValue}>
            <Form.Group controlId="start">
              <Form.ControlLabel>Début des congés</Form.ControlLabel>
              <Form.Control name="start" type="date" min={minDate} />
              <Form.HelpText>Une date de début est requis</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="end">
              <Form.ControlLabel>Fin des congés</Form.ControlLabel>
              <Form.Control
                name="end"
                type="date"
                min={formValue.start.length <= 0 ? minDate : formValue.start}
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
      <Button onClick={handleOpen}>Poser des congés</Button>
    </>
  );
}

export default Formulaire;
