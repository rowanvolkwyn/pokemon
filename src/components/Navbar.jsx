import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div id='nav'>
            <div id='left'>
                <p>My Team</p>
                <p>Poke Filter</p>
            </div>
            <div id='right'>
                <p>Rovo</p>
                <p>Logout</p>
            </div>
        </div>
    )
}

export default Navbar;