import React from 'react'
import { MainLayout } from '../components/layout/Layout'
import {Button} from 'react-bootstrap';

import firebaseApp from '../backEnd/credenciales.jsx';
import { getAuth, signOut } from 'firebase/auth';
// const auth = getAuth(firebaseApp)

export const AdminPanel = () => {
  return (
    <MainLayout>
        <div>
          <Button onClick={() => signOut() }>
            cerrar sesion
          </Button>

        </div>
    </MainLayout>
    
  )
}

export default AdminPanel;
