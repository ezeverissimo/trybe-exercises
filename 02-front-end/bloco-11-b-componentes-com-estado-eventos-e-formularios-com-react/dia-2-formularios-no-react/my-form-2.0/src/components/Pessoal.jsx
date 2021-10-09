import React from "react";
import LabelsPessoal from "./LabelsPessoal";
import PessoalStates from "./PessolStates";

class Pessoal extends React.Component {
  render() {
    return (
      <fieldset>
        <LabelsPessoal />
        <PessoalStates />
      </fieldset>
    )
  }
}

export default Pessoal;
