import React, { useState } from 'react'
import styled from 'styled-components'
import Add from "./images/add-orange.svg"
import AddProjectPopup from './AddProjectPopup'

const CardWrap = styled.div`
    border-radius: 10px;
    border: 1px solid #d1d1d1;
    width: 280px;
    margin: 20px 0px 0px;
    position: relative;
    padding: 20px 12px 80px;
    height: 180px;
    box-shadow: rgba(0, 0, 0, 0.16) 2px 2px 11px 0px;
    cursor: pointer;
`
const Band = styled.div`
    background-color: #454545;
    height: 45px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 0 0 10px 10px;
`
const AImg = styled.img``

const AddImg = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFDAD2;
    cursor: pointer;
`
const Wraped = styled.div`
    margin: 0 auto;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`
const AddTxt = styled.div`
    color: #F2651B;
    text-align: center;
    font-size: 10px;
    font-family: 'Poppins';
    line-height: 6.837px;
`

export default function AddDesign() {
    const[popup,setPopup]=useState(false)

  return (
    <div>
        <CardWrap onClick={()=>setPopup(true)}>
            <Wraped>
                <AddImg>
                    <AImg src={Add} />
                </AddImg>
                <AddTxt>Add Project</AddTxt>
            </Wraped>
            <Band></Band>
        </CardWrap>
        {popup && <AddProjectPopup closePopup={setPopup}/>}
    </div>
  )
}
