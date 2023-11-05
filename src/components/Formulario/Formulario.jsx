import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import MyAlert from '../MyAlert/MyAlert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = (props) => {

    const {inputForm, SetInputForm, listUser , SetListUser, bdId, SetBdId }= props; 
    var answer=false;
    var message="";

   
    const handlerOnChange = function (e){
        SetInputForm({...inputForm, [e.target.name]:e.target.value});
    }
    
    const handlerOnSubmit = function (e){
        e.preventDefault();
        (answer,message)= inputVerification(inputForm);
        if(answer==true){
            let inputUser = {id:SetBdId(bdId+1), nombre:inputForm.name, correo:inputForm.email, edad:inputForm.age,cargo:inputForm.position,telefono:inputForm.phone};
            SetListUser([...listUser,inputUser]);
        }   
    }

    const inputVerification = function (inputForm){
        

        return answer,message;
    }


  return (
    <div>
        <h1>Agregar Colaborador</h1>
        <Form onSubmit={handlerOnSubmit}>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Nombre del Colaborador" name='name' value={inputForm.name} onChange={handlerOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email del Colaborador" name='email' value={inputForm.email} onChange={handlerOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Edad del Colaborador" name='age' value={inputForm.age} onChange={handlerOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Cargo del Colaborador" name='position' value={inputForm.position} onChange={handlerOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Telefono del Colaborador" name='phone' value={inputForm.phone} onChange={handlerOnChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">Agregar Colaborador</Button>
        </Form>
        <MyAlert answer={answer} message={message}></MyAlert>
    </div>
  );
};

export default Formulario;