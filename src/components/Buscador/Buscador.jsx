import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form from 'react-bootstrap/Form';

const Buscador = (props) => {
    const {inputSearch, SetInputSearch}=props;

    const handlerOnChange= function (e){
        SetInputSearch(e.target.value);
    }

  return (
    <div style={{width:"calc(100%-3rem)", padding:"1rem"}}>
        <Form.Control type='text' placeholder='Busca un colaborador' name='search' value={inputSearch} onChange={handlerOnChange}></Form.Control>
    </div>
  );
};

export default Buscador;