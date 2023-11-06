import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Alert from 'react-bootstrap/Alert';


const MyAlert = (props) => {

    const {answer, message}=props;
    var typeAlert='danger';
    if(answer==true){
        typeAlert='success';
    }

  return (
    <>
        <Alert variant={typeAlert} className='mt-3' style={{width:"100%", fontSize:"0.8rem"}}>{message}</Alert>
    </>
  );
};

export default MyAlert;