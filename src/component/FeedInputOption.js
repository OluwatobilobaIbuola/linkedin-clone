import React from 'react'
import styled from "styled-components"

function FeedInputOption({Icon, title, color}) {
  return (
    <InputOption>
        <Icon style={{color:color}}/>
        <div>
            {title}
        </div>

    </InputOption>
  )
}

export default FeedInputOption

const InputOption = styled.div`
padding:0.8rem 1rem;
display:flex;
column-gap:0.5em;
align-items:center;
transition:0.4s;
    .MuiSvgIcon-root{
        height:30px;
        width:30px;
    }

:hover{
    background-color:#f3f2ef;
    border-radius:4px;
}
`
