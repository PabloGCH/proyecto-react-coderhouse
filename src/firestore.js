// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, query, where, getDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqou4RPHNXsIKB7PlYjyYRLiSruwkev9k",
  authDomain: "dungeon-board.firebaseapp.com",
  projectId: "dungeon-board",
  storageBucket: "dungeon-board.appspot.com",
  messagingSenderId: "537206271706",
  appId: "1:537206271706:web:e68fe6fbfea7d0ecbf7fe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();


export const getProducts = () => {
	return getDocs(collection(db, "Products"))
	
}
export const getProduct = (id) => {
	return getDoc(doc(db, "Products", id));
	
}
export const getProductsByCategory = (category) => {
	return getDocs(query(collection(db, "Products"), where("category", "==", category)))
}
