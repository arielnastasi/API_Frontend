import React, {useState} from 'react';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';




const useStyles=makeStyles((theme)=>({
  modal:{
    position:'absolute',
    width:400,
    backgroundColor:'white',
    border:'2px solid #000',
    boxShadow: theme.shadows[5],
    padding:"16px 32px 24px",
    top: '50%',
    left:'50%',
    transform:'translate(-50%,-50%)'

  },
  textfield:{
    width: '100%'
  },
  button:{
    textAlign:'center'
  }
}))

function Pop() {
  const styles=useStyles();

  const[modal,setModal]=useState(false);

  const abrirCerrarModal =()=>{
    setModal(!modal);
  }

  const body=(
    <div className={styles.modal}>
      <div align="center">
        <h2>Registro de Usuario</h2>
      </div>
      <TextField label="Nombre" className={styles.textfield} name="nombre"></TextField>
      <br></br>
      <TextField label="Apellido" className={styles.textfield} name="apellido"></TextField>
      <br></br>
      <TextField label="Email" type="email" className={styles.textfield} name="email"></TextField>
      <br></br>
      <TextField label="Nombre de Usuario" className={styles.textfield} name="nombreUser"></TextField>
      <br></br>
      <TextField label="Contraseña" type="password" className={styles.textfield} name="password"></TextField>
      <br></br>
      <TextField label="Confirmar Contraseña" type="password" className={styles.textfield} name="password"></TextField>
      <div align="right">
      <br></br>
      <Button color="primary">Enviar</Button>
      <Button color="secondary" onClick={()=>abrirCerrarModal()}>Cancelar</Button>
      </div>
    </div>
  )
  return (
    <div>
      <Button
                    className="mb-2"
                    onClick={()=>abrirCerrarModal()}
					variant="contained"
					color="primary"
					startIcon={<PersonAddIcon />}>
					Nuevo usuario
				</Button>
      
      <Modal
      open={modal}
      onClose={abrirCerrarModal}>
        {body}
      </Modal>
      
    </div>
      
  );
}

export default Pop;
