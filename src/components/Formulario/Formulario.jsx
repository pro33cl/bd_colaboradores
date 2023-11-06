import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = (props) => {

    const {inputForm, SetInputForm, listUser , SetListUser, bdId, SetBdId, answer, SetAnswer, SetMessage, SetFirstSubmit, enviarBackend }= props; 

    const handlerOnChange = function (e){
        SetInputForm({...inputForm, [e.target.name]:e.target.value});
    }
    
    const handlerOnSubmit = function (e){
        e.preventDefault();
        SetFirstSubmit(true);
        inputVerification(inputForm);
        if(answer==true){
            let inputUser = {id:SetBdId(bdId+1), nombre:inputForm.name, correo:inputForm.email, edad:inputForm.age,cargo:inputForm.position,telefono:inputForm.phone};
            SetListUser([...listUser,inputUser]);
            enviarBackend(inputUser);
        }   
    }

    const inputVerification = function (inputForm){
        SetAnswer(true);
        SetMessage("prueba");
    }

  return (
    <div className='p-3' style={{width:"100%"}}>
        <h1 className='fs-2'>Agregar Colaborador</h1>
        <Form onSubmit={handlerOnSubmit}>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Nombre del colaborador" name='name' value={inputForm.name} onChange={handlerOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email del colaborador" name='email' value={inputForm.email} onChange={handlerOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Edad del colaborador" name='age' value={inputForm.age} onChange={handlerOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Cargo del colaborador" name='position' value={inputForm.position} onChange={handlerOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Telefono del colaborador" name='phone' value={inputForm.phone} onChange={handlerOnChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" style={{width:"100%"}}>Agregar colaborador</Button>
        </Form>
    </div>
  );
};

export default Formulario;