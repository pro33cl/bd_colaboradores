import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Formulario from './components/Formulario/Formulario';
import Buscador from './components/Buscador/Buscador';
import Listado from './components/Listado/Listado';
import { useState } from 'react';
import MyAlert from './components/MyAlert/MyAlert';

function App() {
  
  const BdColaboradoresImportada=[
    {
      id:"1",
      nombre:"Juan Soto",
      correo:"juans@colaborador.com",
      edad:"23",
      cargo:"Desarrollador FrontEnd",
      telefono: "99887766"
    },
    {
      id:"2",
      nombre:"Lucas Pailamilla",
      correo:"lucasps@colaborador.com",
      edad:"31",
      cargo:"Desarrollador Backend",
      telefono: "88779955"
    },
    {
      id:"3",
      nombre:"Diego Riquelme",
      correo:"diegor@colaborador.com",
      edad:"28",
      cargo:"Ingeniero DevOps",
      telefono: "99226644"
    },
  ];

  
  const formatearBd=function(bdInical){
    let bdFormateada= [];
    bdInical.forEach(element => {
      bdFormateada.push({id:Number(element.id), nombre:element.nombre, correo:element.correo, edad:Number(element.edad), cargo:element.cargo, telefono:element.telefono, visibility:true});
    });
    return bdFormateada;
  }

  var BdColaboradoresInicial= new Array(BdColaboradoresImportada.length);
  BdColaboradoresInicial=formatearBd(BdColaboradoresImportada);
  var bdColaboradores= new Array (BdColaboradoresInicial);

  const lastBdId= Number(BdColaboradoresInicial[BdColaboradoresInicial.length-1].id);
  console.log(lastBdId);
  console.log(lastBdId+1);
  const [bdId,SetBdId]=useState(lastBdId);
  const [inputForm, SetInputForm]= useState({name:"", email:"", age:"", position:"", phone:""});
  const [inputSearch, SetInputSearch]= useState("");
  const [listUser, SetListUser]= useState(BdColaboradoresInicial);

  console.log(listUser);
 
  const [answer,SetAnswer]= useState(0);
  const [message,SetMessage]=useState("");
  const [firstSubmit, SetFirstSubmit]= useState(false);

  
  const enviarBackend= function(inputUser){
    bdColaboradores.push(inputUser);
    console.log(bdColaboradores);
  }

  const pushInputForm= function(){
    if(answer==1){
      let inputUser = {id:SetBdId(bdId+1), nombre:inputForm.name, correo:inputForm.email, edad:inputForm.age,cargo:inputForm.position,telefono:inputForm.phone, visibility:true};
      SetListUser([...listUser,inputUser]);
      enviarBackend(inputUser);
    }  
  }

  

  return (
    <>
      <main>
        <section className='formulario'>
          <Formulario inputForm={inputForm} SetInputForm={SetInputForm} SetAnswer={SetAnswer} pushInputForm={pushInputForm} SetMessage={SetMessage} SetFirstSubmit={SetFirstSubmit}></Formulario>
          {firstSubmit==true? <MyAlert answer={answer} message={message}></MyAlert>: null}
        </section>
        <section className='buscador'>
          <Buscador inputSearch={inputSearch} SetInputSearch={SetInputSearch}></Buscador>
        </section>
        <section className='listado bg-warning'>
          <Listado listUser={listUser}></Listado>
        </section>
      </main>
    </>
  )
}

export default App
