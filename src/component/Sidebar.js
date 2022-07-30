import React from 'react'
import Avatar from '@mui/material/Avatar';
import styled from "styled-components"
import StyleIcon from '@mui/icons-material/Style';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TagIcon from '@mui/icons-material/Tag';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <SidebarRecent>
            <TagIcon/>
            <p>{topic}</p>
        </SidebarRecent>
    );

  return (
    <SidebarStyled>
        <SidebarTop>
            <SidebarProfile>
                <Image
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
                    alt=""
                />
                <Avatar src="">
                    {user?.email[0]}
                </Avatar>
                <SidebarProfileText>
                    <h2>{user?.displayName}</h2>
                    <h4>{user?.email}</h4>
                </SidebarProfileText>
            </SidebarProfile>
            <SidebarStats>
                <SidebarFlex>
                    <p>Who's viewed your profile</p>
                    <p className="sidebar__statNumber">2,543</p>
                </SidebarFlex>
                <SidebarFlex>
                    <p>Impressions of your posts</p>
                    <p className="sidebar__statNumber">2,448</p>
                </SidebarFlex>
            </SidebarStats>
            <SidebarPlan>
                <p>Achieve your goals faster</p>
                <div>
                    <StyleIcon/>
                    <strong>Upgrade my plan</strong>
                </div>
            </SidebarPlan>
            <SidebarItems>
                 <div>
                    <TurnedInIcon/>
                    <SidebarBlack>My items</SidebarBlack>
                </div>
            </SidebarItems>
        </SidebarTop>

        <SidebarBottom>
            <ItemContainer> 
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </ItemContainer>
            <ItemContainer> 
                <p>Groups</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </ItemContainer>
            <ItemContainer> 
                <p>Events</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </ItemContainer>
            <SidebarMoreInfo>
                <strong>Discover more</strong>
            </SidebarMoreInfo>
        </SidebarBottom>
    </SidebarStyled>
  )
}

export default Sidebar

const SidebarStyled = styled.div`
    width:100%;
    align-self: flex-start;
    flex:0.2;
    color:gray;
    position:sticky;
    top:80px;
    @media (max-width:992px){
        flex:0.3;
    }
    @media (max-width:768px){
        align-self: unset;
        position:unset;
        top:unset;
        flex:unset;
    }
`
const Image = styled.img`
    object-fit:cover;
    width:100%;
    height:60px;
    margin-bottom:-25px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`
const SidebarTop = styled.div`
    background-color:white;
    border:1px solid lightgray;
    border-radius:8px;
    width:100%;
`
const SidebarProfile = styled.div`
    h2{
        color:#58595B;
        :hover{
            text-decoration:underline;
        }
    }
    display:flex;
    flex-direction:column;
    align-items:center;
    .MuiAvatar-root{
        width:50px;
        height:50px;
    }
    @media (max-width:992px){
      
    }
`
const SidebarProfileText = styled.div`
    padding:10px 12px;

`
const SidebarBottom = styled.div`
    background-color:white;
    margin-top:1em;
    border-radius:8px;
    border:1px solid lightgray;
    @media (max-width:768px){
        display:none; 
    }
`
const SidebarStats = styled.div`
    border-top:1px solid lightgray;
    padding:10px 12px;
    @media (max-width:768px){
        display:none; 
    }
`
const SidebarFlex = styled.div`
    display:flex;
    justify-content:space-between;
`
const SidebarPlan = styled.div`
    padding:10px 12px;
    border-top:1px solid lightgray;
    transition:0.4s;
    div{
        display:flex;
        align-items:center;
        column-gap:0.5em;
        color:#58595B;
        > .MuiSvgIcon-root{
            color:#F2DF3A;
        }
        > strong{
            :hover{
                color:#0a66c2;
            }
        }
    }
    > p{
        margin-top:0.5em;
    }
    :hover{
        background-color:whitesmoke;
    }
    @media (max-width:768px){
        display:none; 
    }
`
const SidebarItems = styled.div`
    color:#58595B;
    padding:10px 12px;
    border-top:1px solid lightgray;
    transition:0.4s;
    div{
        display:flex;
        align-items:center;
        column-gap:0.5em;
    }
    :hover{
        background-color:whitesmoke;
    }
    @media (max-width:768px){
        display:none; 
    }
`
const SidebarBlack = styled.strong`
    color:#58595B;
`
const SidebarRecent = styled.div`
    display:flex;
    column-gap:0.5em;
    align-items:center;
    transition:0.4s;
    :hover{
        background-color:lightgray;
    }
`
const SidebarMoreInfo = styled.div`
    border-top:1px solid lightgray;
    text-align:center;
    padding:18px;
    transition:0.4s;
    :hover{
        background-color:lightgray;
    }
`
const ItemContainer = styled.div`
    padding:10px 12px
`

