import React from "react";
import { Container } from "react-bootstrap";
import faqsData from "../data/perguntasData";
const App = () => {
  return (
    <>
      <Container>
        {faqsData.map((item) => (
          <div class="card-perguntas">
            <h5 class="p-4">{item.pergunta}</h5>
            <p class="p-4">{item.resposta}</p>
          </div>
        ))}
      </Container>
    </>
  );
};

export default App;
