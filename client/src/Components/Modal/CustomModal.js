import React from 'react';
import Modal from 'react-modal';
import './CustomModal.css';
// Modal configuration (you can customize this as needed)
Modal.setAppElement('#root'); // Set the root element for accessibility

function CustomModal({ isOpen, onRequestClose, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Custom Modal"
      className="custom-modal"
      overlayClassName="modal-overlay"
    >
      <h2>Confirmation</h2>
      <p>Are you sure you want to delete all done tasks?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onRequestClose}>No</button>
    </Modal>
  );
}

export default CustomModal;
