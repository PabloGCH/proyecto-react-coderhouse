import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext.js"

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import CartContainer from './components/CartContainer/CartContainer.js';
import CheckOut from "./components/CheckOut/CheckOut.js";

function App() {
	return (
		<div className="App">
			<CartContextProvider>
				<BrowserRouter>
					<NavBar/>
					<Routes>
						<Route path='/' element={
							<ItemListContainer/>
						}/>
						<Route path="/category/:id" element={
							<ItemListContainer/>
						}/>
						<Route path='/item/:id' element={
							<ItemDetailContainer/>
						}/>
						<Route path='/cart' element={
							<CartContainer/>
						}/>
						<Route path='/purchase' element={
							<CheckOut/>
						}/>
					</Routes>
				</BrowserRouter>
			</CartContextProvider>
		</div>
	);
}

export default App;
