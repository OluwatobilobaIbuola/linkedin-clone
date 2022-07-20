import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { selectUser } from '../features/userSlice';
import Footer from './Footer';

function Widget() {
  const user = useSelector(selectUser);

  return (
  
      <WidgetStyled>
        <WidgetTop>
          <p>Get the latest jobs and industry news</p>
          <ImageContainer>
            <Avatar src={user?.profileUrl || ""}>{user?.email[0]}</Avatar>
            <img src="https://media-exp2.licdn.com/dms/image/C4D0BAQEBGQ5VIivQ3g/company-logo_100_100/0/1604673005039?e=1666224000&v=beta&t=37tI4Dyd1V_h1IuFJRj0D8Kx_A-8-Y2jDwk8YiGUYCs" alt="" />
          </ImageContainer>
          <p><span>{user?.displayName}</span>, keep up with the latest insights from Unlimited news</p>
          <button></button>
        </WidgetTop>
        <Footer/>
      </WidgetStyled>
  )
}

export default Widget

const WidgetStyled = styled.div`
    flex:0.3;
    color:gray; 
    align-self: flex-start;
    position:sticky;
    top:80px;
`
const WidgetTop = styled.div`
    height: fit-content;
    background-color:white;
    text-align: center;
    padding:10px 15px;
    border:1px solid lightgray;
    border-radius: 8px;
    P{
      span{
        color:#58595B;
      }
    }
`
const ImageContainer = styled.div`
  margin:1em 0;
  display:flex;
  align-items:center;
  justify-content:center;
  column-gap:1em;
  padding:15px 20px;
  img{
    width:50px;
  }
  .MuiAvatar-root{
    width:50px;
    height:50px;
  }
`
