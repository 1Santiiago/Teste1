import React from "react";

const Formula = () => {
  return (
    <div>
      <form>
        <div className="form-wraper">
          <p>Nome Completo*</p>
          <input type="text" name="nome" required placeholder="Nome" />
        </div>

        <div className="form-wraper">
          <p>E-mail*</p>
          <input type="emial" name="nome" required placeholder="Nome" />
        </div>

        <div className="form-wraper">
          <p>Telefone*</p>
          <input type="text" name="nome" required placeholder="Nome" />
        </div>

        <div className="form-wraper">
          <input type="submit" name="acao" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default Formula;
