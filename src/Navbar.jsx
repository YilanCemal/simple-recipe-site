import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { React ,useState, useEffect } from "react";
import "./Navbar.css";
import { GiCookingPot } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";


const Navbar = () => {

  const [click ,setClick] = useState(false)

  const [button ,setButton] = useState(true)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    }
    else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize' , showButton);


  return (
    <>
    <IconContext.Provider value={{ color:"#09bef0" }}> 
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            
            Home

            {/* <GiCookingPot className="navbar-icon" onClick={closeMobileMenu} />  */}
            
            </Link>
            <div className="menu-icon" onClick={handleClick}> {click ? <FaTimes /> : <FaBars />}</div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>

              <li className="nav-item">
                <NavLink to="/first" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                Recipes
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                Special Diets 
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                Drinks
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/sign-up" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                Baking & Desserts
                </NavLink>
              </li>
            </ul>
        </div>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
