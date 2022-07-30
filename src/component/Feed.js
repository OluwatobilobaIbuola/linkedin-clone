import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import FeedInput from "./FeedInput";
import Post from './Post';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"; 
import {db} from "../firebase";
import FlipMove from 'react-flip-move';

function Feed() {
const [posts, setPosts] = useState([])

useEffect(() => {
    const q = query(collection(db, "post"), orderBy("timestamp", "desc"));
    onSnapshot( q, querySnapshot => {
        if (q) {
            setPosts(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        } else {
            setPosts([])
        } 
    })
}, [])



  return (
    <FeedStyled>
       <FeedInput/>
        <FlipMove>
        {posts && posts.map((postItems, index) => {
            return(
                <Post
                key={index}
                name={postItems.data.name}
                description={postItems.data.description}
                message={postItems.data.message}
                />
            )
        })
        }
        </FlipMove>
    </FeedStyled>
  )
}

export default Feed

const FeedStyled = styled.div`
    width:100%;
    white-space:nowrap;
    flex:0.5;
    @media (max-width:992px){
        flex:0.7;

    }
    @media (max-width:768px){
        flex:1;
        white-space:normal;
    }
`