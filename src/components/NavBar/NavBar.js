import "./NavBar.css";

import CartWidget from "./CartWidget/CartWidget";
import {Link} from "react-router-dom";
import { useContext} from "react"
import { CartContext } from "../../context/CartContext.js";
const NavBar = () => {
	const {getQuantity} = useContext(CartContext);
	let quantity = getQuantity();
	return (
		<header>
			<nav className="NavBar">
				<div className="Brand">
					<Link className="BrandName" to={"/"}>Dungeon Board</Link>
				</div>
				<ul className="NavList">
					<li>
						<Link to={"/"}>Home</Link>
					</li>
					<li>
						<Link to={"category/dice"}>Dice</Link>
					</li>
					<li>
						<Link to={"category/miniatures"}>Miniatures</Link>
					</li>
					<li>
						{quantity > 0 &&
							<Link to={"cart"}>
								<CartWidget quantity={quantity}/>
							</Link>
						}
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default NavBar;
