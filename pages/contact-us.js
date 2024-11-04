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

export default function ContactUs() {

  return (
    <>
      <Head>
        <title>Contact - National Engineering Industries</title>
      </Head>

      <main className="main_wrapper contact-us">

        {/* header-start */}
        <Header></Header>
        {/* header-end */}

        <div className="contact-us-cntnt bg-theme-green">
          <div className="container">
            <div className="contact-hdr">
              <h1>Contact</h1>
              <p>We're here to help! Whether you have questions<br /> about our services, need assistance with a product,<br /> or just want to give feedback, we're all ears.</p>

            </div>

            <div className="get-in-touch-sec">
              <div className="row">
                <div className="col-sm-8">
                  <div className="get-in-touch-lft">
                    <img src="/nei-text-logo-yellow.svg" className="ylow-bg-logo" />
                    <div className="contact-us-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18297.956723931035!2d76.7959028030925!3d28.203908625930296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1730607886577!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="get-in-touch-rgt">
                    <h4>Get In Touch</h4>
                    <p>We’d love to hear from you! Whether you have a question, feedback, feel free to reach out.</p>

                    <ul>
                      <li>
                        <span>
                          <i className="fa-solid fa-location-dot"></i>
                        </span>
                        <span>79 Milestone, NH-48, Dharuhera - 123106
                          (Near Reliance Petrol Pump Village Nikhri)
                          Haryana, India.</span>
                      </li>

                      <li>
                        <span>
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        <span>+91-9414013952</span>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        <span>ngepritam@gmail.com</span>
                      </li>
                      <li>
                      </li>

                    </ul>

                    <div className="contact-socials">
                      <span><i className="fab fa-facebook"></i></span>
                      <span><i className="fab fa-instagram"></i></span>
                      <span><i className="fab fa-twitter"></i></span>
                      <span><i className="fab fa-youtube"></i></span>
                      <span></span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            <div className="contact-form-sec">
              <div className="row">
                <div className="col-sm-7">
                  <h4>Send Us a Message</h4>
                  <p>Prefer a quick message? Use our contact form below,<br /> and we’ll be in touch shortly.</p>

                  <Form model={model}>
                    <TextField name="name" placeholder="Full Name" />
                    <TextField name="email" placeholder="Email Address" />
                    <TextField name="message" className="msg-input" placeholder="Your Message" />
                    <ButtonToolbar>
                      <Button className="theme-btn-hollow" type="submit">
                        Send Message
                      </Button>
                    </ButtonToolbar>
                  </Form>
                </div>
                <div className="col-sm-5">
                    <div className="floting-img">
                      <img src="/floating-container.png" />
                    </div>
                </div>
              </div>
            </div>

          </div>

          <div className="build-sec">
            <div className="container">
              <div className="row">
                <div className="col-sm-8">
                  <h4>
                    Let’s Build Your <br /> Customize Container!</h4>

                  <p>Create a custom container tailored to your style and needs by choosing materials, designing compartments, and adding personalized finishes.</p>

                  <button className="theme-btn-hollow">
                    LET'S TALK!
                  </button>
                </div>
                <div className="col-sm-4">

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
