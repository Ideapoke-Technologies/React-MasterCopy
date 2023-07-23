import React,{useState} from 'react'
import styled from 'styled-components'
import MemberHoverpreview from './MemberHoverpreview'
import ProfileMemberhover from './ProfileMemberhover'

const TopOuterWrapper = styled.div``

const Topwraper = styled.div`
`
// const Text = styled.p`
//   margin: 0;
//   font-family: 'Poppins';
// font-style: normal;
// font-weight: 300;
// font-size: 20px;
// line-height: 30px;
// text-align: center;
// color: ${(props)=>props.color};
// `
const Member = styled.div`
width: 58px;
height: 58px;
border-radius: 250px;
 background-image: url(${(props) => props.memberImg});
 border:1px solid ${(props)=>props.Brcolor};
 background-color:${(props)=>props.Bgcolor};
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
    align-items: center;
    justify-content: center;
/* border: 3px solid #FF7624; */
margin: 0;
   font-family: 'Poppins';
 font-style: normal;
 font-weight: 500;
 font-size: 20px;
 line-height: 30px;
 text-align: center;
 color: #000000;

`

const MemberNoImg = styled.div`
width: 58px;
height: 58px;
border-radius: 250px;
 background-image: url(${(props) => props.memberImg});
 border:1px solid ${(props)=>props.Brcolor};
 background-color:${(props)=>props.Bgcolor};
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
    align-items: center;
    justify-content: center;
/* border: 3px solid #FF7624; */
margin: 0;
   font-family: 'Poppins';
 font-style: normal;
 font-weight: 500;
 font-size: 20px;
 line-height: 30px;
 text-align: center;
 color: #000000;

`




export default function ProfileMember(props) {
  const [hoverComponent, setHoverComponent] = useState(null);

  const index = props.index;
  console.log(index);

  const handleHover = (index) => {
    setHoverComponent(index);
  };

  const handleHoverLeave = () => {
    setHoverComponent(null);
  };

  const propcollabratorData = props.collabratorData;
  console.log(props.initials,"HNUBGYV")

 

  return (
    <div>
      <TopOuterWrapper>
        <Topwraper>
          <Member
            memberImg={props.memberImg}
            onMouseEnter={() => {
              handleHover(index);
            }}
            onMouseLeave={handleHoverLeave}
            Brcolor={props.Brcolor}
            Bgcolor={props.Bgcolor}
          >
            {props.text}
          </Member>

          

          {hoverComponent === index && (
  <>
    {(index + 1) % 3 === 0 ? (
      <ProfileMemberhover
        propcollabratorData={propcollabratorData[index]}
        index={index}
       
      ></ProfileMemberhover>
    ): <MemberHoverpreview
    propcollabratorData={propcollabratorData[index]}
    index={index}
   
  ></MemberHoverpreview>}

   
  </>
)}
        </Topwraper>
      </TopOuterWrapper>
    </div>
  );
}
