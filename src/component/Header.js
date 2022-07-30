
import HeaderOption from "./HeaderOptions"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from '@mui/icons-material/Apps';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from '../firebase';




function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <HeaderContainer>
    <HeaderStyled>
        <HeaderLeft>
          <LinkedInIcon/>
          <SearchStyled>
            <SearchIcon />
            <input placeholder="Search" type="text" />
          </SearchStyled>
        </HeaderLeft>
        <HeaderRight>
          <HeaderRightOne>
            <HeaderOption show Icon={HomeIcon} title="Home" />
            <HeaderOption show Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption show Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar={true} logoutOfApp={logoutOfApp} title="me"/>
          </HeaderRightOne>
          <HeaderRightTwo>
            <HeaderOption Icon={AppsIcon} title="Work" />
            <HeaderOption Icon={SlideshowIcon} title="Learning" />
          </HeaderRightTwo>
        </HeaderRight>
    </HeaderStyled>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  background-color:white;
  position:sticky;
  top:0;
  z-index:999;
`
const HeaderStyled = styled.div`
  display: flex;
  align-items:center;
  width:90%;
  margin-inline:auto;
  color:gray;
  white-space:nowrap;
  @media screen and (max-width:992px){
    width:95%;
  }

`

const SearchStyled = styled.div`
  display: flex;
  height:42px;
  align-items:center;
  padding:15px;
  border-radius:5px;
  background-color:#eef3f8;
  @media (max-width:992px){
    width:fit-content;
  }

  input{
    outline:none;
    border:none;
    padding:5px;
    background-color:transparent;
    @media (max-width:992px){
      display:none; 
    }
  }
`

const HeaderRight = styled.div`
  display: flex;
  margin-left:auto;
`

const HeaderRightOne = styled.div`
  padding:5px 20px;
  display: flex;
  column-gap:2em;
  @media screen and (max-width:768px){
    column-gap:1rem;
  }
`
const HeaderRightTwo = styled.div`  
  display: flex;
  column-gap:2em;
  padding:5px 20px;
  border-left:1px solid gray;
  @media screen and (max-width:768px){
    column-gap:1rem;
    display:none;
  }
`
const HeaderLeft = styled.div`
  display: flex;
  align-items:center;
  padding:5px 0;
  > .MuiSvgIcon-root{
    color: #0072b1;
    font-size:3rem;
    margin-right:0.1em;
  }
`