let firebasePromise=null;
let firestorePromise= null;

export const saveCollabRoomToFirebase = async (elements, roomId, roomKey) => {

  var response;
  try{
  const firebaseConfig = JSON.parse(process.env.APP_FIREBASE_CONFIG);
  console.log('firebaseConfig--', firebaseConfig);

  const firebase = (
    await import(/* webpackChunkName: "firebase" */ "firebase/app")
  ).default;

  firebase.initializeApp(firebaseConfig);

  const firestore = await loadFirestore();
  const db = firestore.firestore(); 

  console.log('db--', db);

  response = await storeData(db, elements, roomId, roomKey,firebase);
  console.log('response--', response);

  }catch(e){
    console.log('e--', e);
  }

  return response;
}

const loadFirestore = async () => {
  const firebase = await _getFirebase();
  if (!firestorePromise) {
    firestorePromise = import(
      /* webpackChunkName: "firestore" */ "firebase/firestore"
    );
  }
  if (firestorePromise !== true) {
    await firestorePromise;
    firestorePromise = true;
  }
  return firebase;
};

const _getFirebase = async () => {
  if (!firebasePromise) {
    firebasePromise = _loadFirebase();
  }
  return firebasePromise;
};

let isFirebaseInitialized = false;

const _loadFirebase = async () => {
  const firebase = (
    await import(/* webpackChunkName: "firebase" */ "firebase/app")
  ).default;

  if (!isFirebaseInitialized) {
    try {
      firebase.initializeApp(JSON.parse(process.env.APP_FIREBASE_CONFIG));
    } catch (error) {
      // trying initialize again throws. Usually this is harmless, and happens
      // mainly in dev (HMR)
      if (error.code === "app/duplicate-app") {
        console.warn(error.name, error.code);
      } else {
        throw error;
      }
    }
    isFirebaseInitialized = true;
  }

  return firebase;
};

const storeData = async (db, elements, roomId, roomKey,firebase) => {
    console.log('storeData Calling');

    // const citiesCol = collection(db, 'scenes');
    // console.log('citiesCol--', citiesCol);
    const docRef =  db.collection("scenes").doc(roomId);
    console.log('docRef--', docRef);

    const sceneDocument = await createFirebaseSceneDocument(db, elements, roomKey,firebase);
    console.log('sceneDocument', sceneDocument);

    console.log('roomId--', roomId);

    return db.runTransaction((transaction) => {

        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(docRef).then((sfDoc) => {
            console.log('sfDoc--', sfDoc.exists);
            if (!sfDoc.exists) {

                transaction.set(docRef, sceneDocument);

            }

        }).then(() => {
            console.log("Transaction successfully committed!");
            return "Transaction successfully committed!"
        }).catch((error) => {
            console.log("Transaction failed: ", error);
        });
    });
}


const createFirebaseSceneDocument = async (db,elements,roomKey,firebase) => {
let sceneVersion =getSceneVersion(elements);

const { ciphertext, iv } = await encryptElements(roomKey, elements);
return {
sceneVersion,
ciphertext: firebase.firestore.Blob.fromUint8Array(
  new Uint8Array(ciphertext),
),
iv: firebase.firestore.Blob.fromUint8Array(iv),
}
};

const getSceneVersion = (elements) =>
elements.reduce((acc, el) => acc + el.version, 0);

const encryptElements = async (key,elements) => {
const json = JSON.stringify(elements);
const encoded = new TextEncoder().encode(json);
const { encryptedBuffer, iv } = await encryptData(key, encoded);

return { ciphertext: encryptedBuffer, iv };
};

const encryptData = async (key,data) => {
const importedKey =
typeof key === "string" ? await getCryptoKey(key, "encrypt") : key;
const iv = createIV();
const buffer=
typeof data === "string"
  ? new TextEncoder().encode(data)
  : data instanceof Uint8Array
  ? data
  : data instanceof Blob
  ? await blobToArrayBuffer(data)
  : data;

// We use symmetric encryption. AES-GCM is the recommended algorithm and
// includes checks that the ciphertext has not been modified by an attacker.
const encryptedBuffer = await window.crypto.subtle.encrypt(
{
  name: "AES-GCM",
  iv,
},
importedKey,
buffer
);

return { encryptedBuffer, iv };
};
const getCryptoKey = (key, usage) =>
window.crypto.subtle.importKey(
"jwk",
{
  alg: "A128GCM",
  ext: true,
  k: key,
  key_ops: ["encrypt", "decrypt"],
  kty: "oct",
},
{
  name: "AES-GCM",
  length: 128,
},
false, // extractable
[usage],
);

const blobToArrayBuffer = (blob) => {
if ("arrayBuffer" in blob) {
return blob.arrayBuffer();
}
// Safari
return new Promise((resolve, reject) => {
const reader = new FileReader();
reader.onload = (event) => {
  if (!event.target?.result) {
    return reject(new Error("Couldn't convert blob to ArrayBuffer"));
  }
  resolve(event.target.result);
};
reader.readAsArrayBuffer(blob);
});
};


const createIV = () => {
const arr = new Uint8Array(12);
return window.crypto.getRandomValues(arr);
};


const generateRoomId = async () => {
const buffer = new Uint8Array(10);
window.crypto.getRandomValues(buffer);
return bytesToHexString(buffer);
};

export const generateCollaborationLinkData = async () => {
const roomId = await generateRoomId();
const roomKey = await generateEncryptionKey();

if (!roomKey) {
throw new Error("Couldn't generate room key");
}

return { roomId, roomKey };
};

const bytesToHexString = (bytes) => {
return Array.from(bytes)
.map((byte) => `0${byte.toString(16)}`.slice(-2))
.join("");
};


const generateEncryptionKey = async () =>{
let key = await window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 128,
  },
  true,
  ["encrypt", "decrypt"]
);
return (await window.crypto.subtle.exportKey("jwk", key)).k;
};

export const saveFilesToFirebase = async (addedFiles,roomId,roomKey) =>{


    let firebaseConfig = process.env.APP_FIREBASE_CONFIG;

    const firebaseApp = firebase.initializeApp(firebaseConfig);
//const storage = getStorage(firebaseApp);

 var storage = firebaseApp.storage(firebaseConfig.storageBucket);
 //var storageRef = storage.ref();
 //console.log('storageRef--',storageRef);
 
 //var roomRef = storageRef.child('/files/rooms');
 // console.log('roomRef--',roomRef);
  
  
 let files=await encodeFilesForUpload(addedFiles,roomKey,3 * 1024 * 1024);
 
  await Promise.all(
    files.map(async ({ id, buffer }) => {
      try {
         
          let path = '/files/rooms/'+roomId+'/'+id;
           console.log('path--',path);
        await storage
          .ref(path)
          .put(
            new Blob([buffer], {
              type: "application/octet-stream",
            })
          );
      } catch (error) {
            console.log('error--',error);	
 
      }
    }),
  );
 
}


const encodeFilesForUpload = async (
files,
encryptionKey,
maxBytes,
) => {
const processedFiles =[] ;

console.log('files--',files);

for (const key in files) {
  
 let fileData=files[key];
   console.log('fileData--',fileData);
   
   let id = fileData.id;

const buffer = new TextEncoder().encode(fileData.dataURL);

const encodedFile = await compressData(buffer, {
  encryptionKey,
  metadata: {
    id,
    mimeType: fileData.mimeType,
    created: Date.now(),
    lastRetrieved: Date.now(),
  },
});

if (buffer.byteLength > maxBytes) {
  throw new Error(
    t("errors.fileTooBig", {
      maxSize: `${Math.trunc(maxBytes / 1024 / 1024)}MB`,
    }),
  );
}

processedFiles.push({
  id,
  buffer: encodedFile,
});
}

return processedFiles;
}
const compressData = async (
dataBuffer,
options
) => {
const fileInfo = {
version: 2,
compression: "pako@1",
encryption: "AES-GCM",
};

const encodingMetadataBuffer = new TextEncoder().encode(
JSON.stringify(fileInfo),
);

const contentsMetadataBuffer = new TextEncoder().encode(
JSON.stringify(options.metadata || null),
);

const { iv, buffer } = await _encryptAndCompress(
concatBuffers(contentsMetadataBuffer, dataBuffer),
options.encryptionKey,
);

return concatBuffers(encodingMetadataBuffer, iv, buffer);
};

const _encryptAndCompress = async (
data,
encryptionKey
) => {
const { encryptedBuffer, iv } = await encryptData(
encryptionKey,
pako.deflate(data),
);

return { iv, buffer: new Uint8Array(encryptedBuffer) };
};


const concatBuffers = (...buffers) => {
const bufferView = new Uint8Array(
4 +
  4 * buffers.length +
  buffers.reduce((acc, buffer) => acc + buffer.byteLength, 0),
);

let cursor = 0;

// as the first chunk we'll encode the version for backwards compatibility
dataView(bufferView, 4, cursor, 1);
cursor += 4;

for (const buffer of buffers) {
dataView(
  bufferView,
  4,
  cursor,
  buffer.byteLength,
);
cursor += 4;

bufferView.set(buffer, cursor);
cursor += buffer.byteLength;
}

return bufferView;
};

const DATA_VIEW_BITS_MAP = { 1: 8, 2: 16, 4: 32 };
function dataView(
buffer,
bytes,
offset,
value,
){
if (value != null) {
if (value > Math.pow(2, DATA_VIEW_BITS_MAP[bytes]) - 1) {
  throw new Error(
    `attempting to set value higher than the allocated bytes (value: ${value}, bytes: ${bytes})`,
  );
}
const method = `setUint${DATA_VIEW_BITS_MAP[bytes]}`;
new DataView(buffer.buffer)[method](offset, value);
return buffer;
}
const method = `getUint${DATA_VIEW_BITS_MAP[bytes]}`;
return new DataView(buffer.buffer)[method](offset);
}

export const saveTablesToFirebase = async (table,roomId,roomKey) =>{
	
	
	let firebaseConfig = JSON.parse(atob(process.env.APP_FIREBASE_CONFIG));	
	const firebaseApp = firebase.initializeApp(firebaseConfig);
    //const storage = getStorage(firebaseApp);

	 var storage = firebaseApp.storage(firebaseConfig.storageBucket);
	 //var storageRef = storage.ref();
	 //console.log('storageRef--',storageRef);
	 
	 //var roomRef = storageRef.child('/files/rooms');
	 // console.log('roomRef--',roomRef);
	  
	  
	 let tables=await encodeTablesForUpload(table,roomKey,3 * 1024 * 1024);
	 
	  await Promise.all(
		tables.map(async ({ id, buffer }) => {
		  try {
			 
			  let path = '/tabledata/rooms/'+roomId+'/'+id;
			  await storage
			  .ref(path)
			  .put(
				new Blob([buffer], {
				  type: "application/octet-stream",
				})
			  );
		    } catch (error) {
				console.log('error--',error);	
	 
		  }
		}),
	  );
	 
}

const encodeTablesForUpload = async (
  table,
  encryptionKey,
  maxBytes,
) => {
  const processedFiles =[] ;

  for (const key in table) {
	  
	 let tableData=table[key];
	   let id = tableData.id;

    const buffer = new TextEncoder().encode(tableData.data);

    const encodedFile = await compressData(buffer, {
      encryptionKey,
      metadata: {
        id,
       // mimeType: fileData.mimeType,
        created: Date.now(),
        lastRetrieved: Date.now(),
      },
    });

    if (buffer.byteLength > maxBytes) {
      throw new Error(
        t("errors.fileTooBig", {
          maxSize: `${Math.trunc(maxBytes / 1024 / 1024)}MB`,
        }),
      );
    }

    processedFiles.push({
      id,
      buffer: encodedFile,
    });
  }

  return processedFiles;
}

