import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJlOJoO-Xtt2M11iWCcKzGNcpQgdQ3EqM",
  authDomain: "citystoreapp-c6088.firebaseapp.com",
  databaseURL: "https://citystoreapp-c6088-default-rtdb.firebaseio.com",
  projectId: "citystoreapp-c6088",
  storageBucket: "citystoreapp-c6088.appspot.com",
  messagingSenderId: "1086377314916",
  appId: "1:1086377314916:web:198fe12495c9d7f8b86d71",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
