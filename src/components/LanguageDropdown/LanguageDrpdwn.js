import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import DropArrow from "./images/d-drop.svg"
import Translate from "./images/language.svg"
import Eng from "./images/us-flag.svg"
import Japan from "./images/japan-flag.svg"
import Chinese from "./images/chinese-flag.svg"
import { useTranslation } from "react-i18next";
import { saveRdtUserActions } from "../UserTracking"

const LWrapper = styled.div`
    position: relative;
`
const DropLang = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 4px;
    :hover{
        background-color: rgb(239 248 255);
    border-radius: 6px;
    }
`
const Txt = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FF7624;
    cursor: pointer;
`
const Img = styled.img``

const TranslateDrp = styled.div`
    position: absolute;
    box-shadow: 0px 2px 6px rgba(69, 69, 69, 0.25);
    border-radius: 4px;
    background: #FFFFFF;
    padding: 5px 0;
    width: 145px;
    margin-top: 8px;
    z-index: 1;
`
const Wrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    &:hover{
        background-color: #FFF3E1;
        cursor: pointer;
    }
`
const Ltxt = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #454545;
`

export default function LanguageDrpdwn(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [langTitle, setLangTitle] = useState("English");
    const { i18n } = useTranslation();

    //Close popup on click of outside
    const langRef = useRef(null);

    useEffect(() => {
        if (props.sesUserLang === "jp") {
            setLangTitle('日本')
        }

        const handleOutsideClick = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setIsVisible(false);
                if(document.getElementById('langArrow'))
                document.getElementById('langArrow').style.transform = 'rotate(0deg)';
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);


    const toggleVisibility = () => {
        saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of language label','');

        if (!isVisible) {
            document.getElementById('langArrow').style.transform = 'rotate(180deg)';
        } else {
            document.getElementById('langArrow').style.transform = 'rotate(0deg)';
        }
        setIsVisible(!isVisible);
    };

    const handleLangSwitch = (param) => {

        if (param == "en") {
            saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of english in language dropdown','');
            setLangTitle('English');
        } else {
            saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of japanese in language dropdown','');
            setLangTitle('日本');
        }
        i18n.changeLanguage(param);
        setIsVisible(!isVisible);
        setUserLanguage(param);
        document.getElementById('langArrow').style.transform = 'rotate(0deg)';
    }
    const setUserLanguage = async (lang) => {

        var dataObj = {
            "userId": props.sesUserId,
            "language": lang
        }
        console.log(" setUserLanguage dataObj : ", dataObj);
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/user/updateuserlanguage";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj),
        });
        const data = await response.json();
        console.log('setUserLanguage data : ', data);
    };

    return (
        <div>
            <LWrapper>
                <DropLang onClick={toggleVisibility}  ref={langRef}>
                    <div style={{ display: "flex", gap: "5px" }}>
                        <Img src={Translate} />
                        <Txt>{langTitle}</Txt>
                    </div>
                    <div>
                        <Img style={{ cursor: "pointer" }} id='langArrow' src={DropArrow} />
                    </div>
                </DropLang>
                {isVisible && <TranslateDrp   ref={langRef}>
                    <Wrap onClick={() => handleLangSwitch('en')}>
                        <Img src={Eng} />
                        <Ltxt>English</Ltxt>
                    </Wrap>
                    <Wrap onClick={() => handleLangSwitch('jp')}>
                        <Img src={Japan} />
                        <Ltxt>日本</Ltxt>
                    </Wrap>
                    {/* <Wrap>
                    <Img src={Chinese} />
                    <Ltxt>Chinese</Ltxt>
                </Wrap> */}
                </TranslateDrp>}
            </LWrapper>
        </div>
    )
}
