import React, { useEffect, useState } from 'react'
import checkTick from './images/checkTick.svg'
import styled from 'styled-components'
// const ChecBox = styled.div`
//    width: 18px;
//    height: 18px;
//    border: 1px solid #FF7624;

//    border-radius: 2px;
//    &:hover{
//     cursor:pointer;
//    }
//    &::focus{
//     background:red;
//    }
// `
// const Img = styled.img`
//    width: 10px;
//    position: absolute;
//    top: 50%;
//    left: 50%;
//    transform: translate(-50%, -50%);
// `
// export default function CheckBox(props) {
//     const [checkIsClicked, setCheckIsClicked]= useState(false)
//     console.log(props.click,"props.click")
//     const ToggleClick=()=>{
//         setCheckIsClicked(!checkIsClicked)
//         console.log("props.value",props.value)
//         props.setChecked(props.value);
//         props.selectBackground()    
//     }

//   return (
//     <div>
//         <ChecBox id={props.id} onClick={()=>ToggleClick()} handleCheck={checkIsClicked}  style={{background:checkIsClicked?"#FF7624":"white", position:"relative"}}> 
//             <Img src={checkIcon}  />
//         </ChecBox>
//     </div>
//   )
// }
const Checkbox = styled.input.attrs({ type: 'checkbox' })`

/* Style the checkbox */

appearance: none;
background: #ff7624;
border: none;
border-radius: 3px;
box-sizing: border-box;
cursor: pointer;
height: 20px;
margin: 0;
outline: none;
padding: 0;
position: relative;
width: 20px;
top: 2px;

&:before {
content: "";
position: absolute;
top: 1px;
left: 1px;
width: 18px;
height: 18px;
background: #fff;
border-radius: 2px;
transition: all .2s;

}

&:checked:before {
background: #ff7624;
}

&:checked:after {
content: url(${checkTick});
position: absolute;
top: -1px;
left: 3px;
color: #fff;
font-size: 16px;
}

`
export default function CheckBox(props) {
  const [checked, setChecked] = useState(null);
  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked])
  return (
    <>
      <label>
        <Checkbox className={props.name} id={props.id} checked={checked} name={props.name} value={props.id}
          onChange={(e) => {
            setChecked(e.target.checked);
            props.onChange(e.target.checked);
          }} />
      </label>
    </>
  )

}