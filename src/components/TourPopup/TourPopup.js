import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ReactModal from 'react-modal';
import Button from '../Button/Button'
import "./TourMessage.css"





const Tourwrapper = styled.div`
width: 575px;
height:auto;
background: #FFFFFF;
box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.25);
margin: 0 auto;
outline: none!important;
border-radius: 25px;
 padding: 25px 50px;
`
const Toprhead = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 42px;
display: flex;
align-items: center;
letter-spacing: -1px;
color: #454545;
display: block;
text-align: center;
`
const Tourtext = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 21px;
color: #707070;
text-align: center;
`
const Buttonwraper = styled.div`
display: flex;
flex-direction: row;
gap: 24px;
justify-content: center;
margin: 20px;
`
const Reject = styled.div`
    // width: 715px;
    // height: 295px;
    background: #FFFFFF;
    // box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.25);
    // margin: 0 auto;
    // outline: none;
`
const Img = styled.img``
export default function TourPopup(props) {
  const [popup, setPopup] = useState(false)
  const [displayField, setDisplayField] = useState(false);
  const [isOpen, setisOpen] = useState(true);
  const handleClose = () => {
    setisOpen(false);
    props.closePopup(false);
  }

  // Production fix 29-05-2023 - start
  document.addEventListener("mouseup", function (e) {
    var container = document.querySelector("#tour-popup-modal-div");
    if (container != null) {
      if (!container.contains(e.target) && container !== e.target) {
        props.updateTourCount();
      }
    }

  });
  // Production fix 29-05-2023 - end

  return (
    <div >

      <ReactModal isOpen={isOpen} onRequestClose={() => handleClose()} ariaHideApp={false} className='modal-pop-back'>
        <Reject>
          <Tourwrapper id="tour-popup-modal-div" >
            <Toprhead>
              Something New!
            </Toprhead>
            <Tourtext>
              We have given a makeover to your workspace.
              We recommend you to take the tour or watch the demo video for a great experience.
            </Tourtext>

            <iframe width="580" height="300" src="https://www.youtube.com/embed/2Zw_O8W5JpY" title="Virtue and Culture of Ideapoke" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>

            <Buttonwraper>
              <Button text="Skip for now" variant="outlineOrange" width="125px" height="auto" font-size="18px" font-weight="600" onClick={() => { handleClose(), props.updateTourCount() }}></Button>
              <Button text="Take the tour" variant="solidOrange" width="135px" height="auto" onClick={() => { handleClose(), props.setTourItem(0, true, "next") }}></Button>
            </Buttonwraper>

          </Tourwrapper>
        </Reject>
      </ReactModal>
    </div>
  )
}
