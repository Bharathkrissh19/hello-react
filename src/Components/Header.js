import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div>
          <img
            src={LOGO_URL}
            className="logo"
          />
        </div>
        <div className="nav-bar">
          {/* <div className="aboveNav">
                  Mana Inti Ruchulu
              </div> */}
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;