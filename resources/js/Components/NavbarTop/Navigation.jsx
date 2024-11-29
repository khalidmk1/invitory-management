import React from "react";
import { Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

export default function Navigation({ toggleSidebar }) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
            <Container fluid>
                <Navbar.Brand href="#">INVITORY MANAGEMENT</Navbar.Brand>
                <Button
                    variant="outline-light"
                    className="d-lg-none ms-2"
                    onClick={toggleSidebar}
                >
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="dropdown-item"
                >
                    <FontAwesomeIcon
                        className="mr-2"
                        
                    />
                    Log Out
                </Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                        Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                        Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    );
}
