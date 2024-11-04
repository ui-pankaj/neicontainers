import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Image from "next/image";
import AccousticSolutionMenu from "@/components/mega-menus/accoustic-solution-menu";
import CargoContainersMenu from "@/components/mega-menus/cargo-containers-menu";
import PortaCabinMenu from "@/components/mega-menus/porta-cabin-menu";
import RentalMenu from "@/components/mega-menus/rental-menu";
import 'rsuite/dist/rsuite.min.css';

export default function Header() {

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

      <header>
        <div className="navbar-container header-sec">

          <div className="position-relative w-100">

            <div className="container-fluid">

              <nav className="navbar">
                <div className="main-logo">
                  <img src="/nei-text-logo.svg" />
                </div>
                <ul className="nav-list">
                  <li className="nav-item">
                    <a href="#">Acoustic Solutions</a>

                    {/* mega-menu */}
                    <div className="mega-menu">
                      <AccousticSolutionMenu></AccousticSolutionMenu>
                    </div>
                    {/* mega-menu */}

                  </li>
                  <li className="nav-item">
                    <a href="#">Cargo Containers</a>

                    {/* mega-menus */}
                    <div className="mega-menu">
                      <CargoContainersMenu />
                    </div>
                    {/* mega-menus */}

                  </li>
                  <li className="nav-item">
                    <a href="#">Porta Cabin</a>

                    {/* mega-menus */}
                    <div className="mega-menu">
                      <PortaCabinMenu />
                    </div>
                    {/* mega-menus */}

                  </li>
                  <li className="nav-item">
                    <a href="#">Rental</a>

                    {/* mega-menus */}
                    <div className="mega-menu">
                      <RentalMenu />
                    </div>
                    {/* mega-menus */}

                  </li>

                </ul>
                <div className="main-menu-right">
                  <ul className="menu-icons">
                    <li>
                      <Link href="#"><span><img src="/info.svg" /></span></Link>
                    </li>
                    <li>
                      <Link href="#"><span><img src="/circle-phone.svg" /></span></Link>
                    </li>

                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

      </header>



    </>
  );
}