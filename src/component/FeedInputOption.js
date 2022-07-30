import React, { useEffect, useState } from 'react'
import styled from "styled-components"

function FeedInputOption({Icon, title, color, hideElement, browserWidth}) {

  return (
    <InputOption>
        <Icon style={{color:color}}/>
        {(hideElement && browserWidth > 768) && <div>
            {title}
        </div>}
        {(!hideElement ) && <div>
            {title}
        </div>}

    </InputOption>
  )
}

export default FeedInputOption

const InputOption = styled.div`
padding:0.8rem 1rem;
display:flex;
justify-content:space-between;
align-items:center;
transition:0.4s;
    .MuiSvgIcon-root{
        height:1.5rem;
        width:1.5rem;
    }

:hover{
    background-color:#f3f2ef;
    border-radius:4px;
}
@media screen and (max-width:768px){
    padding:0.8rem 0.2rem;
}
`
