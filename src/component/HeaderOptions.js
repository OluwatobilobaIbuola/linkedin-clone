import styled from "styled-components" 
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Avatar } from "@mui/material";
import Badge from '@mui/material/Badge';



function HeaderOption ({Icon, title, avatar, logoutOfApp }) {
    const user = useSelector(selectUser);       
    return (
        

        <OptionStyled>
            {Icon && <Icon />}
            { avatar && 
            <Badge 
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot">
                    <Avatar alt="" src="" onClick={logoutOfApp}>{user?.email[0]}</Avatar>
            </Badge>
            }
            <p>{title}</p>
        </OptionStyled> 
    )
}

export default HeaderOption

const OptionStyled = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    column-gap:1em;
    > .MuiSvgIcon-root{
      color: gray;
      font-size:2.1em;
      transition:0.4s;
      :hover{
          color:black;
      }
    }
`