import { useState } from "react";
import { Button,Modal } from "react-bootstrap"
import Create from "./Create";

const Navigation = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return(
        <div className="bg-dark py-2 d-flex flex-row justify-content-center">
      <Button variant={"outline-warning"} onClick={handleShow}>Add ➕</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Your favourite</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Create handleClose={handleClose} />
        </Modal.Body>
      
      </Modal>
        </div>
    )
}

export default Navigation