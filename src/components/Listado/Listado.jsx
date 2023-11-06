import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Listado = (props) => {
    var {listUser,}=props;

    const renderList= function(){
        let tabla;
        tabla= listUser.map((element)=>{
            return (
                <div key={element.id} className='d-flex'>
                    <div>{element.nombre}</div>
                    <div>{element.correo}</div>
                    <div>{element.edad}</div>
                    <div>{element.cargo}</div>
                    <div>{element.telefono}</div>
                </div>
            );
        }
        );
        return tabla;
    }

  return (
    <div className='p-3'>
        {renderList()}
    </div>
  );
};

export default Listado;