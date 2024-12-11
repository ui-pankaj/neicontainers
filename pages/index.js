import Head from "next/head";
import { useState, useEffect } from 'react';
import Header from "./header";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";

export default function Home() {

  return (
    <>
      <Head>
        <title>National Engineering Industries</title>
      </Head>

      <main className="main_wrapper home-page">

        {/* header-start */}
        <Header></Header>
        {/* header-end */}

        {/* hero-sec-start */}
        <div className="hero-sec">
          <div className="img-layer"></div>
          <div className="hero-sec-cntnt">
            <h1 className="hero-title">National Engineering Industries</h1>
            <h4>Crafting Custom <span>Containers </span> </h4>
            <p> Manufacturers of premium shipping containers, Acoustic containers for generators and portable Cabins made to simplify your operation and space planning.</p>
            <div className="btn-sec">
              <Link href="/contact-us">
                <button className="theme-btn">Contact Us</button>
              </Link>

              <Link href="/products">
                <button className="theme-btn-hollow">See Products</button>
              </Link>
            </div>
          </div>
        </div>
        {/* hero-sec-end */}

        <div className="home-cntnt">
          <div className="container">
            <section className="home-img-section">
              <Image src="/car-img-1.jpeg" alt="Acoustic Container"
                width={2500}
                height={620}
                quality={100} />
              <div className="img-section-content">
                <div>
                  <h1>Acoustic Containers</h1>
                  <p>0% APR With Purchase of FSD</p>
                </div>

                <div>
                  <div className="btn-sec">
                    <button className="theme-btn">Contact Us</button>
                    <button className="theme-btn-hollow">Learn More</button>
                  </div>
                </div>


              </div>
            </section>

            <section className="home-img-section">
              <Image src="/car-img-2.jpeg" alt="Acoustic Container"
                width={2500}
                height={620}
                quality={100} />
              <div className="img-section-content">
                <div>
                  <h1>Shipping Containers</h1>
                  <p>0% APR With Purchase of FSD</p>
                </div>

                <div>
                  <div className="btn-sec">
                    <button className="theme-btn">Contact Us</button>
                    <button className="theme-btn-hollow">Learn More</button>
                  </div>
                </div>


              </div>
            </section>


            <section className="home-img-section">
              <Image src="/car-img-3.jpeg" alt="Acoustic Container"
                width={2500}
                height={620}
                quality={100} />
              <div className="img-section-content">
                <div>
                  <h1>Porta Cabins </h1>
                  <p>0% APR With Purchase of FSD</p>
                </div>

                <div>
                  <div className="btn-sec">
                    <button className="theme-btn">Contact Us</button>
                    <button className="theme-btn-hollow">Learn More</button>
                  </div>
                </div>


              </div>
            </section>

            <section className="home-img-section">
              <Image src="/car-img-5.jpeg" alt="Acoustic Container"
                width={2500}
                height={620}
                quality={100} />
              <div className="img-section-content">
                <div>
                  <h1>Rentals</h1>
                  <p>0% APR With Purchase of FSD</p>
                </div>

                <div>
                  <div className="btn-sec">
                    <button className="theme-btn">Contact Us</button>
                    <button className="theme-btn-hollow">Learn More</button>
                  </div>
                </div>


              </div>
            </section>

            <section className="row">
              <div className="col-sm-6">
                <section className="home-img-section">
                  <Image src="/home-lft-1.jpeg" alt="Acoustic Container"
                    width={2500}
                    height={620}
                    quality={100} />
                  <div className="img-section-content">
                    <div>
                      <h1>Solar Panels </h1>
                      <p>Schedule a Virtual Consultation</p>
                    </div>

                    <div>
                      <div className="btn-sec">
                        <button className="theme-btn">Contact Us</button>
                        <button className="theme-btn-hollow">Learn More</button>
                      </div>
                    </div>


                  </div>
                </section>
              </div>
              <div className="col-sm-6">
                <section className="home-img-section">
                  <Image src="/home-rgt-2.jpeg" alt="Acoustic Container"
                    width={2500}
                    height={620}
                    quality={100} />
                  <div className="img-section-content">
                    <div>
                      <h1>Solar Roof</h1>
                      <p>Produce Clean Energy From Your Roof</p>
                    </div>

                    <div>
                      <div className="btn-sec">
                        <button className="theme-btn">Contact Us</button>
                        <button className="theme-btn-hollow">Learn More</button>
                      </div>
                    </div>


                  </div>
                </section>
              </div>
            </section>

            <section className="home-img-section mb-5" >
              <video src="/containers-videos-home.mp4"
                autoPlay
                muted
                loop
                playsInline />
              <div className="img-section-content">
                <div>

                </div>


                <div>
                  <div className="btn-sec">
                    <Link href="/contact-us">
                      <button className="theme-btn-hollow">Contact Us</button>
                    </Link>
                  </div>
                </div>


              </div>
            </section>

          </div>
        </div>

        {/* Footer-Start */}
        <Footer> </Footer>
        {/* Footer-End */}

      </main>


    </>
  );
}
