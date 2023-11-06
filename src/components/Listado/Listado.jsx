import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const Listado = (props) => {
    const {listUser, inputSearch}=props;
    console.log(listUser);
    console.log(inputSearch);
    var listShowed= listUser.filter((element)=>(element.nombre).toLowerCase().includes(inputSearch.toLowerCase()) || (element.correo).toLowerCase().includes(inputSearch.toLowerCase()) || (element.edad).toString().includes(inputSearch) || (element.cargo).toLowerCase().includes(inputSearch.toLowerCase()) || element.telefono.includes(inputSearch));
    console.log(listShowed);
  return (
    <>
        <Table responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>
                {
                    listShowed.map((element)=>{
                        return (
                                <tr key={element.id}>
                                    <td key={element.id+"nombre"}>{element.nombre}</td>
                                    <td key={element.id+"correo"}>{element.correo}</td>
                                    <td key={element.id+"edad"}>{element.edad}</td>
                                    <td key={element.id+"cargo"}>{element.cargo}</td>
                                    <td key={element.id+"telefono"}>{element.telefono}</td>
                                </tr>
                                );
                                })
                }
            </tbody>
        </Table>
    </>
  );
};

export default Listado;