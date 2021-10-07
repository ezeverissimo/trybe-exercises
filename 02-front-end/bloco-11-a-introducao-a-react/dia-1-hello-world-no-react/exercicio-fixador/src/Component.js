import React from 'react';

const name = <h1>Ezequiel Verissimo</h1>;
const description = <p>Legal e jovial</p>;
const container = <div>{name}{description}</div>;

class nameAndDescription extends React.Component {
    render() {
        return container;
    }
}

export default nameAndDescription