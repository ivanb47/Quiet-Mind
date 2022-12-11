import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  auth,
  firebase,
} from "./firebase-config";
import Toast, { ErrorToast } from "react-native-toast-message";
export const signUp = async (email, password, name, setLoader) => {
  setLoader(true);
  createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      updateProfile(auth.currentUser, { displayName: name });
      const user = {
        id: response.user.uid,
        email: email,
        name: name,
      };
      saveUser(user);
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
        text1: `Encountered an error while creating account`,
        text2: `Error: ${error.message}`,
      });
      console.log(error);
    });
};
export const signOutUser = async () => {
  signOut(auth)
    .then(() => {
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
      if (response.user) {
        Toast.show({
          type: "success",
          text1: `Hello, ${response.user.displayName} 👋`,
          text2: "Welcome back to Quiet Mind",
        });
      }
    })
    .catch((error) => {
      setLoader(false);
      console.log(error.message == "Firebase: Error (auth/user-not-found).");

      error.message == "Firebase: Error (auth/invalid-email)."
        ? showToast("invalid email")
        : error.message == "Firebase: Error (auth/wrong-password)."
        ? showToast("wrong password")
        : error.message == "Firebase: Error (auth/user-not-found)."
        ? showToast("user not found")
        : showToast(error.message.split("Firebase: "));
    });
};
const showToast = (message) => {
  Toast.show({
    type: "error",
    text1: `We encountered an error while signing you in.`,
    text2: message,
  });
};
const usersRef = firebase.firestore().collection("users");
export const saveUser = async (user) => {
  await usersRef.doc(user.id).set(user);
};
export const fetchUser = async () => {
  const user = await usersRef.doc(auth.currentUser.uid).get();
  return user.data();
};
export const addFavoriteAdvice = (adviceID, setIsFavorite) => {
  usersRef
    .doc(auth.currentUser.uid)
    .update({
      favoriteAdvice: firebase.firestore.FieldValue.arrayUnion(adviceID),
    })
    .then(() => {
      setIsFavorite(true);
      Toast.show({
        type: "success",
        text1: "Added to Favorites",
      });
    })
    .catch((error) => {
      Toast.show({
        type: "error",
        text1: `We encountered an error while adding this advice to your favorites.`,
        text2: `Error: ${error.message}`,
      });
      console.log("error", error);
    });
};
export const removeFavoriteAdvice = (adviceID, setIsFavorite) => {
  usersRef
    .doc(auth.currentUser.uid)
    .update({
      favoriteAdvice: firebase.firestore.FieldValue.arrayRemove(adviceID),
    })
    .then(() => {
      setIsFavorite(false);
      Toast.show({
        type: "success",
        text1: "Removed from Favorites",
      });
    })
    .catch((error) => {
      Toast.show({
        type: "error",
        text1: `We encountered an error while removing this advice from your favorites.`,
        text2: `Error: ${error.message}`,
      });
      console.log("error", error);
    });
};
export const subscribeFavoriteAdvices = (callback) => {
  usersRef.doc(auth.currentUser.uid).onSnapshot((querySnapshot) => {
    callback(querySnapshot.data());
  });
};
