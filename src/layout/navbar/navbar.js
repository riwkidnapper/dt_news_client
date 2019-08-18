import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import { Navbar /*,NavDropdown*/, Nav } from "react-bootstrap";
import logo from "../../assets/1.png";

import "./nav.css";
//icon
import { FiLogIn } from "react-icons/fi";
import { MdPersonAdd } from "react-icons/md";

class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" className="Nav_acc">
          <Nav.Item>
            <Link to="/login">
              <FiLogIn />
              {" Login"}
            </Link>
            {" | "}
            <Link to="/register">
              <MdPersonAdd />
              {" Register"}
            </Link>
          </Nav.Item>
        </Navbar>
        <Navbar fixed="top" className="Nav_bar" collapseOnSelect expand="lg">
          <Navbar.Brand>
            <img alt="" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="col-md-5 offset-md-1">
              <nav>
                <ul className="navbar-nav mr-auto">
                  <li>
                    <NavLink to={"/"} exact className="nav-link">
                      หน้าแรก
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/updatenews"} exact className="nav-link">
                      หนังสือพิมพ์ล่าสุด
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/postnews"} exact className="nav-link">
                      ลงประกาศ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/addcredit"} exact className="nav-link">
                      เติมเครดิต
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-5 offset-md-1">
              <nav>
                <ul className="navbar-nav mr-auto">
                  <li>
                    <NavLink to={"/confirmpay"} exact className="nav-link">
                      แจ้งชำระเงิน
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/aboutus"} exact className="nav-link">
                      เกี่ยวกับเรา
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"} exact className="nav-link">
                      ติดต่อเรา
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
