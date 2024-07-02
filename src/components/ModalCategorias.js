import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import productsData from "../data/productsData";

function ModalCategorias({ show, handleClose, title, uniqueCategories, handleCategoryFilter }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {uniqueCategories.map((category, index) => (
            <div key={index} style={{ width: "50%" }}>
              <label className="cyberpunk-checkbox-label mb-2">
                <input
                  type="checkbox"
                  className="cyberpunk-checkbox"
                  onChange={() => handleCategoryFilter(category)}
                />
                {category}
              </label>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Filtrar
        </Button> */}
        <Button variant="secondary" className="btn-direita" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCategorias;
