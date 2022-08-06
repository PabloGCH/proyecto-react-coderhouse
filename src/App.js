import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'

function App() {
	const [cartCount, setCartCount] = useState(0);
	const increaseCartCount = (amount) => {
		setCartCount(cartCount + amount);
	}

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar cartCount={cartCount}/>
					<Routes>
						<Route path='/' element={
							<ItemListContainer/>
						}/>
						<Route path="/category/:id" element={
							<ItemListContainer/>
						}/>
						<Route path='/item/:id' element={
							<ItemDetailContainer onAdd={increaseCartCount}/>
						}/>
					</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
