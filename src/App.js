import React, { useEffect } from 'react';
import Header from "./component/Header"
import { GlobalStyled } from './component/styled/GlobalStyle';
import styled from "styled-components"
import Sidebar from './component/Sidebar';
import Feed from "./component/Feed"
import { BrowserRouter } from "react-router-dom";
import Widget from './component/Widget';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './component/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect( () => {
    // will only run once when the app component loads...

      onAuthStateChanged(auth, (user) => {
      console.log("THE USER IS >>> ", user);

      if (user) {
        // the user just logged in / the user was logged in
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      } else {
        // the user is logged out
        dispatch(logout());
      }
    });
  }, [])

  return (
    <BrowserRouter>
      <>
        <GlobalStyled/>
        {!user? (
          <Login/>
         ) : (
          <>
            <Header/>
            <AppBody>
              <Sidebar/>
              <Feed/>
              <Widget/>
            </AppBody>
          </>
        )}
        
      </>
    </BrowserRouter>
    
  );
}

export default App;

const AppBody = styled.div`
  display:flex;
  padding-top:2em;
  column-gap:1.5em;
  width:min(95%, 88em);
  margin-inline:auto;
`
