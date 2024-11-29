import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faHouse } from "@fortawesome/free-solid-svg-icons";
import links from "@/Links";

export default function SideBarlg() {
    return (
        <Nav className="flex-column">
            <Nav.Link
                className="p-3 border border-start-0 border-end-0 border-top-0 text-center"
                href="/"
            >
                <FontAwesomeIcon className="mr-2" icon={faBorderAll} />
                <strong>Invitory Mangement</strong>
            </Nav.Link>

            {links.map((link, index) => (
                <Nav.Link className="mt-2" href={link.Dashboard.link}>
                    <h6>
                        <FontAwesomeIcon className="mr-5" icon={faHouse} />
                        {link.Dashboard.title}
                    </h6>
                </Nav.Link>
            ))}
        </Nav>
    );
}
