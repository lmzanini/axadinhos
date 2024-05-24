import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Button,
  CardFooter,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCircleArrowDown, faList } from "@fortawesome/free-solid-svg-icons";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import productsData from "../data/productsData";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ModalCategorias from './ModalCategorias';

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="search-bg" style={{ width: "100%" }}>
        <Row className="justify-content-center">
          <Col xs={8} md={4} lg={4}>
            <InputGroup className="mb-3 mt-3">
              <Button variant="dark" className="icon-circle" id="button-addon2" onClick={handleOpenModal}>
                <FontAwesomeIcon icon={faList} />
              </Button>
              <Form.Control
                placeholder="Pesquisar Produto"
                aria-label="Pesquisar Produto"
                aria-describedby="basic-addon2"
              />
              <Button variant="dark" id="button-addon2">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <div className="d-flex justify-content-center"></div>
      </div>

      <Container>
        <Row className="justify-content-center mt-4">
          {productsData.map((product) => (
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
                  <Card.Text className="text-center primary-color">
                    R${product.price}
                  </Card.Text>
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
                    <Button
                      className="btn-primary mt-2 mb-2"
                      href={`/product/${product.id}`}
                    >
                      Detalhes
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          ))}
        </Row>
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
