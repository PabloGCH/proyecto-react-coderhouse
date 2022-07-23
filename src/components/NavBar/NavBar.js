import "./NavBar.css";

import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
	return (
		<nav className="NavBar">
			<div className="Brand">
				<span>Dungeon Board</span>
			</div>
			<ul className="NavList">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Board Games</a>
				</li>
				<li>
					<a href="#">Dice</a>
				</li>
				<li>
					<a href="#">Miniatures</a>
				</li>
				<li>
					<a href="#">
						<CartWidget quantity="4"/>
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar;
