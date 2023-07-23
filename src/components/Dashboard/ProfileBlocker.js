import React from 'react'
import styled from 'styled-components'
import Gif from "./images/animation_640_lj8fw28l.gif"

const BlockWrap = styled.div`
    background-color: #ffffffd1;
    position: fixed;
    right: 0;
    top: 0;
    transition: background-color .5s;
    width: 100vw;
    height: 100vh;
    z-index: 10;
`
const Img = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 43%;
`


export default function ProfileBlocker(props) {
  return (
  
 props.updateLoader &&  <div>
             <BlockWrap>
            <Img src={Gif} style={{width: "200px"}} />
        </BlockWrap>

    </div>
  
  )
}
