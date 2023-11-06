import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = (props) => {

    const {inputForm, SetInputForm, handlerForm}= props; 

    const handlerOnChange = function (e){
        SetInputForm({...inputForm, [e.target.name]:e.target.value});
    }
    
    function handlerOnSubmit(e){
        e.preventDefault();
        handlerForm();
    }

  return (
    <div style={{width:"calc(100%-3rem)", padding:"1rem"}}>
        <h1 className='fs-2'>Agregar Colaborador</h1>
        <Form onSubmit={handlerOnSubmit}>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Nombre del colaborador" name='name' id='name' value={inputForm.name} onChange={handlerOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email del colaborador" name='email' id='email' value={inputForm.email} onChange={handlerOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Edad del colaborador" name='age' id='age' value={inputForm.age} onChange={handlerOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Cargo del colaborador" name='position' id='position' value={inputForm.position} onChange={handlerOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Telefono del colaborador" name='phone' id='phone' value={inputForm.phone} onChange={handlerOnChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" style={{width:"100%"}}>Agregar colaborador</Button>
        </Form>
    </div>
  );
};

export default Formulario;