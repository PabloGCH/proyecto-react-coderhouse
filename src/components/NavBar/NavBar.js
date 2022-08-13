import "./NavBar.css";

import CartWidget from "./CartWidget/CartWidget";
import {Link} from "react-router-dom";

const NavBar = () => {

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
						<a href="#">
							<CartWidget/>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default NavBar;
