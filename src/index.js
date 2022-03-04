import React from "react";
import ReactDOM from "react-dom";
import BoardView from "./components/Board";
import "./main.scss";
import "./styles.scss";

const App = () => {
  return <BoardView />;
};

ReactDOM.render(<App />, document.getElementById("root"));

alert("Olá, seja bem-vindo ao 2048 animado! Utilize as setinhas do teclado (cima, baixo, esquerda, direita) para jogar e divirta-se!");
