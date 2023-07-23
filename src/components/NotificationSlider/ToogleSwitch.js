import styled from "styled-components";
import { useState,useRef  } from "react";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  justify-content: flex-end; 
`;

const Switch = styled.div`
    position: relative;
    width: 18px;
    height: 5px;
    background: #fff;
    border-radius: 32px;
    padding: 4px;
    transition: 300ms all;
    border: 1px solid #E5E5E5;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 35px;
    top: 50%;
    left: 0;
    background: #8A8A8A;
    transform: translate(0, -50%);
    box-shadow: 0px 2px 6px rgba(69, 69, 69, 0.25);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: #FF7624;

    &:before {
        transform: translate(14px, -50%);
        background-color: #fff;
        box-shadow: 0px 2px 6px rgba(69, 69, 69, 0.25);
    }
  }
`;

const ToggleSwitch = (props) => {
    const [checked, setChecked] = useState(true);
    const checkbox = useRef();

  const handleSwitch = () => {
    if (checked) {
      props.setNReadStatus('UNREAD');
    } else {
      props.setNReadStatus('ALL');
    }
    setChecked(!checked);
  }

    return (
      <div>
        <Label>
          <Input type="checkbox" ref={checkbox} onChange={() =>handleSwitch()} />
          <Switch />
        </Label>
      </div>
    );
  };
  
  export default ToggleSwitch;