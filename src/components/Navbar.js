import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { FaSun, FaMoon } from "react-icons/fa"; // Dark mode icons
import "./navbarstyles.css";

class Navbar extends Component {
  state = { 
    clicked: false,
    isDarkMode: false // Dark mode state
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  toggleDarkMode = () => {
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }), () => {
      if (this.state.isDarkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">ᐯᗩᑕᗩTIOᑎEEᖇ</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Dark Mode Toggle Button */}
        <button className="dark-mode-toggle" onClick={this.toggleDarkMode}>
          {this.state.isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    );
  }
}

export default Navbar;
