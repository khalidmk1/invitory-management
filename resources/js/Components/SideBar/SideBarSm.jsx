import React from "react";
import {
    Nav,
    Offcanvas,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";

export default function SideBarSm({ showSidebar, toggleSidebar }) {
    return (
        <Offcanvas
            show={showSidebar}
            onHide={toggleSidebar}
            className="bg-lightrounded"
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                <FontAwesomeIcon className="mr-2" icon={faBorderAll} />
                <strong>Invitory Mangement</strong>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="flex-column">
                    
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/analytics">Analytics</Nav.Link>
                    <Nav.Link href="/settings">Settings</Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
