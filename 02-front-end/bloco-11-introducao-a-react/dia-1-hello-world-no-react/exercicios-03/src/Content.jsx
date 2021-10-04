import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

  const printToContent = (content) => {
    return content.map(({ conteudo, bloco, status }) => (
      <div className="contents" key={conteudo}>
        <h3>O conteúdo é: {conteudo}</h3>
        <p>Status: {status}</p>
        <p>Bloco: {bloco}</p>
      </div>
    )
    )
  }

class Content extends React.Component {
    render() {
        return (
          <div className="allContent">
            {printToContent(conteudos)}
          </div>
        )
    }
}

export default Content;