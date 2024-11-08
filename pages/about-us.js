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

export default function AboutUs() {


  return (
    <>
      <Head>
        <title>Contact - National Engineering Industries</title>
      </Head>

      <main className="main_wrapper contact-us">

        {/* header-start */}
        <Header></Header>
        {/* header-end */}

        <div className="about-us-cntnt">
          <div className="top-banner-bg">
            <div className="contact-hdr">
              <h1>About Us</h1>
              <p>Welcome to National Engineering Industries , where quality meets innovation. <br /> With years of experienceand a commitment to excellence, we specialize in providing  <br /> top-notch manufacturing solutions tailored to   meet the needs of our clients.</p>

            </div>
          </div>
          <div className="container">

          </div>

          <div className="who-we-are-sec">
            <div className="container">

              <h4>Who we are</h4>
              <p>Established in the year 2007, National Engineering Industries in Dharuhera is a top player in the category in the Shipping Containers, Cargo Containers, Acoustic Containers, Acoustic Enclosure, Porta Cabin Manufacturers in the Dharuhera. This well known establishment acts as a one-stop destination servicing customers both local and from other parts of India. Over the course of its journey, this business has established a firm foothold in it’ s industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day.
               </p>

              <img src="/who-we-are.jpg" />
            </div>
          </div>

          <div className="our-service-cards">
            <div className="container">
              <h4 className="">Our best qualities</h4>

              <div className="row">
                <div className="col-sm-4">
                  <div className="qualities-card">
                    <span className="quality-icon">
                      <i className="fa-solid fa-hand-fist"></i>
                    </span>
                    <h5>Durability and Strength</h5>
                    <p>
                      Built from high-grade, corrosion-resistant materials, our containers offer exceptional durability and strength to withstand tough conditions and heavy loads
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="qualities-card">
                    <span className="quality-icon">
                      <i className="fa-solid fa-gears"></i>
                    </span>
                    <h5>Customization Options </h5>
                    <p>
                      Offering a wide range of sizes, shapes, and design features, our containers can be fully customized to meet specific industry needs, ensuring flexibility and functionality for every application.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="qualities-card">
                    <span className="quality-icon">
                      <i className="fa-solid fa-money-bill"></i>
                    </span>
                    <h5>Cost Efficiency</h5>
                    <p>
                      Designed to provide maximum value, our containers are competitively priced without compromising quality, helping you optimize costs for every project.
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


          <div className="meet-our-team-sec">
            <div className="container">
              <h4 className="section-heading">Meet our team</h4>

              <div className="row">
                <div className="col-sm-3">
                  <div className="team-member">
                    <img src="/team-4.jpg" />
                    <h6>Prateek Bansal</h6>
                    <p>Founder</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="team-member">
                    <img src="/team-1.jpg" />
                    <h6>Raghav Singh</h6>
                    <p>Manager</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="team-member">
                    <img src="/team-2.jpg" />
                    <h6>Manish Verma</h6>
                    <p>CTO</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="team-member">
                    <img src="/team-3.jpg" />
                    <h6>Abhinav Shukla</h6>
                    <p>Sales Manager</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="counter-number-sec">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="number-div">
                    <h6>1500+</h6>
                    <p>Statisfied Clients</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="number-div">
                    <h6>6500+</h6>
                    <p>Completed Projects</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="number-div">
                    <h6>10+</h6>
                    <p>Years of Experience</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="number-div">
                    <h6>35+</h6>
                    <p>Work in Cities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="our-mission-vision">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <h4 className="section-heading">Our Mission</h4>
                  <p>Our mission is to design and deliver high-quality, eco-friendly containers that serve a wide range of industries. We’re committed to innovation and sustainability, using materials and processes that minimize environmental impact. Through reliability and integrity, we empower our customers to store, protect, and transport their goods with confidence.</p>
                </div>

                <div className="col-sm-4">
                  <img src="/misson-sec-img.svg" />
                </div>

                <div className="col-sm-4">
                  <h4 className="section-heading">Our Vision </h4>
                  <p>Our vision is to be a global leader in sustainable container solutions, setting new standards in innovation, quality, and environmental responsibility. We aim to inspire positive change across industries by continuously improving our products. We envision a future where our containers help build a cleaner, more sustainable.</p>
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
