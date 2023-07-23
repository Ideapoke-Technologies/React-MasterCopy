import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { P } from '../CommonStyle'
import ProfileBg from './ProfileBg'
import ProfileScreen from './ProfileScreen'
import Button from '../Button/Button'
import Edit from './images/edit.svg'
import { useTranslation } from "react-i18next";
import AfterAlertSuccess from './AfterAlertSuccess'
import ProfileBlocker from './ProfileBlocker'
import { saveRdtUserActions } from "../UserTracking"



const Mainwraper = styled.div`
margin-top: -80px;
    /* display: grid;
    grid-template-columns: 0.55fr 2fr; */
    // min-width:1025px;
`
const Topwraper = styled.div`
     padding: 20px 0px 30px 30px;
    background: rgb(251, 251, 251);
    /* margin-left: 304px; */
    border-radius: 10px;
    height: auto;
    position: relative;
    margin-bottom: 20px;
    
    margin-top: 40px;
    border:1px solid #E4E4E4;

`
const Wrapper = styled.div`
    display: grid;

`
const Rightmenulist = styled.div`
    margin: 0px 20px 0 20px;
    // display: inline-block;
`
const ProfileWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 478px;

`
const MainWrap = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`
const Textwraper = styled.div`
margin: 7px 0 0 0px;
`
const Profilewraper = styled.div`
        position: absolute;
        top: 35px;
        left: 840px;
`
const ProfileWrap1 = styled.div`
    display: flex;
    width: 562px;
    justify-content: space-between;
    margin-top: -15px;
`
const ProfileWrap2 = styled.div`
 display: flex;
flex-direction: row;
justify-content: space-between;
width: 850px;
margin-top:-15px;

`
const ProfileWrap2child = styled.div`
 width:425px;
 float:left;
`
const ProfileWrap3 = styled.div`
 display: flex;
flex-direction: row;
justify-content: space-between;
width: 850px;
margin-top:-15px;
`
const ProfileWrapfirst = styled.div`
 display: flex;
flex-direction: row;
justify-content: space-between;
width: 850px;

`

const Proheading = styled.div`
     /* margin-left: 350px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

`
const Buttonwraper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;
`





const Text = styled.p`
width: 45px;
height: 45px;
background: #1F936E;
font-family: 'poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
border-radius: 25px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
@-moz-document url-prefix(){
   width: 73px;   
   height: 45px;
   
   }
`

const ProfileEdit = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    margin: 26px 0 -25px 0;
`
const Startwraper = styled.div`
position:relative;
`
const Start = styled.p`
position: absolute;
left: 90px;
top: -7px;
color:#FF4141;
`
const Img2 = styled.img`
width:25px;
`
const ProfileWrap2child2 = styled.div`
float:right;
width:170px;
`



export default function ProfilePreview(props) {

  const { t } = useTranslation();

  const [editKey, setEditKey] = useState(false);
  const [profile, setProfile] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [preProfileData, setPreProfileData] = useState(null);
  const [preWorkExperience, setPreWorkExperience] = useState([]);
    const [preInitial,setPreInitials] = useState([]);
    const [validation,setValidation] = useState(false);
    const [valid,setValid] = useState(false);
    const [nbrValid,setNbrValid] = useState(false);
    const [charValid,setCharValid] = useState(false);
    const [updatePopup,setUpdatePopup] = useState(false);
    const [updateLoader,setUpdateLoader]=useState(false);

  const FetchProfileData = async () => {




    try {
      const url = process.env.APP_RDT_SERVICE_URL +"/rdt/user/fetchuserprofile";

      const obj = {
        "userId": props.userData.sesuserid
      }


      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj)
      });

      const data = await res.json();
      console.log(data);
      setPreProfileData(data);
      setProfile(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  console.log(profile);

  useEffect(() => {
    FetchProfileData();
  }, [editKey]);


  const FetchWorkExpData = async () => {
    try {
      const url = process.env.APP_RDT_SERVICE_URL + "/rdt/user/fetchuserprofile";

      const obj = {
            "userId": props.userData.sesuserid
      }

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify(obj)
      });

      const data = await res.json();

      setPreWorkExperience(data);
      setWorkExperience(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  console.log(workExperience);

  useEffect(() => {
    FetchWorkExpData();
  }, []);


  


  const UpdateUserProfileData = async () => {

    setUpdateLoader(true);
    saveRdtUserActions(props.userData.sesuserid, 'profile', 'onclick of Update in UserProfile','');

    if (profile[0].firstName && profile[0].firstName.charAt(0) === profile[0].firstName.charAt(0).toLowerCase()) {
      const updatedFirstName = profile[0].firstName.charAt(0).toUpperCase() + profile[0].firstName.slice(1);
      profile[0].firstName = updatedFirstName;
    }

    if (profile[0].lastName && profile[0].lastName.charAt(0) === profile[0].lastName.charAt(0).toLowerCase()) {
      const updatedLastName = profile[0].lastName.charAt(0).toUpperCase() + profile[0].lastName.slice(1);
      profile[0].lastName = updatedLastName;
    }

        if(profile[0].firstName.length<1){
          setValid(true)
          setUpdateLoader(false)
          return
        }

        if(profile[0].firstName.length<2){
          setValidation(true)
          setUpdateLoader(false)
          return
        }

       
        if (/^\d/.test(profile[0].firstName)) {
          setNbrValid(true);
          setUpdateLoader(false)
          return;
        }

        if (/[^\w\s]/.test(profile[0].firstName)) {
          setCharValid(true);
          setUpdateLoader(false)
          return;
        }

        

        const obj={
      "userId": props.userData.sesuserid,
      "firstName": profile[0].firstName,
      "lastName": profile[0].lastName,
      "linkedInUrl": profile[0].linkedInUrl,
      "areaOfExpertise": profile[0].areaOfExpertise,
      "imageUrl": profile[0].imageUrl,
      "companyName": workExperience[0].companyName,
      "department": workExperience[0].department,
      "position": workExperience[0].position,
      "city": workExperience[0].city,
      "industry": workExperience[0].industry

    }

    console.log(obj,"imageUrlimageUrl")


    try {

      const url = process.env.APP_RDT_SERVICE_URL + '/rdt/user/updateuserprofile';

      const response = await fetch(url, {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(obj),

      });


      if (!response.ok) {
        throw new Error('Error updating account data');

      }

      const updatedData = await response.json();
      console.log(updatedData)
      setProfile(updatedData);
      setPreProfileData(updatedData);
      setEditKey(false);


    } catch (error) {

      console.error('Error updating account data:', error);

    }
     
    setUpdateLoader(false);
    FetchProfileData();
    FetchWorkExpData();
    setUpdatePopup(true);

    
  }

  useEffect(() => {
    setTimeout(() => {
      setUpdatePopup(false)
    }, 3000);

  }, [profile])




  const showTextField = () => {
    setEditKey(true);
    saveRdtUserActions(props.userData.sesuserid, 'profile', 'onclick of Edit in UserProfile','');
  };

  const handleCancel = () => {
    saveRdtUserActions(props.userData.sesuserid, 'profile', 'onclick of Cancel in UserProfile','');

    setWorkExperience(preWorkExperience);
    setProfile(preProfileData);
    setPreInitials(initials);

    setEditKey(false);

  }


 

  const handleUpdate = (event, type) => {
    const value = event.target.value;
    console.log(profile + "profileprofileupd");
    UpdateUserProfileData([
      {
        ...profile[0],
        [type]: value,
      },
    ]);
  };

  const handleFirstName = (event) => {
    const obj = {
      ...profile[0],
      firstName: event.target.value,
    };
    console.log(obj, "objjj");
      setProfile([obj]);
      setValidation(false);
      setValid(false);
      setNbrValid(false);
      setCharValid(false);
  };

  const handleLastName = (event) => {
    const obj = {
      ...profile[0],
      lastName: event.target.value,
    };
    setProfile([obj]);
  };

  const handleLinkedIn = (event) => {
    const obj = {
      ...profile[0],
      linkedInUrl: event.target.value,
    };
    setProfile([obj]);
  };

  const handleAreaOfExpertise = (event) => {
    const obj = {
      ...profile[0],
      areaOfExpertise: event.target.value,
    };
    setProfile([obj]);
  };

  const handleCompanyNames = (event) => {
    const obj = {
      ...profile[0] ,
      displayName: event.target.value,
    };
    setProfile([obj]);
  };

  const handleCompanyName = (event) => {
    const obj = {
      ...workExperience[0] ,
      companyName: event.target.value,
    };
    setWorkExperience([obj]);
  };

  const handleDepartment = (event) => {
    const obj = {
      ...workExperience[0],
      department: event.target.value,
    };
    setWorkExperience([obj]);
  };


  const handlePosition = (event) => {
    const obj = {
      ...workExperience[0],
      position: event.target.value,
    };
    setWorkExperience([obj]);
  };

  const handleCity = (event) => {
    const obj = {
      ...workExperience[0],
      city: event.target.value,
    };
    setWorkExperience([obj]);
  };

  const handleIndustry = (event) => {
    const obj = {
      ...workExperience[0],
      industry: event.target.value,
    };
    setWorkExperience([obj]);
  };



  function getInitials(firstName, lastName) {
    const firstNameInitial = firstName ? firstName.charAt(0).toUpperCase() : '';
    const lastNameInitial = lastName ? lastName.charAt(0).toUpperCase() : '';
    return firstNameInitial + lastNameInitial;
  }

  // Inside your component
  const firstName = profile.length > 0 ? profile[0].firstName : '';
  const lastName = profile.length > 0 ? profile[0].lastName : '';
  const initials = getInitials(firstName, lastName);

  // console.log(profile.profile[0].profile[0].companyName + "profileCompany")
  console.log(workExperience,"workExperience-size")
  console.log(profile,"profile-size")



  let fullName; 

  if (profile.length > 0 && profile[0].fullName) {
    fullName = profile[0].fullName;
  
    let words = fullName.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word.charAt(0) === word.charAt(0).toLowerCase()) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }
  
      words[i] = word;
    }
  
    fullName = words.join(' ');
  } else {
   
  }



  return (

    <div>
      <AfterAlertSuccess userid={props.userData.sesuserid} editKey={editKey} setUpdatePopup={setUpdatePopup} updatePopup={updatePopup}></AfterAlertSuccess>  
      <Mainwraper>
        <Wrapper>

          <Rightmenulist>
            {/* <div style={{position: "absolute"}}> */}
            <Proheading>
              <ProfileEdit>
                <P text={t('profile')} color="#454545" fontSize="30px" fontWeight="600" letterSpacing="-1px"></P>
                {!editKey && <Img2 src={Edit} showTextField={showTextField} onClick={showTextField} style={{ cursor: "pointer" }} ></Img2>}
                {/* <Button text="Edit" variant="outlineOrange" width="75px" height="auto"  font-size="18px" font-weight="600"></Button> */}
              </ProfileEdit>

            </Proheading>


            <Topwraper>
              <Textwraper></Textwraper>
              <div style={{ }}>
                <P text={t('aboutme')} color="#FF7624" fontSize="22px" fontWeight="300" letterSpacing="-1px" ></P>
              </div>


              <MainWrap onSubmit={handleUpdate}>
                <ProfileWrap>
                  <Startwraper>
                   
                    {!editKey && profile.length > 0 && <ProfileScreen type="firstName" Text={t('firstname')} tcolor="#352960" Subtext={profile[0].firstName.charAt(0).toUpperCase() +
                    profile[0].firstName.slice(1)} stcolor="#7E7E7E" editKey={editKey} >
                    </ProfileScreen>}
                     {editKey && profile.length >0 && <ProfileScreen type="firstName" Text={t('firstname')} tcolor="#352960" Subtext={profile[0].firstName.charAt(0).toUpperCase() +
                    profile[0].firstName.slice(1) } validation={validation} charValid={charValid} valid={valid} nbrValid={nbrValid}  stcolor="#7E7E7E" editKey={editKey} handleChanges={handleFirstName}>                    
                    </ProfileScreen>}
                      
                     {editKey &&<Start style={t('firstname') === "ファーストネーム" ? { left: "131px" } : {}} >*</Start>}  

                  </Startwraper>
                       <div style={{width:"86px"}}>
                  {!editKey && profile.length > 0 && < ProfileScreen type="lastName" Text={t('lastname')} tcolor="#352960" Subtext={profile[0].lastName.charAt(0).toUpperCase() +
                    profile[0].lastName.slice(1) } stcolor="#7E7E7E" editKey={editKey}  > </ProfileScreen>}
                  {editKey && profile.length > 0 && <ProfileScreen type="lastName" Text={t('lastname')} tcolor="#352960" Subtext={profile[0].lastName.charAt(0).toUpperCase() +
                    profile[0].lastName.slice(1) } stcolor="#7E7E7E" editKey={editKey} handleChanges={handleLastName} ></ProfileScreen>}
                    </div>

                </ProfileWrap>
                <ProfileWrap1>
                  
                  {!editKey && profile.length > 0 && <ProfileScreen type="linkedInUrl" Text={t('linkedin')} tcolor="#352960" Subtext={profile[0].linkedInUrl} stcolor="#7E7E7E" editKey={editKey}></ProfileScreen>}
                  {editKey && profile.length > 0 && <ProfileScreen type="linkedInUrl" Text={t('linkedin')} tcolor="#352960" Subtext={profile[0].linkedInUrl} stcolor="#7E7E7E" editKey={editKey} handleChanges={handleLinkedIn}></ProfileScreen>}

                  <ProfileWrap2child2>
                  {!editKey && profile.length > 0 && <ProfileScreen type="areaOfExpertise"   Text={t('areaofexpertise')} tcolor="#352960" Subtext={profile[0].areaOfExpertise}  stcolor="#7E7E7E" editKey={editKey}   style={{width:"259px", float:"left"}} ></ProfileScreen>}
                  {editKey && profile.length > 0 && <ProfileScreen type="areaOfExpertise"  Text={t('areaofexpertise')} tcolor="#352960" Subtext={profile[0].areaOfExpertise}  stcolor="#7E7E7E" editKey={editKey} handleChanges={handleAreaOfExpertise}  style={{width:"259px", float:"left"}}></ProfileScreen>}
                  </ProfileWrap2child2>
                  
                </ProfileWrap1>



              </MainWrap>
              <Profilewraper>
                {!editKey && profile.length > 0 && <ProfileBg  Text={fullName} editKey={editKey} initials={initials} image={profile[0].imageUrl} profile={profile[0]} setProfile={setProfile}></ProfileBg>}
                {editKey && profile.length > 0 && <ProfileBg  Text={fullName} editKey={editKey} initials={initials} image={profile[0].imageUrl} profile={profile[0]} setProfile={setProfile}></ProfileBg>}
              </Profilewraper>
            </Topwraper>


            <Topwraper>
              <Textwraper></Textwraper>
              <div style={{ }}>
                <P text={t('workexperience')} color="#FF7624" fontSize="22px" fontWeight="400" letterSpacing="-1px"></P>
              </div>
              <MainWrap onSubmit={handleUpdate} >

                <ProfileWrapfirst>
               

                <ProfileWrap2child>
                 { workExperience.length > 0 && profile.length > 0 &&<>  
                {!editKey && workExperience.length > 0 && <ProfileScreen Text={t('companyname')} tcolor="#352960" Subtext={workExperience[0].companyName != null ? workExperience[0].companyName : profile[0].displayName} stcolor="#7E7E7E" editKey={editKey} ></ProfileScreen>}
                  {editKey && workExperience.length > 0 && <ProfileScreen Text={t('companyname')} tcolor="#352960" Subtext={workExperience[0].companyName !=null ? workExperience[0].companyName : profile[0].displayName} stcolor="#7E7E7E" editKey={editKey} handleChanges={handleCompanyName}></ProfileScreen>}
                  </>}
                </ProfileWrap2child>

                <ProfileWrap2child>
                {!editKey && workExperience.length > 0 && <ProfileScreen Text={t('department')} tcolor="#352960" Subtext={workExperience[0].department} stcolor="#7E7E7E" editKey={editKey} ></ProfileScreen>}
                  {editKey && workExperience.length > 0 && <ProfileScreen Text={t('department')} tcolor="#352960" Subtext={workExperience[0].department} stcolor="#7E7E7E" editKey={editKey} handleChanges={handleDepartment} ></ProfileScreen>}
                  </ProfileWrap2child>

                  
                 
                </ProfileWrapfirst>

                <ProfileWrap2>

                <ProfileWrap2child>
                {!editKey && workExperience.length > 0 && <ProfileScreen Text={t('jobtitle')} tcolor="#352960" Subtext={workExperience[0].position} stcolor="#7E7E7E" editKey={editKey} ></ProfileScreen>}
                  {editKey && workExperience.length > 0 && <ProfileScreen Text={t('jobtitle')} tcolor="#352960" Subtext={workExperience[0].position} stcolor="#7E7E7E" editKey={editKey} handleChanges={handlePosition}></ProfileScreen>}

                </ProfileWrap2child>
                
                <ProfileWrap2child>
                {!editKey && workExperience.length > 0 && <ProfileScreen Text={t('city')} tcolor="#352960" Subtext={workExperience[0].city} stcolor="#7E7E7E" editKey={editKey}></ProfileScreen>}
                  {editKey && workExperience.length > 0 && <ProfileScreen Text={t('city')} tcolor="#352960" Subtext={workExperience[0].city} stcolor="#7E7E7E" editKey={editKey} handleChanges={handleCity}></ProfileScreen>}


                </ProfileWrap2child>


                 
                 
                </ProfileWrap2>
                <ProfileWrap3>

                <ProfileWrap2child>
                {!editKey && workExperience.length > 0 && <ProfileScreen Text={t('industry')} tcolor="#352960" Subtext={workExperience[0].industry} stcolor="#7E7E7E" editKey={editKey}></ProfileScreen>}
                  {editKey && workExperience.length > 0 && <ProfileScreen Text={t('industry')} tcolor="#352960" Subtext={workExperience[0].industry} stcolor="#7E7E7E" editKey={editKey} handleChanges={handleIndustry} ></ProfileScreen>}

                </ProfileWrap2child>

                <ProfileWrap2child>
                {!editKey && workExperience.length > 0 && <ProfileScreen type="workemail" Text={t('workemail')} tcolor="#352960" Subtext={workExperience[0].workEmailId} stcolor="#7E7E7E" editKey={editKey}></ProfileScreen>}
                  {editKey && workExperience.length > 0 && <ProfileScreen type="workemail" Text={t('workemail')} tcolor="#352960" Subtext={workExperience[0].workEmailId} stcolor="#7E7E7E" editKey={editKey} ></ProfileScreen>}

                  </ProfileWrap2child>
                 
                 

                </ProfileWrap3>

              </MainWrap>

            </Topwraper>


            <Buttonwraper>

              {editKey && <Button text={t('cancel')} variant="outlineOrange" width="125px" height="auto" font-size="18px" font-weight="600" onClick={handleCancel} 
               editKey={editKey}></Button>}

                {editKey &&<Button text={t('update')} variant="solidOrange" width="135px" height="auto" updatePopup={updatePopup}  editKey={editKey} validation={validation} setValidation={setValidation} onClick={UpdateUserProfileData}></Button>}
            </Buttonwraper>


          </Rightmenulist>

        </Wrapper>
      </Mainwraper>
      <ProfileBlocker updateLoader={updateLoader}></ProfileBlocker>  
        
      
    </div>

  )
}

