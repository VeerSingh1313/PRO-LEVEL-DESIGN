import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example(props) {

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => props.handledlt()}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;