import React, { forwardRef } from 'react'
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
    const user = useSelector(selectUser)
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
            <FeedInputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
            <FeedInputOption Icon={ChatIcon} title="Comment" color="gray" />
            <FeedInputOption Icon={ShareIcon} title="Share" color="gray" />
            <FeedInputOption Icon={SendIcon} title="Send" color="gray" />
        </PostButtons>
  </PostStyled>
  )
});

export default Post

const PostStyled = styled.div`
    background-color:white;
    padding:10px 18px;  
    margin-bottom: 10px;
    border-radius: 10px;
    hr{
        margin:1em 0;
    }
`
const PostHeader = styled.div`
    display:flex;
    align-items:center;
    column-gap:0.5em;
    margin-bottom: 10px;
`
const PostInfo = styled.div`
    width:100%;
    flex:1
    > p{
        font-size: 12px;
        color: gray;
    }
    > h2{
        font-size: 15px;
    }
`
const PostBody = styled.div`
    overflow-wrap:anywhere;
`
const PostButtons = styled.div`
    display: flex;
    justify-content: space-between;
    padding:0 1em;
`