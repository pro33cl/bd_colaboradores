import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Alert from 'react-bootstrap/Alert';


const MyAlert = (props) => {

    const {colorMessage, message}=props;
    var typeAlert='danger';
    if(colorMessage==true){
        typeAlert='success';
    }

  return (
    <>
        <div className='p-3'>
            <Alert variant={typeAlert}  style={{width:"100%", fontSize:"0.8rem"}}>{message}</Alert>
        </div>
    </>
  );
};

export default MyAlert;