import styled from "styled-components" 
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Avatar } from "@mui/material";
import Badge from '@mui/material/Badge';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useEffect, useState } from "react";



function HeaderOption ({Icon, title, avatar, logoutOfApp, show }) {

    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

    useEffect(() =>{
        console.log("i re-render")
        window.addEventListener("resize", () => {
            const width = window.innerWidth;
            setBrowserWidth(width);
            console.log("browserwidth after render >>> ", browserWidth);
        }) 
    }, [browserWidth])
  
    const user = useSelector(selectUser);       
    return (   
        <>
        {(show && browserWidth <= 340) && <OptionStyled>
            {Icon && <Icon />}
            { avatar && 
            <Badge 
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot">
                    <Avatar alt="" src="" onClick={logoutOfApp}>{user?.email[0]}</Avatar>
            </Badge>
            }
            <p>{title} {avatar && <ArrowDropDownIcon/>}</p>
        </OptionStyled>}
        {(browserWidth >= 341) && <OptionStyled>
            {Icon && <Icon />}
            { avatar && 
            <Badge 
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot">
                    <Avatar alt="" src="" onClick={logoutOfApp}>{user?.email[0]}</Avatar>
            </Badge>
            }
            <p>{title} {avatar && <ArrowDropDownIcon/>}</p>
        </OptionStyled>}
        </>
    )
}

export default HeaderOption

const OptionStyled = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    column-gap:1rem;
    > .MuiSvgIcon-root{
      color: gray;
      font-size:2.1em;
      transition:0.4s;
      :hover{
          color:black;
      }
    }
    p{
        display:flex;
        align-items:center;
        @media only screen and (max-width: 840px){
            display:none;
        }
    }
    .MuiAvatar-root{
        width:25px;
        height:25px;
    }
`