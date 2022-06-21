import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./navbar.css";

const NavWrapper = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  background-color: #fff;
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
`;

const MenuButton = styled.button`
    border: 0;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #283b8b;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;
}
`;

const VectorIcon = styled.svg``



// const MenuWrapper = styled.button`
//   margin-left: auto;
// `;

// const List = styled.ul`
//   display: flex;
//   padding: 0;
// `;

// const ListItem = styled.li`
//   list-style-type: none;
//   margin: 0 1rem;
// `;

// const ListItemLink = styled.a`
//   text-decoration: none;
//   color: black;
//   display: block;
//   width: 100%;
//   &:hover {
//       color: black;
//   }
// `;

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <NavWrapper>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "1.3rem",
          marginLeft: "1rem",
        }}
      >
        My Template
      </Link>
      <MenuButton>
        <VectorIcon
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        ></VectorIcon>
      </MenuButton>
    </NavWrapper>

    // // Uncomment thi code if u need to use pure css
    // <nav className="navigation">
    //   <Link to="/" className="brand-name">
    //     MacroSoft
    //   </Link>
    //   <button
    //     onClick={() => setIsNavExpanded(!isNavExpanded)}
    //     className="hamburger"
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-5 w-5"
    //       viewBox="0 0 20 20"
    //       fill="white"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   </button>
    //   <div
    //     className={
    //       isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
    //     }
    //   >
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/">Contact</Link>
    //       </li>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       {/* <li>
    //         <Link to ="/about">About</a>
    //       </li>
    //       <li>
    //         <Link to ="/contact">Contact</a>
    //       </li>
    //       <li>
    //         <Link to ="/home">Home</a>
    //       </li>
    //       <li>
    //         <a href="/about">About</a>
    //       </li>
    //       <li>
    //         <a href="/contact">Contact</a>
    //       </li>
    //       <li>
    //         <a href="/home">Home</a>
    //       </li>
    //       <li>
    //         <a href="/about">About</a>
    //       </li>
    //       <li>
    //         <a href="/contact">Contact</a>
    //       </li> */}
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;
