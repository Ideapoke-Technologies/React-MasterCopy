import React, { useState,useEffect,useRef} from "react";
import styled, { keyframes } from "styled-components";
import ReactModal from "react-modal";
import Close from "./images/close.svg";
import Button from "../Button/Button";
import UserCrop from "./images/user1.jpg";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const Reject = styled.div`
  width: 595px;
  height: 454px;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.25);
  margin: 0 auto;
`;
const CloseImg = styled.img`
  float: right;
  padding: 14px;
  &:hover {
    cursor: pointer;
  }
`;
const Header = styled.div`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 24px;
  color: #454545;
`;
const ContentWrap = styled.div`
  padding: 20px;
`;
const UploadArea = styled.div`
  background-color: #e9e8e8;
  width: 100%;
  height: 200px;
  margin-top: 12px;
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap:20px
`;
const UserImg = styled.img`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // margin: 0 auto;
  // width: 35%;
  // position: absolute;
  // top: 43%;
  // transform: translate(0, -50%);
  // left: 34%;
`;

export default function CropPopup(props) {
  const [displayField, setDisplayField] = useState(false);
  const [isOpen, setisOpen] = useState(true);
  const [enableCrop,setEnableCrop] = useState(false);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null)

  const [handlePrevImg,setHandlePrevImg] = useState(false);
  


  console.log(imgRef.current,"imgRefimgRef")

  const handleClose = () => {
    props.setCropPopup(false);
    props.setProfileImage(false);
    props.setImageUrl(false);
    setHandlePrevImg(false);
     
   // props.closePopup(false);
  };


  document.querySelectorAll('.ReactCrop__crop-selection').forEach(function(element) {
    element.style.borderRadius = '50%';
  });
  
  const [crop, setCrop] = useState({
    unit: 'px', // Can be 'px' or '%'
    x: 102,
    y: 8,
    width: 373,
    height: 286
  })

  const [image, setImage] = useState(undefined);
  


  
  const imageLoaded = (image) => {
  //  alert(2)
    console.log("imageLoaded==",image)
    setImage(image);
  };
  function imageCrop(crop) {
    setCrop(crop);
    console.log("imageCrop===",crop)
  }
  function imageCropComplete(crop) {
  //  alert(3)
    userCrop(crop);
    console.log("imageCropComplete===",crop)
  }
  async function userCrop(crop) {
    console.log("==>",imgRef.current,'--crop.width-->',crop.width+'-- crop.height--->',crop.height)
    if (imgRef.current && crop.width && crop.height) {
      console.log(imgRef.current)
      await getCroppedImage(imgRef.current, crop, "newFile.jpeg");
    }
  }



  const uploadFile = async (file, userid) => {
    console.log(userid)
      const datac = new FormData();
      datac.append('file', file);
      datac.append('userid', userid);
    
      const url =process.env.APP_RDT_SERVICE_URL+"/s3/upload";
  
      const fetchObj = {
        method: "POST",
        body: datac,
        processData: false,
        contentType: false,
        timeout: 600000,
      };
  
      let s3Path = '';
      try {
        const response = await fetch(url, fetchObj);
   
        if (!response.ok) {
          throw new Error('Failed to upload file to S3');
        } else {
          const data = await response.text();
          s3Path = data;
        }
      } catch (error) {
        console.error("Error uploading file to S3:", error);
        throw error;
      }
  
      return s3Path;
    }
  
  function getCroppedImage(image, crop, fileName) {
    
console.log(image)
console.log(crop)

    const imageCanvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    imageCanvas.width = crop.width;
    imageCanvas.height = crop.height;
    const imgCx = imageCanvas.getContext("2d");


    //image.onload = () => { 
      //alert(1)
      imgCx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );
    //}
    
console.log(imageCanvas)



// Set the crossOrigin attribute to "Anonymous" to avoid CORS issues
image.crossOrigin = "Anonymous";
   
    console.log("getCroppedImage function called",image.src)
    
    return new Promise((resolve,reject) => {
      imageCanvas.toBlob(async (blob) => {
        if (!blob) {
          reject(new Error("the image canvas is empty"));
          return;
        }
        console.log("imageCanvas -->",imageCanvas)
        console.log("-------------",blob)
         blob.name = fileName;
         console.log("blob.name--------",blob.name)
         let imageURL;
         window.URL.revokeObjectURL(imageURL);
         imageURL = window.URL.createObjectURL(blob);
         console.log("imageURL --->",imageURL)
         resolve(imageURL);
         const file = new File([blob], props.profile.firstName+new Date().getMilliseconds()+".png") 
    
         console.log(file)
           let s3imageUrl= await uploadFile(file,props.profile.userId)
           
           props.setProfileImage("/accessdoc?filePath=" + s3imageUrl);
 
           const obj = {
                   ...props.profile,
                   imageUrl: s3imageUrl
                 };
                 console.log('state-->',obj);
                 props.setProfile([obj]);
        

         console.log("imageCanvas--->",imageCanvas)
      }, "image1/jpeg");

    });
  }
  

  console.log("imageUrl ==>",props.imageUrl)
  

  const handleCrop = async() =>{   
    imageCropComplete(crop)
    setHandlePrevImg(true);
    props.setCropPopup(false)
  }





const handleWithoutCrop = async () => {
  try {
    const file = await fetch(imgRef.current.src)
      .then((response) => response.blob())
      .then((blob) => {
        const fileName = props.profile.firstName + new Date().getMilliseconds() + ".png";
        return new File([blob], fileName);
      });

    console.log(file);

    let s3imageUrl = await uploadFile(file, props.profile.userId);
    console.log(s3imageUrl, "s3imageUrls3imageUrl");

    const updatedProfile = {
      ...props.profile,
      imageUrl: "/accessdoc?filePath=" + s3imageUrl
    };

    props.setProfileImage(updatedProfile.imageUrl);
    
    const obj = {
      ...props.profile,
      imageUrl: s3imageUrl
    };
    console.log('state-->',obj);
    props.setProfile([obj]);


    props.setCropPopup(false);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

  return (
    <div  >
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => handleClose()}
        ariaHideApp={false}
        className="modal-pop-back"
    
    
    >


        <Reject>
          <CloseImg src={Close} onClick={() => handleClose()} />
          <ContentWrap>
            <Header>Crop Image</Header>
             
            <UploadArea>


   <ReactCrop src={props.viewImage}
        crop={crop}        
        onChange={imageCrop}
        >
      <UserImg ref={imgRef} src={props.viewImage} height={'300px'} width={'560px'} onLoad={imageLoaded}/>
    </ReactCrop>

          <BtnWrap>
          <Button variant="outlineOrange" width="230px" text="Proceed without crop" onClick={() =>handleWithoutCrop()}  ></Button>
           <Button variant="solidOrange" width="130px" text="Crop & Save" onClick={() =>handleCrop()}></Button>
          </BtnWrap>


            </UploadArea>
          </ContentWrap>
         
        </Reject>
      </ReactModal>
     
    </div>
    
    
  );
}
