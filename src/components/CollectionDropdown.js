import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Button from './Button/Button';
import { P } from './CommonStyle';
import CheckBox from '././CheckBox';
// import AddCollectionSlider from './AddCollectionSlider';
import Arrow from './images/dropdown-arrow.svg'

const CollectionWrap = styled.div`
    position: relative;
`
const ColDropValue = styled.div`
    background: #FFFFFF;
    border: 1px solid #8A8A8A;
    box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.15);
    border-radius: 4px;
    width: 330px;
    position: absolute;
    display: grid;
    grid-template-rows: 1fr 0.1fr;
    top: 36px;
    z-index: 2;

`

const SelectValue = styled.div`
    position: relative;
    padding: 20px 30px;
`

const AddValue = styled.div`
    background: #BDDFFF;
    box-shadow: 0px -30px 60px rgba(22, 41, 65, 0.15);
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const ExportBtn = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`
const Svg = styled.svg`
    cursor: pointer;
`
const CheckVaue = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    gap: 12px;
`
const CheckVaueWrap = styled.div`
    overflow-y: auto;
    max-height: 265px;
    width: 300px;
    scrollbar-color: #E5E5E5 #fff;
    scrollbar-width: thin;
    border-radius: 10px;
    margin-top: 13px;
    ::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: #fff;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    ::-webkit-scrollbar{
        width: 6px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 0%);
        background-color: #e5e5e5;
        margin-top: 5px;
        margin-bottom: 5px;
    }

`
const Img = styled.img``

export default function CollectionDropdown(props) {
    const [show, setShow] = useState(false);
    const [isDisplay, setIsDisplay] = useState(false);
    const [rschAreaData, setRschAreaData] = useState(null);
    const [rschAreaObj, setRschAreaObj] = useState({
        type: "industry",
        flag: "A"
    });
    const [opportunityFltArr, setOpportunityFltArr] = useState(['Select All','Map','Lite']);
    const [fltrIndustry, setFltrIndustry] = useState(null);
    const [fltrTemplate, setFltrTemplate] = useState(null);

    const toggle = () => {
        setIsDisplay(!isDisplay)
    }

    useEffect(() => {
        fetchResearchArea()
        collectTemplateIndustryId();
    }, [props.communityData]);


    const fetchResearchArea = async () => {
        console.log(" fetchResearchArea rschAreaObj : ", rschAreaObj);
        const url = process.env.API_URL + "/fetchproindustryandsubindustry";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rschAreaObj),
        });
        const data = await response.json();
        setRschAreaData(data.eimsProReqIndustryAndSubInd);
        console.log('Industry data : ', data.eimsProReqIndustryAndSubInd);

    };
    
    document.addEventListener("mouseup", function (e) {
        var container = document.querySelector("#" + props.dymid);
        if (container != null) {
            if (!container.contains(e.target) && container !== e.target) {
                setIsDisplay(false)
            }
        }

    });

    const collectTemplateIndustryId = () => {
        let industryArr = [], temlpateArr = [];
        for (let i = 0; i < props.communityData.length; i++) {
            if (industryArr.indexOf(props.communityData[i].industryId) === -1) {
                if (props.communityData[i].industryId != undefined) {
                    industryArr.push(props.communityData[i].industryId);
                }

            }
            if (temlpateArr.indexOf(props.communityData[i].templateId) === -1) {
                if (props.communityData[i].templateId != undefined) {
                    temlpateArr.push(props.communityData[i].templateId);
                }
            }
        }
        setFltrIndustry(industryArr);
        setFltrTemplate(temlpateArr);
    }

    let selecttext = "Select " + props.heading.toLowerCase();
    return (
        <div>
            <CollectionWrap>

                <ColDropValue id={props.dymid} style={{ display: isDisplay ? "block" : "none" }}>
                    <SelectValue>
                        <P text={selecttext} color="#ACACAC" fontSize="16px" fontWeight="400" cursor="auto"></P>
                        <CheckVaueWrap>

                         {props.dymid != "opportunitydpid" ?  (<> {props.dropdowndata != undefined ? (isDisplay && props.dropdowndata.map((item, index) => {
                                return (
                                    <CheckVaue key={index}>
                                        {fltrTemplate && fltrTemplate.indexOf(item.id) != -1 ? (<CheckBox id={item.id} checked={true} name={props.dymid}></CheckBox>) : (<CheckBox id={item.id} checked={false}></CheckBox>)}

                                        <P text={item.templateName  } color="#454545" fontSize="16px" fontWeight="400" cursor="auto"></P>
                                    </CheckVaue>);
                            })) : (isDisplay && rschAreaData && rschAreaData.map((item, index) => {
                                // { console.log("rschAreaData condidtion " + item.industry + ": " + (fltrIndustry.indexOf(item.id) != -1)) }

                                return (

                                    <CheckVaue key={index}>
                                        {fltrIndustry && fltrIndustry.indexOf(item.id) != -1 ? (<CheckBox id={item.id} checked={true} name={props.dymid}></CheckBox>) : (<CheckBox id={item.id} checked={false}></CheckBox>)}
                                        <P text={item.industry} color="#454545" fontSize="16px" fontWeight="400" cursor="auto"></P>
                                    </CheckVaue>);
                            }))}</>)
                            : ( isDisplay && opportunityFltArr.map((item,index) => {

                                return (
                                    <CheckVaue key={index}>
                                        <CheckBox id={"opp"+item.split(" ")[0]} checked={false}></CheckBox>
                                        <P text={item} color="#454545" fontSize="16px" fontWeight="400" cursor="auto"></P>
                                    </CheckVaue>);
                                })
                            )}

                        </CheckVaueWrap>
                    </SelectValue>
                    <AddValue onClick={() => { props.applyFilter(props.dymid, props.heading.toUpperCase()), toggle() }}>
                        <P text="Apply" color="#2970B1" fontSize="16px" fontWeight="400" cursor="pointer"></P>
                    </AddValue>
                </ColDropValue>
                <ExportBtn onClick={() => toggle()}>
                    <P text={props.heading} color="#2970B1" fontSize="16px" fontWeight="400" cursor="pointer"></P>
                    <Img src={Arrow}></Img>
                </ExportBtn>
            </CollectionWrap>
        </div >
    )
}
