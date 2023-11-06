import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Formulario from './components/Formulario/Formulario';
import Buscador from './components/Buscador/Buscador';
import Listado from './components/Listado/Listado';
import { useState } from 'react';

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

  const lastBdId= BdColaboradoresIinicial[BdColaboradoresIinicial.length-1].id;
  const [bdId,SetBdId]=useState(lastBdId);
  const [inputForm, SetInputForm]= useState({name:"", email:"", age:"", position:"", phone:""});
  const [inputSearch, SetInputSearch]= useState("");
  const [listUser, SetListUser]= useState(BdColaboradoresIinicial);

  return (
    <>
      <main>
        <section className='formulario'>
          <Formulario inputForm={inputForm} SetInputForm={SetInputForm} listUser={listUser} SetListUser={SetListUser} bdId={bdId} SetBdId={SetBdId}></Formulario>
          <p>formulario</p>
        </section>
        <section className='buscador bg-success'>
          <Buscador SetInputSearch={SetInputSearch}></Buscador>
          <p>buscador</p>
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
