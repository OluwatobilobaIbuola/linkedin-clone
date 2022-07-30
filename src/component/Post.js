import React, { forwardRef, useEffect, useState } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import FeedInputOption from './FeedInputOption';
import { Avatar } from '@mui/material';
import styled from 'styled-components';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const Post = forwardRef(({name, description, message}, ref) => {
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
    const user = useSelector(selectUser);

    useEffect(() =>{
        console.log("i re-render")
        window.addEventListener("resize", () => {
            const width = window.innerWidth;
            setBrowserWidth(width);
            console.log("browserwidth after render >>> ", browserWidth);
        }) 
    }, [browserWidth])

  return (
    <PostStyled ref={ref}>
        <PostHeader>
            <Avatar src="">{user?.email[0]}</Avatar>
            <PostInfo>
                <h2>{name}</h2>
                <p>{description}</p>
            </PostInfo>
        </PostHeader>

        <PostBody>
            <p>{message}</p>
        </PostBody>
        <hr/>
        <PostButtons>
            <FeedInputOption hideElement browserWidth={browserWidth} Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
            <FeedInputOption hideElement browserWidth={browserWidth} Icon={ChatIcon} title="Comment" color="gray" />
            <FeedInputOption hideElement browserWidth={browserWidth} Icon={ShareIcon} title="Share" color="gray" />
            <FeedInputOption hideElement browserWidth={browserWidth} Icon={SendIcon} title="Send" color="gray" />
        </PostButtons>
  </PostStyled>
  )
});

export default Post

const PostStyled = styled.div`
    width:100%;
    background-color:white;
    padding:0.5rem 1rem;
    margin-bottom: 10px;
    border-radius: 10px;
    hr{
        margin:1em 0;
    }
`
const PostHeader = styled.div`
    display:flex;
    align-items:center;
    column-gap:0.5rem;
    margin-bottom: 0.5rem;
`
const PostInfo = styled.div`
    width:100%;
    flex:1
    > p{
        font-size: 0.8rempx;
        color: gray;
    }
    > h2{
        font-size: 1rem;
    }
`
const PostBody = styled.div`
    overflow-wrap:anywhere;
`
const PostButtons = styled.div`
    display: flex;
    justify-content: space-around;
    padding:0 0.5rem;
`