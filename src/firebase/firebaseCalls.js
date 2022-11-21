import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  auth,
} from "./firebase-config";
import Toast, { ErrorToast } from "react-native-toast-message";
export const signUp = async (email, password, name, setLoader) => {
  setLoader(true);
  createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      updateProfile(auth.currentUser, { displayName: name });
      Toast.show({
        type: "success",
        text1: `Hello, ${name} 👋`,
        text2: "Welcome to Quiet Mind",
      });
      setLoader(false);
      return response.user;
    })
    .catch((error) => {
      setLoader(false);
      Toast.show({
        type: "error",
        text1: `We encountered an error while creating your account`,
        text2: `Error: ${error.message}`,
      });
      console.log(error);
    });
};
export const signOutUser = async () => {
  signOut(auth)
    .then(() => {
      console.log("Signed Out");
      Toast.show({
        type: "success",
        text1: "Sign Out Successful",
        text2: `You have been signed out`,
      });
    })
    .catch((error) => {
      Toast.show({
        type: "error",
        text1: `We encountered an error while signing you out.`,
        text2: `Error: ${error.message}`,
      });
    });
};
export const signIn = async (email, password, setLoader) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      setLoader(false);
      Toast.show({
        type: "success",
        text1: `Hello, ${response.user.displayName} 👋`,
        text2: "Welcome back to Quiet Mind",
      });
    })
    .catch((error) => {
      setLoader(false);
      Toast.show({
        type: "error",
        text1: `We encountered an error while signing you in.`,
        text2: `Error: ${error.message}`,
      });
    });
};
