import React from 'react';
export const ResultadoComponent = ({atributo,nombre}) => {

  return (
        <p>
          <label>{nombre} </label>
          {atributo}
        </p>
  );
};
