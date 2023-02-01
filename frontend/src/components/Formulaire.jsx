import { Form, Button, Modal } from "rsuite";
import { useState } from "react";

function Formulaire() {
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    textarea: "",
  });

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
              <Form.Control name="start" type="date" />
              <Form.HelpText>Une date de début est requis</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="end">
              <Form.ControlLabel>Fin des congés</Form.ControlLabel>
              <Form.Control name="end" type="date" />
              <Form.HelpText>Une date de fin est requis</Form.HelpText>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Confirm
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={handleOpen}>Poser des congés</Button>
    </>
  );
}

export default Formulaire;
