import Logo from "../../images/logo.svg";
import todoIcon from "../../images/icon-todo.svg";
import calendarIcon from "../../images/icon-calendar.svg";
import remindersIcon from "../../images/icon-reminders.svg";
import planningIcon from "../../images/icon-planning.svg";
import arrowDown from "../../images/icon-arrow-down.svg";
import closeMenuIcon from "../../images/icon-close-menu.svg";
import mobileMenuIcon from "../../images/icon-menu.svg";

/* eslint-disable react/prop-types */
export function PrimaryNav({
  handleDropDownClick,
  handleMenuClick,
  menuClicked,
  expandedIndices,
  featuresLinks,
  companyLinks,
}) {
  return (
    <header className="primary-header | container flex">
      <div className="logo">
        <a href="#" aria-label="Home">
          <img src={Logo} alt="" />
        </a>
      </div>

      <button
        className="mobile-nav-toggle"
        onClick={() => handleMenuClick()}
        aria-controls="primary-nav"
        aria-expanded={menuClicked ? "true" : "false"}
      >
        <span className="visually-hidden">Menu</span>
      </button>

      <nav className="nav-left">
        <ul
          className="primary-nav | flex"
          id="primary-nav"
          data-visible={menuClicked ? "true" : "false"}
        >
          <li className="dropdown">
            <button
              className="dropdown__trigger | flex"
              onClick={() => handleDropDownClick(0)}
            >
              Features
              <img
                src={arrowDown}
                alt=""
                className={`arrow ${
                  expandedIndices.includes(0) ? "rotate-arrow" : ""
                }`}
              />
            </button>
            {expandedIndices.includes(0) && (
              <ul className="dropdown__sublinks | flex">
                {featuresLinks.map((link, index) => (
                  <li className="sublinks__link | flex" key={index}>
                    <img src={`${link.icon}`} alt="" />
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="dropdown">
            <button
              className="dropdown__trigger | flex"
              onClick={() => handleDropDownClick(1)}
            >
              Company
              <img
                src={arrowDown}
                alt=""
                className={`arrow ${
                  expandedIndices.includes(1) ? "rotate-arrow" : ""
                }`}
              />
            </button>
            {expandedIndices.includes(1) && (
              <ul className="dropdown__sublinks | flex">
                {companyLinks.map((link, index) => (
                  <li className="sublinks__link | flex" key={index}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="secondary-nav | flex">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <button className="button button-light">Register</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
