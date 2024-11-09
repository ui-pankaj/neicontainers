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

      <main className="main_wrapper our-products">

        {/* header-start */}
        <Header></Header>
        {/* header-end */}

        <div className="our-products-cntnt">
          <div className="top-banner-bg">
            <div className="contact-hdr">
              <h1>Our Products</h1>
              <p>Containers That Fit Your Life <br />
                Durable, Functional, and Designed for Every Space.</p>

            </div>
          </div>
          <div className="container">
            <div className="cntnt-start-text">
               {/* <p>Our Products</p> */}
               <h6>Crafted for Quality, Designed for You</h6>
            </div>
            <div className="products-list">
              <h5 className="category-hdng">Best Sellers</h5>

              <div className="row mb-5">
                <div className="col-sm-4">
                  <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-1.jpg" />
                      <h4>Low Rise Building</h4>
                      <p>Commerical</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-2.jpg" />
                      <h4>Winter Maintenance</h4>
                      <p>Residential</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-3.jpg" />
                      <h4>Solar Roof</h4>
                      <p>Commerical</p>
                    </div>
                  </div>
                </div>

              </div>

              <h5 className="category-hdng">Cargo Containers</h5>
              
              <div className="row mb-5">
                <div className="col-sm-4">
                  <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-1.jpg" />
                      <h4>Low Rise Building</h4>
                      <p>Commerical</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-2.jpg" />
                      <h4>Winter Maintenance</h4>
                      <p>Residential</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-3.jpg" />
                      <h4>Solar Roof</h4>
                      <p>Commerical</p>
                    </div>
                  </div>
                </div>

              </div>

              <section className="home-img-section mb-5">
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
                    <button className="theme-btn">Learn More</button>
                  </div>
                </div>


              </div>
            </section>

            <h5 className="category-hdng">Porta Cabin</h5>

            <div className="row mb-5">
                <div className="col-sm-4">
                  <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-1.jpg" />
                      <h4>Low Rise Building</h4>
                      <p>Commerical</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-2.jpg" />
                      <h4>Winter Maintenance</h4>
                      <p>Residential</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-3.jpg" />
                      <h4>Solar Roof</h4>
                      <p>Commerical</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row mb-5">
                <div className="col-sm-4">
                  <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-1.jpg" />
                      <h4>Low Rise Building</h4>
                      <p>Commerical</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-2.jpg" />
                      <h4>Winter Maintenance</h4>
                      <p>Residential</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-3.jpg" />
                      <h4>Solar Roof</h4>
                      <p>Commerical</p>
                    </div>
                  </div>
                </div>

              </div>

              <section className="home-img-section mb-5">
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
                    <button className="theme-btn">Learn More</button>
                  </div>
                </div>


              </div>
            </section>

            <h5 className="category-hdng">Accoustic Containers</h5>

            <div className="row mb-5">
                <div className="col-sm-4">
                  <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-1.jpg" />
                      <h4>Low Rise Building</h4>
                      <p>Commerical</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-2.jpg" />
                      <h4>Winter Maintenance</h4>
                      <p>Residential</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="product-item">
                    <div className="product-item-cntnt">
                      <img src="/product-dummy-3.jpg" />
                      <h4>Solar Roof</h4>
                      <p>Commerical</p>
                    </div>
                  </div>
                </div>

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
