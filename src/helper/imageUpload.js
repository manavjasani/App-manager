// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { storage } from "../firebaseConfig";

// export const fileUpload = (image) => {
//   const storageRef = ref(storage, `/images/${image.name}`);
//   const uploadTask = uploadBytesResumable(storageRef, image);

//   const imageUpload = uploadTask.on(
//     "state_changed",
//     console.log("res"),
//     (err) => console.log(err),
//     () => {
//       getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
//     }
//   );
//   return imageUpload;
// };
