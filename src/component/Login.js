import { useDispatch } from 'react-redux';
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { login } from '../features/userSlice';
import styled from 'styled-components';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';


const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login() {
  const dispatch = useDispatch();
  const [isRegistered, setIsRegistered] = useState(true)

  const pointerRef = useRef();

  const [errMsg, setErrMsg] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);


  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    pointerRef.current.focus()
  }, [pointerRef]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    if(password.length > 4){
      setValidMatch(password === matchPassword);
    }
  }, [password, matchPassword]);


  const loginToApp = async (e) => {
    e.preventDefault();

    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
    }
    try{
      const userAuth = await signInWithEmailAndPassword(auth, email, password);
      const user =  userAuth.user;
        // Signed in  
      console.log("signed-in user>>>> ", user);
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName
        })
      );
    }
    catch (error) {
      const errorCode = error.code;
      console.log(errorCode)
      const errorMessage = error.message;
      console.log(errorMessage);
      if (error?.message === "Firebase: Error (auth/wrong-password).") {
        setErrMsg("Wrong password");
      } else if(error?.message === "Firebase: Error (auth/user-not-found)."){
        setErrMsg("There was a problem. We cannot find an account with that email address");
      } else if(error?.message === "Firebase: Error (auth/network-request-failed)."){
        setErrMsg("No response, please try again")
      }
    }
  }

  const register = async (e) => {
    e.preventDefault();

    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    const v3 = PWD_REGEX.test(matchPassword);
    if (!v1 || !v2 || !v3) {
        setErrMsg("Invalid Entry or Empty Field");
        return;
    }
    
    try{
      const userAuth = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName:name,
      });
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
        })
      );
      // Registered and Signed in \
      const user = userAuth.user;
      console.log("registered user>>>>>", user);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setEmail("");
      setName("")
      setPassword("");
      setMatchPassword("");
    }
    catch (error) {
      console.log(error);
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      if (error?.message === "Firebase: Error (auth/email-already-in-use).") {
        setErrMsg("Email address already in use. You indicated you're a new customer, but an account already exists with the email address.");
      } else if(error?.message === "Firebase: Error (auth/network-request-failed)."){
        setErrMsg("No response, please try again")
      }
    };
  }


  return (
    
    <LoginContainer>
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />
      <FormContainer>
      {isRegistered? <h2>Sign In</h2> : <h2>Register</h2>}
      <p>Stay updated on your professional world</p>
      {errMsg && <ErrMsg><PriorityHighIcon/>{errMsg}</ErrMsg>}
        <form>
        {
          isRegistered ? (
          <>
            <input
              ref={pointerRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            { (passwordFocus && !validPassword) && 
            <ErrMsg id="pwdnote">
              <PriorityHighIcon/>
              Must include atleast uppercase and lowercase letters, a number and a special character.<br />
            </ErrMsg>}
            <button type="submit" onClick={loginToApp}>
              Sign In
            </button>
          </>
          ) : (
          <>
            <input
              ref={pointerRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              type="text"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            { (passwordFocus && !validPassword) && 
            <ErrMsg id="pwdnote">
              <PriorityHighIcon/>
              Must include atleast uppercase and lowercase letters, a number and a special character.<br />
            </ErrMsg>}
            <input
              value={matchPassword}
              onChange={(e) => setMatchPassword(e.target.value)}
              placeholder="Confirm Password"
              type="password"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            { (matchFocus && !validMatch) && 
            <ErrMsg id="pwdnote">
              <PriorityHighIcon/>
              Must include atleast uppercase and lowercase letters, a number and a special character.<br />
            </ErrMsg>}
            <button type="submit" onClick={register}>
              Register
            </button>
          </>)
        }           
        </form>
          {
            !isRegistered ? (
            <p>
              Already a member?{" "}
              <RegButton onClick={() => {setIsRegistered(true); setErrMsg("")}}>
                SignIn 
              </RegButton>
            </p>
            ): (
            <p>
              Not a member?{" "}
              <RegButton onClick={() => {setIsRegistered(false); setErrMsg("")}}>
                Register Now
              </RegButton>
            </p>)
          }
      </FormContainer>
     
    </LoginContainer>
  );
}

export default Login

const FormContainer = styled.div`
  font-size:16px;
  display:flex;
  flex-direction:column;
  width:22em;
  margin-inline:auto;
  padding:15px;
  border-radius:10px;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  > form{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  row-gap:1.5em;
  width:100%;
  > input{
    padding:20px;
    border-radius:4px;
    width:100%;
    border:1px solid black;
    outline:none;
    :focus{
      border:2px solid #0a66c2;
    }
  }
  > button{
    width:100%;
    border-radius:50px;
    padding:20px;
    margin-bottom:1em;
    outline:none;
    border:none;
    background-color:#0a66c2;
    color:white;
    font-size:1.1rem;
    transition:0.1s;
    :hover{
      background-color:#094c90;
    }
  }
  }
  > p{
    margin: 1em 0;
  }
`

const LoginContainer =styled.div`
  background-color:white;
  height:100vh;
  img{
    max-height:150px;
    max-width:150px;
    margin-top:1em;
    margin-left:1em;
  }
`

const RegButton = styled.span`
  cursor:pointer;
  transition:0.2s;
  padding:10px;
  :hover{
    background-color:whitesmoke;
    border-radius:8px;
    text-decoration:underline;
  }
`

const ErrMsg = styled.div`
  padding:5px;
  background-color:whitesmoke;
  color:red;
  border-radius:10px;
  margin:0 0 0.5em ;
  display:flex;
  align-items:center;
  font-size:0.7rem;
  > .MuiSvgIcon-root{
    margin-right:0.2em;
    width:15px;
  }
`