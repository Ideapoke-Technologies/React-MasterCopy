import React, { useRef } from 'react'
import styled from 'styled-components'
import SearchIcon from './images/search.svg'
import { UserActivity } from '../UserActivity'
import { saveRdtUserActions } from "../UserTracking"

const SearchWrap = styled.div`
    display: flex;
    width: 310px;
    position: relative;
    @media (min-width: 1524px) and (max-width: 1920px){

    }
`

const Search = styled.input`
    padding-right: 60px;
    border: 0.5px solid #454545;
    border-radius: 8px;
    padding: 10px 48px 10px 11px;
    width: 772px;
    color: #454545;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    &:focus{
        outline: none;
        border: 0.5px solid #2970B1;
    }
    ::placeholder{
        font-size: 12px;
        color: #454545;
    }
    @-moz-document url-prefix(){
        width: 175px;
    }
`
const SearchArea = styled.span`
    position: absolute;
    // border-left: 1px solid #FF7624;
    right: 15px;
    height: 45px;
    padding-left: 12px;
    display: inline-block;
`
const Img = styled.img`
    position: relative;
    top: 10px;
`
const SearchCont = styled.div`
    /* display: flex;
    justify-content: flex-end;
    margin-top: 0px;
    gap: 12px; */
`


export default function SearchBox(props) {
    const searchRef = useRef(null);

    // Get Search Data
    const searchTemplateNameOrTag = () => {
        saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of search icon','');
        if(props.setSearchInput){
            props.setSearchInput(searchRef.current.value.toLowerCase());
        }else{
            props.getSearchedTemplates(searchRef.current.value.toLowerCase());
        }
    }

    const handleKeyPress = (event) => {
        console.log(event.key)
        if (event.key === 'Enter') {
            searchTemplateNameOrTag();
        }
    }
    return (
        <div>
                <SearchWrap>
                    <Search ref={searchRef} placeholder={props.placeholder} type="text" onKeyPress={(e) => { handleKeyPress(e) }}></Search>
                    <SearchArea style={{ cursor: "pointer" }} onClick={searchTemplateNameOrTag}>
                        <Img src={SearchIcon} />
                    </SearchArea>
                </SearchWrap>           
        </div>
    )
}
