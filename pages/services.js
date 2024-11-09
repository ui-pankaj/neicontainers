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

      <main className="main_wrapper our-products">

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
          <div className="container">
            <div className="cntnt-start-text">
              {/* <p>Our Products</p> */}
              <h6>Services for
                Industries that Demand Execellnce</h6>
            </div>
           
           <div className="services-list">
            <div className="row">
              <div className="col-sm-6">

              </div>
              <div className="col-sm-6">

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
