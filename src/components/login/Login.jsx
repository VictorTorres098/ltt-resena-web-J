import React, {useState} from 'react';
import styled from 'styled-components';
import { Stack, Container, Form, Button } from 'react-bootstrap';

import firebaseApp from '../../backEnd/credenciales';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { async } from '@firebase/util';


const auth = getAuth(firebaseApp);


export const Login = () => {

  async function submitHandler(e){
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const pass = e.target.formBasicPassword.value;
    /* SOLO SE IMPLEMENTO UN INICIO DE SESION NO SE REQUIERE USERS MAS QUE LOS ADMINS */
    console.log(correo, pass);
    signInWithEmailAndPassword(auth, correo, pass);

  } 
  return (
    <>
        <Container>
          <h1>LOGIN</h1>
            <Stack gap={3}>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                     </Form.Text>
                     </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
        
                    <ButtonConteiner>
                      <Button className='buttonStyle' variant="primary" type="submit">
                        Submit
                      </Button>

                      <Button className='buttonStyle' variant="primary" type="submit">
                        cancel
                      </Button>

                    </ButtonConteiner>
                    
                </Form>

            </Stack>    
        </Container>
    </>
  )
}
/* WORK: bachadmintest@dev.com PASS: 9f9rMI */


export default Login;

const ButtonConteiner = styled.div`
  display: flex;
  .buttonStyle{
    margin-right: 15px;
  }
  
`;
