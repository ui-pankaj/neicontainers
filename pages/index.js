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
          <img src="/hero-img.png" className="" />
          <h1 className="hero-title">National Engineering Industries</h1>
          <div className="btn-sec">
            <button className="theme-btn">Contact Us</button>
            <button className="theme-btn-hollow">See Products</button>
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
                  <h1>Model Y </h1>
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
                  <h1>Model Y </h1>
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
                  <h1>Model Y </h1>
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
              <Image src="/car-img-4.jpeg" alt="Acoustic Container"
                width={2500}
                height={620}
                quality={100} />
              <div className="img-section-content">
                <div>
                  <h1>Model Y </h1>
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
                  <h1>Model Y </h1>
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
              <video src="/home-vdo-bottom.mp4"
                autoPlay
                muted
                loop
                playsInline />
              <div className="img-section-content">
                <div>
                  <h1>Model Y </h1>
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
            
          </div>
        </div>

        {/* Footer-Start */}
        <Footer> </Footer>
        {/* Footer-End */}

      </main>


    </>
  );
}
