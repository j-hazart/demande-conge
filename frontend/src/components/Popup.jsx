import { useState } from "react";
import { Modal, ButtonToolbar, Button } from "rsuite";
import Formulaire from "./Formulaire";

function Popup() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <ButtonToolbar>
        <Button size="xs" onClick={() => handleOpen("xs")}>
          Congé
        </Button>
      </ButtonToolbar>
      <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Définir la période de congés</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formulaire />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Popup;
