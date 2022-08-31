import "./styles.css";
import React, { useState } from "react";

const app = () => {
  // aprendendo a gerenciar estados (states)
  const [ativo, setAtivo] = useState(true);
  return (
    <div>
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? "Botão Ativo" : "Botão Inativo"}
      </button>
    </div>
  );
};
export default app;
