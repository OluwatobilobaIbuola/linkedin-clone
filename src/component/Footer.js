import React from 'react'
import styled from "styled-components"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Footer() {
  return (
    <FooterContainer>
        <FooterTop>
                <ul><li><a>About</a></li><li><a>Accessibility</a></li><li><a>Help Center</a></li></ul>
                <ul><li><a>Privacy & Terms<ArrowDropDownIcon/></a></li><li><a>Ad choice</a></li></ul>
                <ul><li><a>Advertising</a></li><li><a>Business Service<ArrowDropDownIcon/></a></li></ul>
                <ul><li><a>Get the LinkedIn app</a></li><li><a>More</a></li></ul>
        </FooterTop>
        <FooterBottom>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"/>
            <p>LinkedIn Corporation © 2022</p>
        </FooterBottom>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
    white-space:nowrap;
    display:flex;
    flex-direction:column;
    row-gap:1em;
    align-items:center;
    padding:10px 20px;
`
const FooterTop = styled.div`
    ul{ 
        display:flex;
        justify-content:space-around;
        column-gap:0.5em;
        margin-top:1em;
        li{ 
            list-style-type:none;
            a{  
                display:flex;
                align-items:center;
                transition:0.2s;
                :hover{
                    text-decoration:underline;
                    text-decoration-color:#0a66c2;
                    color:#0a66c2;
                }
            }
        }
    }
`
const FooterBottom = styled.div`
    margin-top:1em;
    display:flex;
    column-gap:1em;
    img{
        width:70px;
    }
`