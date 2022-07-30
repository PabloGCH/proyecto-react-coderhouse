import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
	const [cartCount, setCartCount] = useState(0);
	const increaseCartCount = (amount) => {
		setCartCount(cartCount + amount);
	}

	return (
		<div className="App">
			<NavBar cartCount={cartCount}/>
			<ItemListContainer onAdd={increaseCartCount}/>		
		</div>
	);
}

export default App;
