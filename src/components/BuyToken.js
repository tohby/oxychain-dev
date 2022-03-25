import React from "react";
import { Button, Modal } from "react-bootstrap";

const BuyToken = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="text-white">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Buy O2 tokens</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          When you buy oxygen tokens you are supporting the projects developers
          who day to day take care of natural reserves and other sustainable
          causes.
        </p>
        <div className="input-group border border-white rounded-lg p-1 my-1">
          <input type="text" className="form-control" placeholder="Amount" />
          <button
            className="btn btn-secondary dropdown-toggle px-3"
            type="button"
          >
            OXE
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-grid gap-2 col-12 mx-auto">
          <Button variant="success" className="py-2" onClick={handleClose}>
            Buy
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default BuyToken;
