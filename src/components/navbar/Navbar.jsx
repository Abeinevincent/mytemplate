import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
import "./navbar.css";
import { mobile } from "../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/userSlice";

// const NavWrapper = styled.nav`
//   height: 60px;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   position: relative;
//   padding: 0.5rem 0rem;
//   background-color: #fff;
//   color: black;
//   box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
// `;

// const MenuButton = styled.button`
//     border: 0;
//     height: 40px;
//     width: 40px;
//     padding: 0.5rem;
//     border-radius: 50%;
//     background-color: #283b8b;
//     cursor: pointer;
//     transition: background-color 0.2s ease-in-out;
//     position: absolute;
//     top: 50%;
//     right: 25px;
//     transform: translateY(-50%);
//     display: none;
//     ${mobile({
//       display: "block",
//     })}
// }
// `;

// const VectorIcon = styled.svg``;

// const NavMenuWrapper = styled.div`
//   margin-left: auto;
//   // &${props => props.className === "expanded" && List} {
//   //     display: block;
//   // }
// `;

// const Path = styled.path``;

// const List = styled.div`
//   display: flex;
//   padding: 0;
//   margin-left: 20px;
//   ${mobile({
//     position: "absolute",
//     top: "60px",
//     left: 0,
//     flexDirection: "column",
//     width: "100%",
//     height: "calc(100vh - 77px)",
//     backgroundColor: "white",
//     borderTop: "1px solid black",
//     display: "none",
//   })}
// `;

// const ListItem = styled.div`
//   list-style-type: none;
//   margin: 0 1.5rem;
//   ${mobile({
//     textAlign: "center",
//     margin: 0,
//     width: "100%",
//     padding: "1.5rem 0",
//   })}
//   &:hover {
//     background-color: #eee;
//   }
// `;

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  const navigate = useNavigate()

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.currentUser);

  const user = localStorage.getItem("token")

  // console.log(user);
  const handleClick = () => {
    setIsNavExpanded(false);
    localStorage.clear()
    navigate("/")
    // dispatch(logOut());
  };

  return (
    // <NavWrapper>
    //   <Link
    //     to="/"
    //     style={{
    //       textDecoration: "none",
    //       color: "black",
    //       fontSize: "1.3rem",
    //       marginLeft: "1rem",
    //     }}
    //   >
    //     My Template
    //   </Link>
    //   <MenuButton onClick={() => setIsNavExpanded(!isNavExpanded)}>
    //     <VectorIcon
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-5 w-5"
    //       viewBox="0 0 20 20"
    //       fill="white"
    //     >
    //       <Path
    //         fillRule="evenodd"
    //         d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
    //         clipRule="evenodd"
    //       />
    //     </VectorIcon>
    //   </MenuButton>
    //   <NavMenuWrapper className={isNavExpanded ? "expanded" : ""}>
    //     <List>
    //       <ListItem>
    //         <Link
    //           to="/"
    //           style={{
    //             textDecoration: "none",
    //             color: "inherit",
    //           }}
    //         >
    //           Home
    //         </Link>
    //       </ListItem>
    //       <ListItem>
    //         <Link
    //           to="/"
    //           style={{
    //             textDecoration: "none",
    //             color: "inherit",
    //           }}
    //         >
    //           About
    //         </Link>
    //       </ListItem>
    //       <ListItem>
    //         <Link
    //           to="/"
    //           style={{
    //             textDecoration: "none",
    //             color: "inherit",
    //           }}
    //         >
    //           Products
    //         </Link>
    //       </ListItem>
    //       <ListItem>
    //         <Link
    //           to="/"
    //           style={{
    //             textDecoration: "none",
    //             color: "inherit",
    //           }}
    //         >
    //           Services
    //         </Link>
    //       </ListItem>
    //     </List>
    //   </NavMenuWrapper>
    // </NavWrapper>

    <nav className="navigation">
      <Link to="/" className="brand-name">
        MyTemplate
      </Link>
      <button
        onClick={() => setIsNavExpanded(!isNavExpanded)}
        className="hamburger"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link to="/">About</Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link to="/">Products</Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link to="/">Services</Link>
          </li>
          <li onClick={() => setIsNavExpanded(false)}>
            <Link to="/">Contact</Link>
          </li>
          {!user && (
            <li onClick={() => setIsNavExpanded(false)}>
              <Link to="/login">Login</Link>
            </li>
          )}
          {!user && (
            <li className="register" onClick={() => setIsNavExpanded(false)}>
              <Link to="/register">Register</Link>
            </li>
          )}
          {user && (
            <li onClick={handleClick}>
              <Link to="/">Logout</Link>
            </li>
          )}

          {/* Uncomment this code below to add more items on the list */}
          {/*<li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>  */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
