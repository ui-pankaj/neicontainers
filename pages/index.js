import Head from "next/head";
import { useState, useEffect } from 'react';
import Header from "./header";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <Head>
        <title>National Engineering Industries</title>
      </Head>

      <main className="main_wrapper">
        {/* <Header></Header> */}
        <div className="navbar-container header-sec">
          <nav className="navbar">
            <div className="main-logo">
              <img src="/nei-text-logo.svg" />
            </div>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#">Acoustic Solutions</a>
                <div className="mega-menu">
                  <div
                    className="acoustic-solution"
                  >
                    <div className="acoustic-megamenu-sec
              ">

                      <div className="container">
                        <div className="row">
                          <div className="col-sm-8">
                            <div className="cnnters-list-flex">
                              <div className="cnnter-div">
                                <Image
                                  src="/cnntr-1.jpg"
                                  alt="Acoustic Container"
                                  width={500}
                                  height={300}
                                  priority // Ensure high-priority loading
                                />

                                <h6 className="cnnter-div-heading">Acoustic Container</h6>
                                <Link href="#">  <p className="lrn-more">Learn More</p></Link>
                              </div>
                              <div className="cnnter-div">
                                <Image
                                  src="/cnntr-2.jpg"
                                  alt="Acoustic Container"
                                  width={500}
                                  height={300}
                                  priority // Ensure high-priority loading
                                />
                                <h6 className="cnnter-div-heading">Transformer Container</h6>
                                <Link href="#">  <p className="lrn-more">Learn More</p></Link>
                              </div>
                              <div className="cnnter-div">
                                <Image
                                  src="/cnntr-3.jpg"
                                  alt="Acoustic Container"
                                  width={500}
                                  height={300}
                                  priority // Ensure high-priority loading
                                />
                                <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>
                                <Link href="#">  <p className="lrn-more">Learn More</p></Link>
                              </div>

                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="item-list">
                              <ul>
                                <li>
                                  <Link href="#" className="item-option">Fuel Tank</Link>
                                </li>
                                <li>
                                  <Link href="#" className="item-option">Control Panel</Link>
                                </li>
                                <li>
                                  <Link href="#" className="item-option" >Sound Attenvator</Link>
                                </li>
                                <li>
                                  <Link href="#" className="item-option">Acoustic Louvers</Link>
                                </li>
                                <li>
                                  <Link href="#" className="item-option">Acoustic Door</Link>
                                </li>
                                <li>
                                  <Link href="#" className="item-option">Custom Acoustic</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </li>
              <li className="nav-item">
                <a href="#">Cargo Containers</a>
                <div className="mega-menu">
                  <div className="cargo-containers-mega-menu">
                    <div
                      className="acoustic-solution"
                    >
                      <div className="acoustic-megamenu-sec
              ">

                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-sm-11">
                              <div className="cnnters-list-flex">
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-1.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />

                                  <h6 className="cnnter-div-heading">Acoustic Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-2.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />
                                  <h6 className="cnnter-div-heading">Transformer Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-3.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />
                                  <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-1.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />

                                  <h6 className="cnnter-div-heading">Acoustic Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-2.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />
                                  <h6 className="cnnter-div-heading">Transformer Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-3.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />
                                  <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-3.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />
                                  <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-3.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />
                                  <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>

                                </div>

                              </div>
                              <div className="d-flex justify-content-center mt-5 mb-3">
                                <button className="theme-btn">Custom Conatiner</button>
                              </div>


                            </div>

                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href="#">Porta Cabin</a>
                <div className="mega-menu">
                  <div className="porta-cabin-menu">
                    <div
                      className="acoustic-solution"
                    >
                      <div className="acoustic-megamenu-sec
              ">

                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-sm-8">
                              <div className="row">
                                <div className="col-sm-4">
                                  <div className="item-list no-border">
                                    <h4>Homes</h4>
                                    <ul>
                                      <li>
                                        <Link href="#" className="item-option">Farm House</Link>
                                      </li>
                                      <li>
                                        <Link href="#" className="item-option">Porta Home</Link>
                                      </li>
                                      <li>
                                        <Link href="#" className="item-option" >Capsule Homes</Link>
                                      </li>
                                      <li>
                                        <Link href="#" className="item-option">Porta Bunker</Link>
                                      </li>

                                    </ul>
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                  <div className="item-list no-border">
                                    <h4>Commercials</h4>
                                    <ul>
                                      <li>
                                        <Link href="#" className="item-option">Porta Cabin Restaurants</Link>
                                      </li>
                                      <li>
                                        <Link href="#" className="item-option">Porta Office</Link>
                                      </li>
                                      <li>
                                        <Link href="#" className="item-option" >Porta G+1</Link>
                                      </li>
                                      <li>
                                        <Link href="#" className="item-option">Porta Kitchen & Dining </Link>
                                      </li>
                                      <li>
                                        <Link href="#" className="item-option">Porta Stores</Link>
                                      </li>

                                    </ul>
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                  <div className="item-list no-border">
                                    <h4>Amenities</h4>
                                    <ul>
                                      <li>
                                        <Link href="#" className="item-option">Porta Security</Link>
                                      </li>
                                      <li>
                                        <Link href="#" className="item-option">Porta Toilets/Bathroom</Link>
                                      </li>

                                    </ul>
                                  </div>
                                </div>
                              </div>



                            </div>
                            <div className="col-sm-4">
                              <div className="cntnr-imgg">
                                <Image
                                  src="/container-dummy.jpg"
                                  alt="Acoustic Container"
                                  width={500}
                                  height={500}
                                  priority // Ensure high-priority loading
                                />
                              </div>
                            </div>

                          </div>
                          <div className="d-flex justify-content-center mt-5 mb-3">
                            <button className="theme-btn">Help me choose</button>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href="#">Rental</a>
                <div className="mega-menu">
                <div className="cargo-containers-mega-menu">
                    <div
                      className="acoustic-solution"
                    >
                      <div className="acoustic-megamenu-sec
              ">

                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-sm-11 mb-5">
                              <div className="cnnters-list-flex">
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-1.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />

                                  <h6 className="cnnter-div-heading">Acoustic Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-2.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />
                                  <h6 className="cnnter-div-heading">Transformer Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-3.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />
                                  <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-1.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />

                                  <h6 className="cnnter-div-heading">Acoustic Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-2.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />
                                  <h6 className="cnnter-div-heading">Transformer Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-3.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />
                                  <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-3.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />
                                  <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>

                                </div>
                                <div className="cnnter-div">
                                  <Image
                                    src="/cnntr-3.jpg"
                                    alt="Acoustic Container"
                                    width={500}
                                    height={300}
                                    priority // Ensure high-priority loading
                                  />
                                  <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>

                                </div>

                              </div>
                             


                            </div>

                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </li>

            </ul>
            <div className="main-menu-right">
              <ul className="menu-icons">
                <li><Link href="#"><span><img src="/info.svg" /></span></Link></li>
                <li><Link href="#"><span><img src="/circle-phone.svg" /></span></Link></li>

              </ul>
            </div>
          </nav>
        </div>
        <div className="hero-sec">
          <div className="img-layer"></div>
          <img src="/hero-img.png" className="" />
          <h1 className="hero-title">National Engineering Industries</h1>
          <div className="btn-sec">
            <button className="theme-btn">Contact Us</button>
            <button className="theme-btn-hollow">See Products</button>
          </div>
        </div>
      </main>


    </>
  );
}
