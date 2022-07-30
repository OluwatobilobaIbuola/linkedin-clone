import React, { useState } from 'react'
import styled from "styled-components"
import Avatar from '@mui/material/Avatar';
import FeedInputOption from './FeedInputOption';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from "../firebase"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import moment from 'moment';




function FeedInput() {
    const [input, setInput] = useState("");
    const user = useSelector(selectUser);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const data = await addDoc(collection(db, "post"), {
            // id:user.uid,
            name:user.displayName,
            description:user.email,
            message:input,
            timestamp: serverTimestamp(),
            photoUrl:[],
        });
        console.log("Document written with ID: ", data.id);
        } catch (e) {
        console.error("Error adding document: ", e.message);
        };
        setInput("");
    };

  return (
    <FeedInputStyled>
        <InputContainer>
            <Avatar src="" alt="">{user?.email[0]}</Avatar>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={(e) => {setInput(e.target.value)}}type="text" placeholder="Start a post"/>
            </form>
        </InputContainer>
        <InputOptionsStyled>
            <FeedInputOption Icon={InsertPhotoIcon} title="Photo" color="#70B5F9"/>
            <FeedInputOption Icon={SmartDisplayIcon} title="Video" color="#E7A33E"/>
            <FeedInputOption Icon={BusinessCenterIcon} title="Job" color="#C0CBCD"/>
            <FeedInputOption Icon={ArticleIcon} title="Write article" color="#7FC15E"/>
        </InputOptionsStyled>
        <hr/>
        <Link to=""><p>What's your funny workplace memory? Share or tag someone who makes you laugh.</p></Link>
    </FeedInputStyled>
  )
}

export default FeedInput

const FeedInputStyled = styled.div`
    margin-bottom:0.5em;
    background-color:white;
    padding:10px 18px;  
    border-radius:10px;
    > a >  p{
        color:gray;
        :hover{
            text-decoration:underline;
        }
    }
`

const InputContainer = styled.div`
    .MuiAvatar-root{
        height:50px;
        width:50px;
    }
    display:flex;
    column-gap:0.5em;
    align-items:center;
    form{
        flex:1;
            input{
                border-radius:50px;
                padding:18px;
                width:100%; 
                outline-width:0;
                border:0.8px solid gray; 
                transition:0.4s;
                :hover{
                background-color:lightgray;
            }
        } 
    }
`
const InputOptionsStyled = styled.div`
    margin-top:1em;
    display:flex;
    justify-content: center;
    column-gap:1rem;
    padding:0 1em;
    align-content:center;
    @media screen and (max-width:768px){
        flex-wrap:wrap;
        padding:0 0.2em;
    }
`