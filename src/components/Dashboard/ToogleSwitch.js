import styled from "styled-components";
import { ChangeEvent, useEffect, useState } from "react";

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
  border: 1px solid #e5e5e5;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 35px;
    top: 50%;
    left: 0;
    background: #8a8a8a;
    transform: translate(0, -50%);
    box-shadow: 0px 2px 6px rgba(69, 69, 69, 0.25);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: #ff7624;

    &:before {
      transform: translate(14px, -50%);
      background-color: #fff;
      box-shadow: 0px 2px 6px rgba(69, 69, 69, 0.25);
    }
  }
`;

const ToggleSwitch = ({
  initialChecked,
  mainindex,
  index,
  setNotifictiondata,
  notifictiondata,
  onChange,
  id,
  toggleAll,
  maintogglehandeler,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  console.log("initialChecked", initialChecked);

  const getFLag = (val) => {
    switch (val) {
      case true:
        return 1;
      case false:
        return 0;
    }
  };

  useEffect(() => {
    if (notifictiondata && setNotifictiondata) {
      const copyNotiData = notifictiondata;
      copyNotiData[mainindex].accountSettingNotificationList[
        index
      ].accountsettingnotificationitemlist[0].finalisdefault = getFLag(checked);
      setNotifictiondata(copyNotiData);
    }
  }, [checked]);


  console.log("notifictiondata--->", notifictiondata);

  const handleChange = () => {
    if (id && id == "pauseall") onChange && onChange();
    setChecked((prev) => !prev);
  };
  console.log("mainindex,checked :>> ", mainindex, checked);
  useEffect(() => {
    if (id && id == "pauseall") {
      console.log(toggleAll, "toggleAlltog");
    }
  }, [toggleAll]);
  return (
    <div>
      <div>
        <Label>
          {id == "pauseall" ?
            <Input
              type="checkbox"
              checked={toggleAll}
              onChange={maintogglehandeler}
            /> :
            <Input
              type="checkbox"
              checked={id && id == "pauseall" ? toggleAll : checked}
              onChange={handleChange}
            />}
          <Switch />
        </Label>
      </div>
    </div>
  );
};  

export default ToggleSwitch;
// console.log("notification data-->", notifictiondata);
// if (setNotifictiondata) {
//   setNotifictiondata((prev) => {

//     return prev[mainindex].accountSettingNotificationList[index]
//         .accountsettingnotificationitemlist[0].finalisdefault = checked
//   });
// }
