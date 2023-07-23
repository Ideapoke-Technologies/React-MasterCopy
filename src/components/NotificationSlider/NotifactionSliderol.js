import React from 'react'
import styled from 'styled-components'
import BgImage from './images/bg-img.png'
import CloseIcon from './images/close.svg'
import ToggleSwitch from '../NotifactionProfile/ToogleSwitch'
import Filterslider from './images/filter.svg'




const FrwdPopup = styled.div`
position: relative;
margin: 0 auto;
border: 1px solid #8A8A8A;
box-shadow: 0px 58px 60px 37px rgba(69, 69, 69, 0.15);
border-radius: 12px;
background-color: #fff;
width: 760px;
height: 650px;
`
const FrwdBg = styled.img`
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    width: 180px;
    height: 650px;
    position: absolute;
    right: 0;
`
const Close = styled.img`
position: absolute;
top: 22px;
right: 26px;
`
const  Header = styled.div`

`
const Textheader = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FF7624;
padding: 0px 0 0 35px;
`
const Togglewraper = styled.div`
display: flex;
align-items: center;
flex-direction: row;
`
const Toggletext = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000;
padding: 0px 0 0 35px;
`
const Outerwraper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const Filterwrap = styled.div`

`
const Filtertext = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000;
padding: 0px 0 0 35px;

`
const Filterwraper = styled.img`
border:1px solid red;
`
export default function NotifactionSliderol() {
  return (
    <div>
      <FrwdPopup>

      <FrwdBg src={BgImage}></FrwdBg>
            <Close src={CloseIcon} />
            <Header>   

              <Outerwraper> 
                  <Textheader>
                     Notifications
                    </Textheader> 
                 <Togglewraper>
                      <Toggletext>
                           Only show unread
                      </Toggletext>            
                       <ToggleSwitch></ToggleSwitch>   
                       <Filterwrap>
                        <Filtertext>
                          Filter                       
                        </Filtertext>
                        <Filterwraper src={Filterslider}></Filterwraper> 
                    </Filterwrap>  
                </Togglewraper> 
               
              </Outerwraper>   

              
              </Header>
             
      



      </FrwdPopup>

       
    </div>
  )
}
