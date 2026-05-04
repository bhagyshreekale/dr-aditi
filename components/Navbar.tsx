"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { ThemeContext } from "@/context/ThemeContext";

export default function CustomNavbar() {
  const { dark } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
      className={`custom-navbar ${dark ? "navbar-dark" : "navbar-light"} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <Container>
        {/* LOGO */}
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center gap-2"
          onClick={handleClose}
        >
          <Image
            src="/logo.png"
            alt="DermaSuite Logo"
            width={40}
            height={40}
            className="img-fluid"
            priority
          />
          <span className="brand-name fw-bold">DERMASUITE CLINIC</span>
        </Link>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Link href="/" className="nav-link" onClick={handleClose}>
              Home
            </Link>

            <Link href="/about" className="nav-link" onClick={handleClose}>
              About
            </Link>
            <Link href="/services" className="nav-link" onClick={handleClose}>
              {" "}
              Services
            </Link>

            <Link href="/gallery" className="nav-link" onClick={handleClose}>
              Gallery
            </Link>

            <Link href="/contact" className="nav-link" onClick={handleClose}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
