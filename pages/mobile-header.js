import Head from "next/head";
import Link from "next/link";
import React from 'react';
import { useState, useEffect } from 'react';
import { Accordion, Placeholder, ButtonGroup, Button } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';

export default function MobileHeader() {



  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const headerClass = `header${scrolled ? " scrolled" : ""}${hovered ? " hovered" : ""
    }`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeKey, setActiveKey] = React.useState(1);

  return (
    <>
      <Head>
        <title>National Engineering Industries</title>

        {/* Google-font */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet" />

        {/* Fontawesome */}

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous" referrerPolicy="no-referrer" />

      </Head>

      {/* Header-start */}

      <section className="mobile-header">
        <header className={headerClass}>
          <div className="navbar-container header-sec" >

            <div className="position-relative w-100">

              <div className="container-fluid">

                <nav className="navbar">
                  <div className="main-logo">
                    <Link href="/">
                      <img src="/nei-text-logo.svg" />
                    </Link>
                  </div>

                  <div className="main-menu-right">
                    <button className="menu-btn">
                      Menu
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>

        </header>

        <div className="mobile-header-dropdown">
          <Accordion activeKey={activeKey} bordered onSelect={setActiveKey}>
            <Accordion.Panel header="Accordion Panel 1" eventKey={1}>
              <Placeholder.Paragraph />
            </Accordion.Panel>
            <Accordion.Panel header="Accordion Panel 2" eventKey={2}>
              <Placeholder.Paragraph />
            </Accordion.Panel>
            <Accordion.Panel header="Accordion Panel 3" eventKey={3}>
              <Placeholder.Paragraph />
            </Accordion.Panel>
          </Accordion>
        </div>
      </section>
    </>
  );
}