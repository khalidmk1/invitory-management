import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Navigation from "@/Components/NavbarTop/Navigation";
import SideBarlg from "@/Components/SideBar/SideBarlg";
import SideBarSm from "@/Components/SideBar/SideBarSm";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => setShowSidebar(!showSidebar);

    return (
        <div className="dashboard-layout">
            {/* Top Navigation Bar */}
            <Navigation toggleSidebar={toggleSidebar} />
            <Container fluid>
                <Row className="justify-around">
                    {/* Sidebar for Large Screens */}
                    <Col
                        lg={2}
                        className="d-none d-lg-block bg-light  sidebar p-2"
                    >
                        <SideBarlg />
                    </Col>

                    {/* Offcanvas Sidebar for Small Screens */}
                    <SideBarSm
                        showSidebar={showSidebar}
                        toggleSidebar={toggleSidebar}
                    />

                    {/* Main Content */}
                    <Col lg={9} sm={12} className="content p-3">
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
