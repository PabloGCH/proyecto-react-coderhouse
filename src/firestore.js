// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, query, where, getDoc, doc, addDoc, documentId, writeBatch } from "firebase/firestore";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const fsCreateOrder = async (object) => {
	const ids = object.items.map(prod => prod.id);
	const productsRef = collection(db, "Products");
	const orderRef = collection(db, "Orders");
	
	const snapshot = await getDocs(query(productsRef, where(documentId(), "in", ids)));
	const {docs} = snapshot;


	const outOfStock = [];

	const batch = writeBatch(db);

	docs.forEach(doc => {
		const dataDoc = doc.data();
		const stockDb = dataDoc.stock;
		const productAdded = object.items.find(prod => prod.id == doc.id);
		if(stockDb >= productAdded.quantity) {
			batch.update(doc.ref, {stock: stockDb - productAdded.quantity});
		} else {
			outOfStock.push({id: doc.id, ...dataDoc});
		}
		
	})
	let result;
	if(outOfStock.length == 0) {
		batch.commit();
		result = [true, addDoc(orderRef, object)];
	} else {
		result = [false, outOfStock];
	}
	console.log(result);
	return result;
}

export const getProducts = () => {
	return getDocs(collection(db, "Products"))
	
}
export const getProduct = (id) => {
	return getDoc(doc(db, "Products", id));
	
}
export const getProductsByCategory = (category) => {
	return getDocs(query(collection(db, "Products"), where("category", "==", category)))
}
