import Head from "next/head";
import { useState, useEffect } from 'react';
import Header from "./header";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";
import { Form, Button, ButtonToolbar, Schema, Panel } from 'rsuite';

const { StringType } = Schema.Types;
const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.')
});

function TextField(props) {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-3`}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
}

export default function Products() {

  return (
    <>
      <Head>
        <title>Contact - National Engineering Industries</title>
      </Head>

      <main className="main_wrapper products-details-page">

        {/* header-start */}
        <Header></Header>
        {/* header-end */}

        <div className="product-details-cntnt">
          <section className="home-img-section">
            <Image src="/Model-3.png" alt="Acoustic Container"
              width={2500}
              height={620}
              quality={100} />
          
            <div className="img-section-content">
              <div>
                <h1>Model 3 Performance</h1>
                <p>0% APR With Purchase of FSD</p>
              </div>

              <div>
                <div className="hero-top-features">
                  <span>
                    <h6>510hp</h6>
                    <p>Peak Power</p>
                  </span>

                  <span>
                    <h6>2.9s</h6>
                    <p>0-60 mph</p>
                  </span>

                  <span>
                    <h6>163 mph</h6>
                    <p>Top Speed</p>
                  </span>

                </div>
                <div className="text-center">
                  <button className="theme-btn">Get Estimate</button>                  
                </div>
              </div>


            </div>
          </section>

          <div className="container">

            <section className="product-details-sec">
              <h4>Next-Level Performance</h4>
              <p>Experience our latest generation Performance drive unit—the most powerful ever fitted to Model 3,<br /> enabling more than 500 horsepower and 0 to 60 mph in as little as 2.9 seconds2.</p>

              <img src="/car-img-5.jpeg" />

              <h4>Shatter Your Record</h4>
              <p>Our latest Track Mode calibrates adaptive suspension, chassis and powertrain controls <br /> to give you more control behind the wheel. When driving on track, customize handling balance, stability control <br /> and regenerative braking precisely to your liking.</p>
            </section>

            <section className="features-points-sec">
              <div className="row align-items-center mb-5">
                <div className="col-sm-6">
                  <div class="rgt">
                    <h4>Forged Performance Wheels</h4>
                    <p>Lightweight, staggered wheels provide sharper turn-in response, better traction in corner exit, and are optimized for range and comfort. </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div>
                    <img src="/fea-1.png" />
                  </div>
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <div className="col-sm-6">
                  <div>
                    <img src="/fea-2.png" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div class="lft">
                    <h4>Forged Performance Wheels</h4>
                    <p>Lightweight, staggered wheels provide sharper turn-in response, better traction in corner exit, and are optimized for range and comfort. </p>
                  </div>
                </div>

              </div>

              <div className="row align-items-center mb-5">

                <div className="col-sm-6">
                  <div class="rgt">
                    <h4>Forged Performance Wheels</h4>
                    <p>Lightweight, staggered wheels provide sharper turn-in response, better traction in corner exit, and are optimized for range and comfort. </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div>
                    <img src="/fea-3.png" />
                  </div>
                </div>

              </div>

              <section className="home-img-section mt-5">
                <Image src="/car-img-5.jpeg" alt="Acoustic Container"
                  width={2500}
                  height={620}
                  quality={100} />
                <div className="img-section-content">
                  <div>
                    <h1>Premium Interior</h1>
                    <p>Immerse yourself in a premium cabin with carbon fiber decor, ventilated sport seats and sophisticated materials—executed with an elevated level of precision. </p>
                  </div>

                  <div>
                    <div className="btn-sec">
                      <button className="theme-btn">Get Estimate</button>
                      {/* <button className="theme-btn-hollow">Get Estimate</button> */}
                    </div>
                  </div>


                </div>
              </section>


              <div className="row align-items-center mb-5 mt-5">

                <div className="col-sm-6">
                  <div>
                    <img src="/fea-4.png" />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div class="lft">
                    <h4>Forged Performance Wheels</h4>
                    <p>Lightweight, staggered wheels provide sharper turn-in response, better traction in corner exit, and are optimized for range and comfort. </p>
                  </div>
                </div>



              </div>



              <div className="row align-items-center mb-5">



                <div className="col-sm-6">
                  <div class="rgt">
                    <h4>Forged Performance Wheels</h4>
                    <p>Lightweight, staggered wheels provide sharper turn-in response, better traction in corner exit, and are optimized for range and comfort. </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div>
                    <img src="/fea-5.png" />
                  </div>
                </div>



              </div>

              <div className="row align-items-center mb-5">

                <div className="col-sm-6">
                  <div>
                    <img src="/fea-6.png" />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div class="lft">
                    <h4>Forged Performance Wheels</h4>
                    <p>Lightweight, staggered wheels provide sharper turn-in response, better traction in corner exit, and are optimized for range and comfort. </p>
                  </div>
                </div>



              </div>
            </section>



          </div>

          <div className="specifications-sec">
            <div className="container">
              <h2>Shipping Container Specs</h2>

              <div className="mt-5">

                <h4>General Overview</h4>
                <div className="row">
                  <div className="col-sm-4">
                    <p>Type</p>
                    <h6>High Cube</h6>
                  </div>
                  <div className="col-sm-4">
                    <p>Dimensions (Length, Width, Height)</p>
                    <h6>10 Ft, 60 ft, 12 ft  </h6>
                  </div>
                  <div className="col-sm-4">
                    <p>Capacity</p>
                    <h6>1200 cubic ft</h6>
                  </div>


                </div>
              </div>

              <div className="mt-5">
                <h4>Weight</h4>
                <div className="row">
                  <div className="col-sm-4">
                    <p>Empty/Tare Weight</p>
                    <h6>260 Kg</h6>
                  </div>
                  <div className="col-sm-4">
                    <p>Maximum Gross Weight</p>
                    <h6>1200 kg </h6>
                  </div>
                  <div className="col-sm-4">
                    <p>Payload Capacity</p>
                    <h6>2000 kg</h6>
                  </div>
                </div>
              </div>

              <hr />

              <div className="mt-4">
                <div className="row align-items-center">
                  <div className="col-sm-8">
                    <div className=" mt-2">
                      <h4>Material & Build</h4>
                      <div className="row">
                        <div className="col-sm-3">
                          <p>Material</p>
                          <h6>Corten Steel</h6>
                        </div>
                        <div className="col-sm-3">
                          <p>Flooring</p>
                          <h6>Marine-grade plywood </h6>
                        </div>
                        <div className="col-sm-3">
                          <p>Finish</p>
                          <h6>Rust-proof coating</h6>
                        </div>
                        <div className="col-sm-3">
                          <p>Door Type</p>
                          <h6>Double</h6>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h4>Features</h4>
                      <div className="row">
                        <div className="col-sm-3">
                          <p>Ventilation</p>
                          <h6>10 Vents</h6>
                        </div>
                        <div className="col-sm-3">
                          <p>Weatherproofing</p>
                          <h6>Wind and watertight, insulation options</h6>
                        </div>
                        <div className="col-sm-3">
                          <p>Reinforcements</p>
                          <h6>Rust-proof coating</h6>
                        </div>
                        <div className="col-sm-3">
                          <p>Customizations Available</p>
                          <h6>Windows, Shelves, Electric fittings</h6>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h4>Standards & Certifications</h4>
                      <div className="row">
                        <div className="col-sm-3">
                          <p>Certifications</p>
                          <h6>ISO Certifications</h6>
                        </div>
                        <div className="col-sm-3">
                          <p>Certification</p>
                          <h6>CSC Certification</h6>
                        </div>
                        <div className="col-sm-3">
                          <p>Certification</p>
                          <h6>Fire Retardant Specifications</h6>
                        </div>
                       
                      </div>
                    </div>


                  </div>

                  <div className="col-sm-4">
                      <img src="/demo-info-car.png" />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h4>Applications</h4>
                <div className="row">
                  <div className="col-sm-3">
                    <p>Business</p>
                    <h6>Shipping and logistics</h6>
                  </div>
                  <div className="col-sm-3">
                    <p>Home</p>
                    <h6>Modular buildings (homes, offices, etc.)</h6>
                  </div>
                  <div className="col-sm-3">
                    <p>Storage</p>
                    <h6>Storage solutions</h6>
                  </div>
                </div>
              </div>

              <hr />

              <div className="text-center p-5 pb-0">
              <button className="theme-btn-hollow">Get Estimate</button>
              </div>


            </div>
          </div>




        </div>


        {/* Footer-Start */}
        <Footer> </Footer>
        {/* Footer-End */}

      </main>


    </>
  );
}
