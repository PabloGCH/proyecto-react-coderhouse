import "./PurchaseForm.css"
import { useEffect, useState } from "react";


const PurchaseForm = ({setDataFunc}) => {
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAdress] = useState("");
	const [validForm, setValidForm] = useState(false);
	const [failedSubmit, setFailedSubmit] = useState(false);


	useEffect(() => {
		if(name != "" && lastname != "" && phone != "" && address != "") {
			setValidForm(true);
		} else{
			setValidForm(false);
		}
	}, [name, lastname, phone, address])


	const handleSubmit = () => {
		if(validForm) {
			setDataFunc({
				firstName: name,
				lastName: lastname,
				phone: phone,
				address: address
			});
		} else {
			setFailedSubmit(true);
		}
	};

	return (
		<form className="purchaseForm">
			<label for="name">Name:</label>
			<input onChange={(e) => setName(e.target.value)} id="name" placeholder="name"></input>
			<label for="lastname">Last name:</label>
			<input onChange={(e) => setLastname(e.target.value)} id="lastname" placeholder="Lastname"></input>
			<label for="phone">Name:</label>
			<input onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="1231414"></input>
			<label for="address">Address:</label>
			<input onChange={(e) => setAdress(e.target.value)} id="address" placeholder="Street 2"></input>
			{failedSubmit && <p className="error">*All fields are required</p>}
			<button type="button" onClick={handleSubmit}>Submit</button>
		</form>
	)
}

export default PurchaseForm;
