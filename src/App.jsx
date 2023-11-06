import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Formulario from './components/Formulario/Formulario';
import Buscador from './components/Buscador/Buscador';
import Listado from './components/Listado/Listado';
import { useState } from 'react';
import MyAlert from './components/MyAlert/MyAlert';

function App() {
  
  const BdColaboradoresIinicial=[
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

  var bdColaboradores= new Array (BdColaboradoresIinicial);

  const lastBdId= BdColaboradoresIinicial[BdColaboradoresIinicial.length-1].id;
  const [bdId,SetBdId]=useState(lastBdId);
  const [inputForm, SetInputForm]= useState({name:"", email:"", age:"", position:"", phone:""});
  const [inputSearch, SetInputSearch]= useState("");
  const [listUser, SetListUser]= useState(BdColaboradoresIinicial);
 
  const [answer,SetAnswer]= useState(false);
  const [message,SetMessage]=useState("");
  const [firstSubmit, SetFirstSubmit]= useState(false);

  const enviarBackend= function(inputUser){
    bdColaboradores.push(inputUser);
    console.log(bdColaboradores);
  }

  return (
    <>
      <main>
        <section className='formulario'>
          <Formulario inputForm={inputForm} SetInputForm={SetInputForm} listUser={listUser} SetListUser={SetListUser} bdId={bdId} SetBdId={SetBdId} answer={answer} SetAnswer={SetAnswer} SetMessage={SetMessage} SetFirstSubmit={SetFirstSubmit} enviarBackend={enviarBackend}></Formulario>
          {firstSubmit==true? <MyAlert answer={answer} message={message}></MyAlert>: null}
        </section>
        <section className='buscador'>
          <Buscador inputSearch={inputSearch} SetInputSearch={SetInputSearch}></Buscador>
        </section>
        <section className='listado bg-warning'>
          <Listado listUser={listUser} inputSearch={inputSearch}></Listado>
          <p>listado</p>
        </section>
      </main>
    </>
  )
}

export default App
