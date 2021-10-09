import React from "react";

class Profissional extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor=""> Resumo do currículo 
          <textarea></textarea>
        </label>
        <label htmlFor=""> Cargo
          <textarea></textarea>
        </label>
        <label htmlFor=""> Descrição do cargo
          <textarea></textarea>
        </label>
      </fieldset>
    )
  }
}

export default Profissional;
