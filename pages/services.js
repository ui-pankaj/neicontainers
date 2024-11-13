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

export default function Services() {

  return (
    <>
      <Head>
        <title>Contact - National Engineering Industries</title>
      </Head>

      <main className="main_wrapper our-services">

        {/* header-start */}
        <Header></Header>
        {/* header-end */}

        <div className="our-products-cntnt">
          <div className="top-banner-bg">
            <div className="contact-hdr">
              <h1>Our Services</h1>
              <p>National Engineering Industries offers a wide range of services, including container design, prototyping, fabrication, and assembly. With a team of skilled professionals, we ensure top-quality, reliable solutions to meet the unique needs of our clients across various industries.</p>
            </div>
          </div>


          <div className="what-we-do-sec">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-6 pe-4">
                  <img src="/container-dummy.jpg" />
                  <img src="/experience-img.png" className="exp-img" />
                </div>

                <div className="col-sm-6">
                  {/* <p className="text-green">Why Choose Us</p> */}
                  <h4>Top-Quality Containers Solutions & Services for Your Requirements</h4>

                  <p>National Engineering Industries combines industry expertise, innovative technology, and a commitment to quality, making us the trusted choice for container solutions across various industries. With a focus on customization, we tailor each project to meet the unique needs of our clients, offering flexibility in design, prototyping, fabrication, and assembly. Using only top-grade materials and advanced production techniques, we ensure our containers are durable, secure, and built to last</p>

                  <p>
                    We’re also committed to sustainable practices, minimizing environmental impact while maintaining competitive pricing, so you receive both quality and value. Choose us for reliable, top-quality container solutions designed to enhance your operations
                  </p>



                  <div className="mt-4">
                    <button className="theme-btn">Contact Us</button>
                    <button className="theme-btn-hollow ms-4">See Products</button>
                  </div>

                </div>

              </div>



            </div>
          </div>

          <div className="our-service-cards bg-grey">
            <div className="container">
              <h4 className="">Why Choose Us</h4>

              <div className="row">
                <div className="col-sm-4">
                  <div className="qualities-card">
                    <span className="quality-icon">
                      <i className="fa-solid fa-hand-fist"></i>
                    </span>
                    <h5>Expertise in  Manufacturing</h5>
                    <p>
                      We understand the specific needs of various industries, ensuring that each container we produce meets the highest standards of performance and reliability.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="qualities-card">
                    <span className="quality-icon">
                      <i className="fa-solid fa-gears"></i>
                    </span>
                    <h5>Customized Solutions</h5>
                    <p>
                      We recognize that every business has unique requirements. That's why we offer fully customizable container solutions, allowing you to select specifications that perfectly align with your operational demands.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="qualities-card">
                    <span className="quality-icon">
                      <i className="fa-solid fa-money-bill"></i>
                    </span>
                    <h5>Superior Quality and Durability</h5>
                    <p>
                      Quality is at the heart of everything we do. We utilize premium materials and advanced manufacturing techniques to ensure our containers are built to last.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row mt-10">
                <div className="col-sm-4">
                  <div className="qualities-card">
                    <span className="quality-icon">
                      <i className="fa-solid fa-hand-fist"></i>
                    </span>
                    <h5>Innovative Technology</h5>
                    <p>
                      Staying ahead with the latest innovations, we incorporate cutting-edge design and technology into our manufacturing processes.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="qualities-card">
                    <span className="quality-icon">
                      <i className="fa-solid fa-gears"></i>
                    </span>
                    <h5>Reliable and Timely Delivery</h5>
                    <p>
                      We understand the importance of meeting deadlines. Our streamlined production processes and dedicated logistics team ensure that your containers are delivered on time, every time.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="qualities-card">
                    <span className="quality-icon">
                      <i className="fa-solid fa-money-bill"></i>
                    </span>
                    <h5>Competitive Pricing</h5>
                    <p>
                      We offer high-quality container solutions at competitive prices, providing excellent value without compromising on excellence.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="what-we-do-sec">
            <div className="container">
              <div className="row align-items-center">

                <div className="col-sm-8">
                  <p className="text-green">What We Do</p>
                  <h4>Containers Services</h4>

                  <p>This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base. In Dharuhera, this establishment occupies a prominent location in Dharuhera. It is an effortless task in commuting to this establishment as there are various modes of transport readily available. It comes in the route of 79 Milestone, NH-8, Dharuhera , which makes it easy for first-time visitors in locating this establishment.</p>

                  <p>
                    National Engineering Industries in Dharuhera is one of the leading businesses in the Shipping Containers, Cargo Containers, Acoustic Containers, Acoustic Enclosure, Porta Cabin Manufacturers and much more.
                    We Provides Best Quality Products
                    National Engineering Industries is known to provide top service in the following categories.
                  </p>

                  <div className="row">
                    <div className="col-sm-6">
                      <ul className="services-point-list">
                        <li> <i className="fa-solid fa-circle"></i>Shipping Containers</li>
                        <li> <i className="fa-solid fa-circle"></i>Cargo Containers</li>
                        <li> <i className="fa-solid fa-circle"></i>Acoustic Containers</li>
                        <li> <i className="fa-solid fa-circle"></i>Acoustic Enclousers</li>
                        <li> <i className="fa-solid fa-circle"></i>Porta Cabins</li>
                      </ul>
                    </div>

                    <div className="col-sm-6">
                      <ul className="services-point-list">
                        <li> <i className="fa-solid fa-circle"></i>Acoustic Enclousers for Dg Sets</li>
                        <li> <i className="fa-solid fa-circle"></i>Acoustic Enclousers for Machines</li>
                        <li> <i className="fa-solid fa-circle"></i>Sheets Bending & Shearing</li>
                        <li> <i className="fa-solid fa-circle"></i>Acoustic Enclousers</li>
                        <li> <i className="fa-solid fa-circle"></i>Porta Cabins</li>
                      </ul>
                    </div>

                  </div>

                  <div className="mt-4">
                    <button className="theme-btn">Contact Us</button>
                    <button className="theme-btn-hollow ms-4">See Products</button>
                  </div>

                </div>
                <div className="col-sm-4">
                  <img src="/container-dummy.jpg" />
                  <img src="/experience-img.png" className="exp-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="about-contact-sec">

            <div className="container">
              <div className="about-cntnt-contact">
                <div>

                  <p>Interested in a specific service?</p>
                  <h4>Dedicated To Providing Top-Quality <br /> Services To Our Clients.</h4>
                  <button className="theme-btn mt-4">Contact Us</button>
                  <button className="theme-btn-hollow mt-4 ms-4">See Products</button>

                </div>

              </div>
            </div>
          </div>

          <div className="our-partner-sec">
            <div className="container">
              <h4 className="section-heading">Our Clients</h4>


              <div class="marquee">
                <div class="marquee-content">
                  <img src="/sudhir.png" />
                  <img src="/noida-diesel-power-services.png" />
                  <img src="/national-deisel-generators.png" />
                  <img src="/gls-group.png" />
                  <img src="/ofr-telecom.png" />
                  <img src="/bhiwadi-cyliders.png" />
                  <img src="/indospace.png" />
                  {/* <!-- Duplicate images for seamless loop --> */}
                  <img src="/sudhir.png" />
                  <img src="/noida-diesel-power-services.png" />
                  <img src="/national-deisel-generators.png" />
                  <img src="/gls-group.png" />
                  <img src="/ofr-telecom.png" />
                  <img src="/bhiwadi-cyliders.png" />
                  <img src="/indospace.png" />
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
