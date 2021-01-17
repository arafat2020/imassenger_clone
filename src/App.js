import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Imassage from './component/Imassage';
import Login from './component/Login';
import { selectUSer, login, logut } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUSer);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authuser => {
      if (authuser) {
        dispatch(login({
          uid: authuser.uid,
          photo: authuser.photoURL,
          email: authuser.email,
          displayname:authuser.displayName
        }))
      } else {
        dispatch(logut())
      }
    })
  },[dispatch])

  return (
    <div className="app">
      {user ? <Imassage /> : <Login/>}
    </div>
  );
}

export default App;
