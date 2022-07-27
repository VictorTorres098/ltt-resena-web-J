import React from 'react';
import { Auth, onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

const AuthProvide = () => {
  return (
    <div>AuthContext</div>
  )
}
