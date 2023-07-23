import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { useTranslation } from "react-i18next";
import AfterAlertSuccess from './AfterAlertSuccess';

const Topwraper = styled.div`
`
const Heading = styled.div``

const Text = styled.p`
color: ${(props) => props.color};
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 18px;
`

const Subtext = styled.p`
color: ${(props) => props.color};
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
`
const SubtextInput = styled.div`

`

const InputText = styled.input`
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background: #FFFFFF;
    width: 330px;
    height: 42px;
    padding-left: 10px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    &::placeholder{
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #ccc;
    }
    &:focus{
        outline: none;
        box-shadow: #e88041 0px 0px 6px;
        border: 1px solid #ff9e64;
    }

`
const ProfileWrap2child = styled.div`
//  width:400px;
//  float:left;

`

const Inputwraper = styled.div`
margin-right:50px;
`

const InputTextArea =  styled.textarea`
    width: 332px;
    border-radius: 5px;
    height: auto;
    background: #fff;
    border: 1px solid #D2D2D2;
    border-radius: 12px
    color: #000000;
   font-size: 16px;
   font-family: "Poppins";
    padding-left: 10px;
   padding-top: 10px;
    &:focus{
        outline: none;
        box-shadow: #e88041 0px 0px 6px;
        border: 1px solid #ff9e64;
    }
    &::placeholder{
      color: #ACACAC;
    font-size: 16px;
    }
`


export default function ProfileScreen(props) {

    const { t } = useTranslation();

    console.log(props.validation);
console.log('props.Subtext', props.Text)
    return (

        <div>
     <Topwraper>      
        <Text color={props.tcolor}>{props.Text} </Text>
        {!props.editKey  &&  <Subtext color={props.stcolor}>{(props.Subtext!=null && props.Subtext!="null" && props.Subtext!="" )? props.Subtext :"NA"}</Subtext> }  
        {props.editKey && <SubtextInput>

        <Inputwraper>
                <ProfileWrap2child>
              { props.type == "areaOfExpertise" ?  <InputTextArea placeholder={t('typehere')}  rows="4" cols="50" value={ (props.Subtext!=null && props.Subtext!="null" )? props.Subtext :""} onChange={props.handleChanges}  name="name" />
                 : <InputText placeholder={t('typehere')}   value={ (props.Subtext!=null && props.Subtext!="null" )? props.Subtext :""} onChange={props.handleChanges}></InputText>  }           
              </ProfileWrap2child>

              {props.validation && <div style={{fontFamily: 'Poppins',fontSize: "12px",color: "red" ,fontWeight: "400",marginTop: "5px",marginLeft: "0px"}}>First name should have minimum 2 characters.</div>}
              {props.valid && <div style={{fontFamily: 'Poppins',fontSize: "12px",color: "red" ,fontWeight: "400",marginTop: "5px",marginLeft: "0px"}}>First name is required.</div>}
              {props.nbrValid && <div style={{fontFamily: 'Poppins',fontSize: "12px",color: "red" ,fontWeight: "400",marginTop: "5px",marginLeft: "0px"}}>First name should start with alphabets.</div>}
              {props.charValid && <div style={{fontFamily: 'Poppins',fontSize: "12px",color: "red" ,fontWeight: "400",marginTop: "5px",marginLeft: "0px"}}>First name should start with alphabets.</div>}
             
          </Inputwraper>
        </SubtextInput>}   

       
    </Topwraper>
        </div>

)
}
