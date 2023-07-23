import React from 'react'
import styled from 'styled-components'
import './Loader.css'


const loader = styled.div`
border: 1px solid #ddd;
padding: 10px 20px 20px;
box-shadow: 0px 2px 5px #ddd;
border-radius: 10px;
margin-bottom: 20px;
animation: placeHolderShimmer 1s linear infinite forwards;

      
   
`

const AnimatedBackground = styled.div`
width: 168px;
height: 180px;
margin: 14px 26px;
`
const AnimatedBack = styled.div`
padding: 2px 24px 8px;
/* border-radius: 5px; */
margin-bottom: 20px;
width: 124px;
height: 15px;
position: relative;
top: 10px;
left: 35px;
border-radius: 0;
   
`
const AnimatedBack2 = styled.div`
  padding: 3px 24px 8px;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 110px;
  height: 15px;
  position: relative;
  top: -15px;
`
const AnimatedBack3 = styled.div`
  padding: 3px 24px 8px;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 50px;
  height: 15px;
  position: relative;
  top: -21px;
`
const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`
const Boxloader = styled.div`
border-radius: 5px 5px 10px 10px;
box-shadow: rgb(204, 204, 204) 0px 0px 5px;
width: 221px;
margin: 0px 0px 0px 13px;
position: relative;
padding: 12px;
height: 260px;
`
const Subloader = styled.div`
background: #D9D9D9;
// background: rgb(69, 69, 69);
border-radius: 0px 0px 10px 10px;
padding: 0px;
position: absolute;
display: block;
width: 246px;
bottom: -1px;
left: 0px;
`
export default function CardLoader() {
  return (
    <div>
   <div>
      <Wrapper>
        <div>
            <Boxloader>
            <AnimatedBackground className='loader'></AnimatedBackground>
            <Subloader>
            <AnimatedBack className='loader'></AnimatedBack>
            </Subloader>
           
            </Boxloader>
        
        
          {/* <AnimatedBack2 className='loader'></AnimatedBack2>
          <AnimatedBack3 className='loader'></AnimatedBack3>  */}
        </div>
      </Wrapper>
    </div>
    </div>
  )
}
