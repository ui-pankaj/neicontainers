import Head from "next/head";
import { useState, useEffect } from 'react';
import Header from "./header";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";
import { ButtonToolbar, Form, Schema, Button } from 'rsuite';
import { SelectPicker, VStack } from 'rsuite';
import { FormLabel } from "react-bootstrap";

const { StringType } = Schema.Types;
const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),
  phone: StringType()
    .pattern(/^[6-9]\d{9}$/, 'Please enter a valid mobile number.')
    .isRequired('This field is required.'),
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

const data = ['Shipping Container', 'Cargo Container', 'Porta Cabin', 'Accoustic Container', 'Transformer Container'].map(
  item => ({ label: item, value: item })
);


export default function GetEstimate() {

  return (
    <>
      <Head>
        <title>Contact - National Engineering Industries</title>
      </Head>

      <main className="main_wrapper">

        {/* header-start */}
        <Header></Header>
        {/* header-end */}


        <div className="get-estimate-page">

          <div className="container">
            <h2>Get an Estimate</h2>
            <h6>Feel free to contact us for tailored container solutions and expert assistance!</h6>

            <div className="row mt-4">
              <div className="col-sm-6">
                <img src="/container-dummy.jpg" />
              </div>
              <div className="col-sm-6">
                <div className="form-estimate">
                  <Form model={model}>
                    <TextField name="name" label="Full Name" />
                    <TextField name="email" label="Email" />
                    <TextField name="phone" label="Mobile Number" />
                    <div>
                     <p className="">Select Container</p>

                    <SelectPicker data={data} />

                    </div>
                    <ButtonToolbar className="mt-5 d-flex justify-content-center">
                      <Button  type="submit" className="theme-btn-hollow">
                        Submit
                      </Button>
                    </ButtonToolbar>
                  </Form>
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
