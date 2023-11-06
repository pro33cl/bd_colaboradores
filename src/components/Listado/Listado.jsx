import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Listado = (props) => {
    var {listUser}=props;

  return (
    <>
        {
            listUser.map((element)=>{
                return (
                    <div key={element.id} className='d-flex'>
                        <div key={element.id+"nombre"}>{element.nombre}</div>
                        <div key={element.id+"correo"}>{element.correo}</div>
                        <div key={element.id+"edad"}>{element.edad}</div>
                        <div key={element.id+"cargo"}>{element.cargo}</div>
                        <div key={element.id+"telefono"}>{element.telefono}</div>
                    </div>
                );
            })
        }
    </>
  );
};

export default Listado;