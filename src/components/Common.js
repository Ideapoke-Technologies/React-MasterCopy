import {saveCollabRoomToFirebase,generateCollaborationLinkData,saveFilesToFirebase,saveTablesToFirebase} from "../components/LeftMenu/FirebaseConnectivity";


//To Validate emailid
export function emailValidation(id, labelname, required, domain, otherdomain) {
	var txtstr = document.getElementById(id).value;
	txtstr = txtstr.replace(/[,;]$/, "");
	txtstr = txtstr.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
	txtstr = txtstr.replace(/\s+/g, "");
	var i = 0;
	var foundspace = true;
	var replacestr = "";
	/* Trunkating space at first place */
	while (foundspace == true) {
		if (txtstr.charAt(i) != " ") {
			foundspace = false;
		} else if (txtstr.charAt(i) == " ") {
			replacestr = replacestr + txtstr.charAt(i);
		}
		i++;
	}
	txtstr = txtstr.replace(replacestr, "");
	document.getElementById(id).value = txtstr;
	var emailID = document.getElementById(id).value;
	var userdomain;
	if (required == "Y" || trim(emailID, "") != "") {
		var arr1 = emailID.split("@");

		if (arr1.length > 1) {
			emailID = trim(emailID, "");
			if (domain != "") {
				userdomain = emailID.substring(emailID.indexOf("@") + 1);
				if (echecks(emailID) == false) {
					return false;
				}
				if (domain.indexOf(userdomain) >= 0 || otherdomain.indexOf(userdomain) >= 0) {
				} else {
					return false;
				}
			} else {
				if (echecks(emailID) == false) {
					return false;
				}
			}
		} else {
			return false;
		}
	}
	return true;
}

export function trim(str) {
	try {
		str = str.replace(/ /g, "");
	} catch (error) { }
	return str;
}

function echecks(str) {
	//var reg = /^(?!.*\.{2})([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;//niharika - 18-3-2020
	var reg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gim;
	var address = str;
	var i = 0;
	var foundspace = true;
	var replacestr = "";
	/* Trunkating space at first place */
	while (foundspace == true) {
		i = address.length;
		if (address.charAt(i) != " ") {
			foundspace = false;
		} else if (address.charAt(i) == " ") {
			replacestr = replacestr + address.charAt(i);
		}
		i--;
	}
	address = address.replace(replacestr, "");
	if (reg.test(address) == false) {
		return false;
	}
	return true;
}

//methods to get the geolocation of the user 
export async function getUserGeolocationInfo() {

	var device = isMobile() ? 'Mobile' : 'Desktop';
	var browser = getBrowserinfo();
	var browsername = browser.split("/");

	var usrgeolocationdto = {};

	const data = await getGeolocationApiDetails();

	if (data.ip) {
		var usrgeolocationinfo = data.ip + "," + data.country_name + "," + data.city + "," + data.state_prov + "," + data.zipcode;
		var usragentinfo = browsername[0] + " " + browsername[1];

		usrgeolocationdto = {
			usrgeolocation: usrgeolocationinfo,
			usripaddress: data.ip,
			usergeoportal: device,
			usergeouseragent: usragentinfo,
			countrycode: data.country_code2,
			timezone: data.time_zone.name
		};
	}


	return usrgeolocationdto;
}

async function getGeolocationApiDetails() {

	const url = "https://api.ipgeolocation.io/ipgeo?apiKey=" + process.env.GEO_API_KEY;

	const response = await fetch(url, {
		method: "GET",
		dataType: "json",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();
	return data;
}

//To get the device details
function isMobile() {
	return /Mobi/.test(navigator.userAgent);
}

//To get the browser details
export function getBrowserinfo() {
	const userAgent = navigator.userAgent;
	var browser = "unkown";
	// Detect browser name


	browser = (/ucbrowser/i).test(userAgent) ? 'UCBrowser' : browser;
	browser = (/edg/i).test(userAgent) ? 'Edge' : browser;
	browser = (/googlebot/i).test(userAgent) ? 'GoogleBot' : browser;
	browser = (/chromium/i).test(userAgent) ? 'Chromium' : browser;
	browser = (/firefox|fxios/i).test(userAgent) && !(/seamonkey/i).test(userAgent) ? 'Firefox' : browser;
	browser = (/; msie|trident/i).test(userAgent) && !(/ucbrowser/i).test(userAgent) ? 'IE' : browser;
	browser = (/chrome|crios/i).test(userAgent) && !(/opr|opera|chromium|edg|ucbrowser|googlebot/i).test(userAgent) ? 'Chrome' : browser;;
	browser = (/safari/i).test(userAgent) && !(/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i).test(userAgent) ? 'Safari' : browser;
	browser = (/opr|opera/i).test(userAgent) ? 'Opera' : browser;

	//browserVersionIE(userAgent,/(trident)\/([\d\.]+)/i);
	if (browser == "UCBrowser") {

		var paramvalue = /(UCBrowser)\/([\d\.]+)/i;
		//var value = userAgent.match(paramvalue) ? userAgent.match(paramvalue)[2] : null;
		var version = "";
		if (userAgent.match(paramvalue)[2] != null) {
			version = userAgent.match(paramvalue)[2];
		}
		var result = browser + "/" + version;
		return result;
	} else if (browser == "Edge") {

		var paramvalue = /(Edg)\/([\d\.]+)/i;
		//var value = userAgent.match(paramvalue) ? userAgent.match(paramvalue)[2] : null;
		var version = "";
		if (userAgent.match(paramvalue)[2] != null) {
			version = userAgent.match(paramvalue)[2];
		}
		var result = browser + "/" + version;
		return result;
	} else if (browser == "GoogleBot") {

		var paramvalue = /(GoogleBot)\/([\d\.]+)/i;
		//var value = userAgent.match(paramvalue) ? userAgent.match(paramvalue)[2] : null;
		var version = "";
		if (userAgent.match(paramvalue)[2] != null) {
			version = userAgent.match(paramvalue)[2];
		}
		var result = browser + "/" + version;
		return result;
	} else if (browser == "Chromium") {

		var paramvalue = /(Chromium)\/([\d\.]+)/i;
		//var value = userAgent.match(paramvalue) ? userAgent.match(paramvalue)[2] : null;
		var version = "";
		if (userAgent.match(paramvalue)[2] != null) {
			version = userAgent.match(paramvalue)[2];
		}
		var result = browser + "/" + version;
		return result;
	} else if (browser == "Firefox") {

		var paramvalue = /(Firefox)\/([\d\.]+)/i;
		var version = "";
		//var value = userAgent.match(paramvalue) ? userAgent.match(paramvalue)[2] : null;
		if (userAgent.match(paramvalue)[2] != null) {
			version = userAgent.match(paramvalue)[2];
		}
		var result = browser + "/" + version;
		return result;
	} else if (browser == "Chrome") {

		var paramvalue = /(Chrome)\/([\d\.]+)/i;
		//var value = userAgent.match(paramvalue) ? userAgent.match(paramvalue)[2] : null;
		var version = "";
		if (userAgent.match(paramvalue) != null) {
			version = userAgent.match(paramvalue)[2];
		}
		var result = browser + "/" + version;
		return result;

	} else if (browser == "Safari") {

		var paramvalue = /(Safari)\/([\d\.]+)/i;
		//var value = userAgent.match(paramvalue) ? userAgent.match(paramvalue)[2] : null;
		var version = "";
		if (userAgent.match(paramvalue)[2] != null) {
			version = userAgent.match(paramvalue)[2];
		}
		var result = browser + "/" + version;
		return result;
	} else if (browser == "Opera") {

		var paramvalue = /(OPR)\/([\d\.]+)/i;
		//var value = userAgent.match(paramvalue) ? userAgent.match(paramvalue)[2] : null;
		var version = "";
		if (userAgent.match(paramvalue)[2] != null) {
			version = userAgent.match(paramvalue)[2];
		}
		var result = browser + "/" + version;
		return result;
	} else if (browser == "IE") {

		var paramvalue = /(Trident)\/([\d\.]+)/i;
		//var value = userAgent.match(paramvalue) ? userAgent.match(paramvalue)[2] : null;
		var version = "";
		if (userAgent.match(paramvalue)[2] != null) {
			version = userAgent.match(paramvalue)[2];
		}
		var result = browser + "/" + version;
		return result;
	}
}

//To Capitalize 1st letter
export function Capitalise(str) {
	if (str && str.charAt(0)) {
		const title = str.charAt(0).toUpperCase() + str.slice(1);
		return title;
	}
}


export function generateRandomId(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export function signalCheckOtherLanguageInput(strtext) {
	var punctRE = /[\u2000-\u206F\u2E00-\u2E7F]/g;
	var spaceRE = /\s+/g;
	var punctext = strtext.replace(punctRE, "").replace(spaceRE, " ");
	if (punctext.length != strtext.length) {
		// saveOtherLangText(punctext,'');
	}
	strtext = punctext;
	var rem = new RegExp("^[\x00-\x7F\xA0-\xFF]+$");
	for (var i = 0; i < strtext.length; i++) {
		var resultm = rem.test(strtext.charAt(i));
		if (resultm == false) {
			// saveOtherLangText('',strtext);
			//responsemessage('error','Only English language input is supported');
			return false;
		}
	}

	return resultm;
}


//to get base64 url from the image
export function toDataURL(src, callback) {
	var dataURL = "";
	var image = new Image();
	image.crossOrigin = 'Anonymous';
	image.onload = function () {
		var canvas = document.createElement('canvas');
		var context = canvas.getContext('2d');
		canvas.height = this.naturalHeight;
		canvas.width = this.naturalWidth;
		context.drawImage(this, 0, 0);
		dataURL = canvas.toDataURL('image/jpeg');
		callback(dataURL);
		return dataURL;
	};
	image.src = src;

}

export function trimWithFullWord(content, noOfCharacter) {
	var trimContent = content;
	if (!(name === undefined)) {
		noOfCharacter = parseInt(noOfCharacter, 10);
		if (content.length > 0) {
			content = content.trim();
			var cut = content.indexOf(' ', noOfCharacter);

			if (cut == -1 && content.indexOf(' ') != -1) {
				cut = content.length;
			}
			if (cut == -1) return content;
			trimContent = content.substring(0, cut);
			trimContent = trimContent.trim();
			if (trimContent.length > noOfCharacter) {
				var lastword = trimContent.lastIndexOf(" ");
				if (noOfCharacter - lastword < trimContent.length - noOfCharacter) {
					trimContent = trimContent.substring(0, lastword);
				}
				return trimContent + " ...";
			}
		}
	}
	return trimContent;
}

export function checkPublicDomain(emailid) {

	var cmnrepublicdomain = ",yahoo.com.ar,yahoo.com.au,yahoo.at,yahoo.be,yahoo.com.br,yahoo.en,yahoo.ca,yahoo.com.cn,yahoo.cn,yahoo.dk,yahoo.fi,yahoo.fr,yahoo.de,yahoo.gr,yahoo.com.hk,yahoo.co.in,yahoo.com,yahoo.ie,yahoo.co.il,yahoo.it,yahoo.co.jp,yahoo.co.kr,yahoo.com.my,yahoo.com.mx,yahoo.ae,yahoo.nl,yahoo.co.nz,yahoo.no,yahoo.com.ph,yahoo.pl,yahoo.pt,yahoo.ro,yahoo.ru,yahoo.com.sg,yahoo.co.za,yahoo.es,yahoo.se,yahoo.ch,yahoo.com.tw,yahoo.co.th,yahoo.com.tr,yahoo.co.uk,yahoo.com.vn,rocketmail.com,ymail.com,yahoo.in,gmail.com,hotmail.com,hotmail.it,live.com,live.in,msn.com,hotmail.fr,rediffmail.com,yahoo.co.id,yahoo.fr,hotmail.co.uk,";
	var domainchkft = trim(emailid, '');
	var domainchkftemp = domainchkft.split("@");
	if (cmnrepublicdomain.indexOf(domainchkftemp[1].toLowerCase()) >= 0) {
		return true;
	} else {
		return false;
	}
}

export const checkEmailValidation = (value) => {
	var reg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;

	if (reg.test(value) == false) {
		return false;
	}

	return true;
}

export const getURLValue = (urlParam) => {

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	let value = urlParams.get(urlParam);

	return value;
}


export function checkIfPageExist() {
	if (window.location.href.includes('/design/dashboard.html') || window.location.href.includes('/design/help.html') ||
		window.location.href.includes('/design/profile.html') || window.location.href.includes('/design/account.html') ||
		window.location.href.includes('/design/notification.html') || window.location.href.includes('/design/collaborators.html') ||
		window.location.href.includes('/design/activities.html') || window.location.href.includes('/design/requestaccess') ||
		window.location.href.includes('/design/noaccess')) {
		return true;
	} else {
		return false;
	}
}

export const saveOrUpdateRequirement = async (userid,networkId, templateid) => {;


	const reqmasterrequest = {
		arid: 0,//association table
		radarid: 0,//master table
		networkid: networkId,//association table
		title: "New Design requirement",//master table
		description: "",//master table
		templateid: templateid,
		accesstype: "Private",
		intiateprocess: 0,
		stage: 0,
		createdby: userid,//userid
		customeraccess: "3",
		iscollaboration: "1",
		flag: "Y",
		reqfiles: [],
		startdate: "",
		enddate: "",
		imageurl: "",
		amid: 0,
		labelmessage: "",
		pstatus: "",
		accessuser: "CUSTOMER",
		displayflag: "",
		associatearid: 0,
		scoppingstatus: "",
		selecteditems: "",
		sourcearid: null,
		refreshduration: null,
		isupdate: "N",
		isPersonal: "Y"
	};
	console.log(reqmasterrequest);
	const url =
		process.env.COMMON_SERVICE_URL + '/requirement/saveorupdate';

	return await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(reqmasterrequest),
	}).then((response) => response.json());

};


/*const generateRoomId = () => {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const length = 10;
	let roomId = "";
  
	for (let i = 0; i < length; i++) {
	  const randomIndex = Math.floor(Math.random() * characters.length);
	  roomId += characters.charAt(randomIndex);
	}
	console.log('generateRoomId roomId--', roomId);
  
	return bytesToHexString(roomId);
  };*/

  const bytesToHexString = (bytes) => {
	return Array.from(bytes)
	  .map((byte) => `0${byte.toString(16)}`.slice(-2))
	  .join("");
  };
  
 const ROOM_ID_BYTES = 10;
 const generateRoomId = async () => {
 	const buffer = new Uint8Array(ROOM_ID_BYTES);
 	window.crypto.getRandomValues(buffer);
 	return bytesToHexString(buffer);
 };

const generateEncryptionKey = async (
	returnAs = "string"
  ) => {
	const ENCRYPTION_KEY_BITS = 256;
	const key = await window.crypto.subtle.generateKey(
	  {
		name: "AES-GCM",
		length: ENCRYPTION_KEY_BITS,
	  },
	  true, // extractable
	  ["encrypt", "decrypt"]
	);
  
	if (returnAs === "cryptoKey") {
	  return key;
	} else {
	  const exportedKey = await window.crypto.subtle.exportKey("jwk", key);
	  return exportedKey.k;
	}
  };

  export const saveOrUpdateDesign = async (userid, networkid, templateId, roomCredential, templateName, datatype, language, arid) => {

    let designbrief = "";
    let imageUrl = "";

    let apiURL = "createdesign";
	 
    let designObj = {
      userid: Number(userid),
      templateId: templateId,
      networkid: networkid,
      arid: Number(arid),
      roomId: roomCredential,
      designname: templateName,
      designbrief: designbrief,
      designimage: imageUrl,
      designdata: "",
      language: language,
      status: "P",
      sourceDesignId: "",
    };
    console.log("designObj--", designObj);

    const url = process.env.APP_RDT_SERVICE_URL + "/rdt/communitydesign/" + apiURL;

    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(designObj),
    }).then((response) => response.json());
  };

 export const publishNewDesign = async (userid,networkid,templateId,type,templateData,templateName) => {

   let promise = saveOrUpdateRequirement(
     userid,
     networkid,
     templateId
   ); //call controller
   promise.then(async (response) => {
     console.log("response--", response);

     console.log("response.arid--", response.arid);
     let arid = response.arid;

     if (response) {
       let roomId;
       let roomKey;

       ({ roomId, roomKey } = await generateCollaborationLinkData());
       let roomCredential = roomId + "," + roomKey;
       console.log("roomCredential--", roomCredential);

		 if(templateData){
			let elements = templateData.elements;
			let files = templateData.files;			
			let table = templateData.tabledata;
			console.log("elements--", elements);

			let response = await saveCollabRoomToFirebase(elements, roomId, roomKey);
			console.log("response--", response);
			
			// let filesresponse = await saveFilesToFirebase(files,roomId,roomKey);
			// console.log('filesresponse--',filesresponse);
			
			// let tableresponse = await saveTablesToFirebase(table,roomId,roomKey);
			// console.log('tableresponse--',tableresponse);
		 }else{
			let response = await saveCollabRoomToFirebase([{}], roomId, roomKey);
			console.log("response--", response);

		 }

       let promise = saveOrUpdateDesign(
         userid,
         networkid,
         templateId,
         roomCredential,
         templateName,
         "",
         "en",
         arid
       );
       promise.then((response) => {
         if (response) {
           console.log("saveOrUpdateDesign response", response);
           console.log("response designid", response[0].designId);
           console.log(
             "URL",
             process.env.RDT_URL +
               "?type=" +
               type +
               " &designid=" +
               response[0].designId +
               "#room=" +
               roomCredential
           );

           setTimeout(() => {
             if (process.env.RDT_URL) {
					if(templateId){
						window.location.href =
						  process.env.RDT_URL +
						  "?type=" +
						  window.btoa(type) +
						  "&designid=" +
						  window.btoa(response[0].designId) +
						  "&templateid=" +
						  window.btoa(templateId) +
						  "&arid=" +
						  window.btoa(arid) +
						  "#room=" +
						  roomCredential;
					}else{
						window.location.href =
						  process.env.RDT_URL +
						  "?type=" +
						  window.btoa(type) +
						  "&designid=" +
						  window.btoa(response[0].designId) +
						  "&arid=" +
						  window.btoa(arid) +
						  "#room=" +
						  roomCredential;
					}
             }
           }, 1500);
         }
       });
       // }
     }
   });
 };
 