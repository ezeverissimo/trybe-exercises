import React from "react";

class LabelsPessoal extends React.Component {
  render() {
    return (
      <>
        <label>
          Nome:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          CPF:
          <input type="text" />
        </label>
        <label>
          Endereço:
          <input type="text" />
        </label>
        <label>
          Cidade:
          <input type="text" />
        </label>
      </>
    )
  }
}

export default LabelsPessoal;