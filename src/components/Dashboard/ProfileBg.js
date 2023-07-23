import React,{useState} from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import CropPopup from "./CropPopup";

const TopOuterWrapper = styled.div`
  width: 115px;
  margin-right: 35px;
`;

const Topwraper = styled.div`
  width: 113px;
  height: 113px;
  border-radius: 250px;
  // background-image: url(${(props) => props.img});
  background-color: "#ffffff";
  border: 5px solid #ff7624;
  background-color: #fff;
  position: relative;
  margin: 55px 0px 0 0;
`;
const ProfileImg = styled.img`
width: 113px;
height: 113px;
margin-top: 0px;
margin-left: 0px;
border-radius: 50%;
`;

const ProfileNoImg = styled.p`
margin-top: 53px;
width: 113px;
height: 113px;
background: #1F936E;
font-family: 'poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
border-radius: 55px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
@-moz-document url-prefix(){
   width: 113px;   
   height: 113px;
   
   }
`


const ProfileText = styled.span`
 position:relative;
 top:-8px;
`;

const Text = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  color: #454545;
`;

const EditText = styled.div`
  position: absolute;
  bottom: -4px;
  background: rgba(0, 0, 0, 0.75);
  display: inline-block;
  border-radius: 0 0 250px 250px;
  width: 113px;
  height: 50px;
  left: 1px;
  opacity: 0.75;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 38px;
  text-align: center;
  color: rgb(255, 118, 36);
`;

export default function ProfileBg(props) {

  console.log(props,"props12")

  const { t } = useTranslation();

  const [profileImage, setProfileImage] = useState("");
  const[cropPopup,setCropPopup] = useState(false);

  const [imageUrl, setImageUrl] = useState(null);
  const [viewImage, setViewImage] = useState(null);

  console.log(props.editKey);

  const handleImageChanges = async (e) => {
    console.log('ewww', e.target.value)

let image = e.target.files[0];

   if (image) {
    setCropPopup(true)
     const imageReader = new FileReader();
     imageReader.readAsDataURL(image);
     imageReader.onloadend = () => {
      setViewImage(imageReader.result);
     };

   }
    
    console.log("oihuigkyvujgvihu-->","/accessdoc?filePath=" + s3path);
  };

  
  let userid = props.profile.firstName;

    console.log(userid,"userid")
  

  

console.log(profileImage+'==',props.image)
  return (
    <div>

      {(props.image && props.image != '' && props.image!="null" && props.image!=null && props.image != 'ipimages/userphoto/') || (imageUrl !=null)  ?
       <TopOuterWrapper>
        <Topwraper>
        <ProfileImg src={"/accessdoc?filePath=" + props.image} ></ProfileImg>
          <label style={{ cursor: "pointer" }}>
            <input
            key={new Date()}
              type="file"
              name="img"
              style={{ cursor: "pointer", display: "none" }}
              onChange={handleImageChanges}
            />

        {props.editKey && <EditText>{t('change')}</EditText>}
            
          </label>
        </Topwraper>
        <Text>{props.Text}</Text>
      </TopOuterWrapper>
       :
       <> 
       <ProfileNoImg   style={{ cursor: "pointer" }}> <ProfileText>{props.initials} </ProfileText> </ProfileNoImg>
      <label style={{ cursor: "pointer" }}>
            <input
              type="file"
              name="img"
              style={{ cursor: "pointer", display: "none" }}
              onChange={handleImageChanges}
            />

        {props.editKey && <EditText style={{bottom:20,borderRadius:"0px 0px 272px 272px",width:"110px"}}>{t('change')}</EditText>}
            
          </label>
      </>
      }
      {cropPopup && <CropPopup viewImage={viewImage}  profileImage={profileImage} setViewImage={setViewImage} imageUrl={imageUrl} setImageUrl={setImageUrl} setCropPopup={setCropPopup} setProfileImage={setProfileImage}  setProfile={props.setProfile} profile={props.profile}></CropPopup>}
    </div>
  );
}
