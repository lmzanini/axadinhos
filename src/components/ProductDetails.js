import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import productsData from "../data/productsData"; // Importe a lista de produtos
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const getProductById = (id) => {
  return productsData.find((product) => product.id === parseInt(id));
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Processar descrição para quebrar em linhas e limitar caracteres
  const maxChar = 300;
  const descriptionLines = product.description
    .split(";")
    .map((line) => line.trim());
  let displayedDescription = descriptionLines.join("; ");
  let shortDescription = displayedDescription;

  if (!isExpanded && displayedDescription.length > maxChar) {
    let currentLength = 0;
    shortDescription = descriptionLines
      .reduce((acc, line) => {
        if (currentLength + line.length <= maxChar) {
          currentLength += line.length + 1; // +1 for the semicolon
          return acc + line + "; ";
        }
        return acc;
      }, "")
      .trim();
    if (shortDescription.endsWith(";")) {
      shortDescription = shortDescription.slice(0, -1) + "...";
    }
  }

  // Função para lidar com o clique no botão "Obter"
  const handleGetButtonClick = () => {
    // Redirecionar para o link fornecido pelo produto
    window.open(product.link, "_blank");
  };

  const handleNavigate = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <Container className="mt-4">
        {/* <Row className="justify-content-center mt-4"> */}
        <div class="card mb-3 card-details">
          <div class="row g-0">
            <div class="col-md-4 ">
              <img
                src={product.image}
                class="img-fluid  card-img-top-details "
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h2 class="card-title primary-color text-center">
                  {product.name}
                </h2>
                <div className="row">
                  <div style={{ color: "white" }}>
                    {isExpanded
                      ? displayedDescription
                          .split(";")
                          .map((line, index) => <p key={index}>{line}</p>)
                      : shortDescription
                          .split(";")
                          .map((line, index) => <p key={index}>{line}</p>)}
                    <Button
                      variant="link"
                      className="primary-color"
                      onClick={handleToggleExpand}
                    >
                      {isExpanded ? "Ver menos" : "Ver mais"}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center">
                  {/* <Button
                    className="text-center"
                    variant="primary"
                    onClick={handleGetButtonClick}
                  >
                    Comprar
                  </Button> */}
                  <button
                    className="button mt-2 mb-2"
                    onClick={handleGetButtonClick}
                  >
                    <div className="blob1"></div>
                    <div className="blob2"></div>
                    <div className="inner">Comprar</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </Row> */}
      </Container>
    </>
  );
};

export default ProductDetails;
