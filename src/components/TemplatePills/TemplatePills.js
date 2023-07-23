import React from 'react'
import styled from 'styled-components'

const TemPillWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 10px;
    flex-direction: row;
`
const PillsTxt = styled.div`
    padding: 6px 12px;
    background-color: ${(props) => props.backgroundColor};
    color: #352960;
    font-size: 12px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 14px;
    cursor: pointer;
    border-radius: 40px;
    :hover{
      background-color: #DACFFF;
    }
`
export default function TemplatePills(props) {
  return (
    <div>
      <TemPillWrap>
        {props.tgData && props.tgData.map((item, index) => {
          return (item.isActive ? <PillsTxt onClick={() => props.applyCategory(item.id, index, false)} backgroundColor="#DACFFF">{item.name}</PillsTxt> :
            <PillsTxt onClick={() => props.applyCategory(item.id, index, true)} backgroundColor="#EDE8FF">{item.name}</PillsTxt>)
        })}
      </TemPillWrap>
    </div>
  )
}
