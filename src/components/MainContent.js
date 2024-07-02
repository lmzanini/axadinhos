import React, { useState } from "react";
import { Container, Row, Col, Card, CardFooter, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import productsData from "../data/productsData";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ModalCategorias from "./ModalCategorias";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleNavigate = (productId) => {
    navigate(`/product/${productId}`);
  };

  const cardsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = productsData.slice(indexOfFirstCard, indexOfLastCard);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Container>

        <InputGroup className="mb-4 mt-4 input-group-test">
        <Button className="search-button" id="button-addon2" onClick={handleOpenModal}>
            <FontAwesomeIcon icon={faFilter} />
          </Button>
          <Form.Control
            placeholder="Produto"
            aria-label="Produto"
            aria-describedby="basic-addon2"
          />
          <Button className="search-button" id="button-addon2">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup>

        <Button className="search-button m-2" onClick={handlePrevPage}><FontAwesomeIcon icon={faArrowLeft} /></Button>
        {Array.from({ length: Math.ceil(productsData.length / cardsPerPage) }, (_, index) => (
          <Button className="search-button m-2" key={index + 1} onClick={() => setCurrentPage(index + 1)}>{index + 1}</Button>
        ))}
        <Button className="search-button m-2" onClick={handleNextPage}><FontAwesomeIcon icon={faArrowRight} /></Button>

        <Row className="justify-content-center mt-4">
          {currentCards.map((product) => (
            <Card className="card-bg" key={product.id}>
              <Card.Img
                variant="top"
                src={product.image}
                className="card-img-top"
              />
              <Card.Body className="card-body-dark mt-2">
                <div>
                  <Card.Title className="text-center">
                    {product.name}
                  </Card.Title>
                  {/* <Card.Text className="text-center primary-color">
                    R${product.price}
                  </Card.Text> */}
                </div>

                <div className="vertical-line"></div>
                <Card.Img
                  className="card-img"
                  variant="bottom"
                  src={product.location}
                />
              </Card.Body>

              <CardFooter className="card-footer-dark">
                <Row>
                  <Col>
                    <button
                      className="button mt-2 mb-2"
                      onClick={() => handleNavigate(product.id)}
                    >
                      <div className="blob1"></div>
                      <div className="blob2"></div>
                      <div className="inner">Detalhes</div>
                    </button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          ))}
        </Row>

        <Button className="search-button m-2" onClick={handlePrevPage}><FontAwesomeIcon icon={faArrowLeft} /></Button>
        {Array.from({ length: Math.ceil(productsData.length / cardsPerPage) }, (_, index) => (
          <Button className="search-button m-2" key={index + 1} onClick={() => setCurrentPage(index + 1)}>{index + 1}</Button>
        ))}
        <Button className="search-button m-2" onClick={handleNextPage}><FontAwesomeIcon icon={faArrowRight} /></Button>

      </Container>
      <ModalCategorias
        show={showModal}
        handleClose={handleCloseModal}
        title="Categorias"
      />
      {/* <Footer /> */}
    </>
  );
};

export default MainContent;
