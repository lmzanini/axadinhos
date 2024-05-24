import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalCategorias({ show, handleClose, title }) {
  // Você pode adicionar estados e lógicas adicionais aqui se necessário

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Aqui você pode adicionar o conteúdo específico para categorias */}
        Conteúdo do modal de categorias aqui.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCategorias;

