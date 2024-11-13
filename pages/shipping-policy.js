import Head from "next/head";
import { useState, useEffect } from 'react';
import Header from "./header";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";
import { Form, Button, ButtonToolbar, Schema, Panel } from 'rsuite';

export default function ContactUs() {

  return (
    <>
      <Head>
        <title>Contact - National Engineering Industries</title>
      </Head>

      <main className="main_wrapper shipping-policy-page">

        {/* header-start */}
        <Header></Header>
        {/* header-end */}

        <div className="top-banner-bg">
          <div className="contact-hdr">
            <h1>Shipping Policy</h1>
        
          </div>
        </div>


        <div className="cms-pages bg-theme-green">

          <div className="container">

            <h5>Shipping Policy</h5>

            <p>Thank you for choosing National Engineering Industries. We are committed to delivering your containers safely, on time, and at competitive rates. Please review our shipping policy to understand our process and commitments.</p>

            <h5>Shipping and Delivery Times</h5>

            <ol>
              <li>Order Processing
                <ul>
                  <li>All orders are processed within 6 days. Processing times may vary based on custom specifications or high demand. We will inform you of any delays as soon as possible.</li>
                </ul>
              </li>
              <li>Domestic Shipping
                <ul>
                  <li>All orders are processed within 6 days . Processing times may vary based on custom specifications or high demand. We will inform you of any delays as soon as possible.We offer shipping across India. Estimated delivery times for standard orders are 6-7 days depending on the destination.</li>
                  <li>Expedited shipping options may be available upon request. Additional fees may apply.</li>
                </ul>
              </li>
              <li>Custom and Bulk Orders
                <ul>
                  <li>For large or custom container orders, shipping times and rates are determined on a case-by-case basis. We will work with you to provide an accurate estimate and expected delivery timeframe.</li>
                </ul>
              </li>
            </ol>

            <h5>Shipping Costs
            </h5>

            <p><i class="fa-solid fa-circle"></i> Shipping costs are calculated based on the size, weight, and destination of the order. For custom or large-volume orders, please contact us for a detailed shipping estimate.</p>

            <h5>Tracking Your Order</h5>

            <p> <i class="fa-solid fa-circle"></i> Once your order ships, we will provide a tracking number so you can monitor its journey. Delivery status can be checked through the carrier's website.</p>

            <h5>Damaged or Lost Shipments</h5>

            <p> <i class="fa-solid fa-circle"></i> If your order arrives damaged or is lost in transit, please notify us within [X days]. We will work with the carrier to resolve the issue and arrange for a replacement if applicable.</p>

            <h5>Returns</h5>

            <p>
            <i class="fa-solid fa-circle"></i>  If you are unsatisfied with your purchase or receive an incorrect item, please review our for instructions on how to initiate a return.
            </p>

            <p>If you have any questions regarding shipping, please contact us at<a href="#"> info@nei.com </a> or <a href="#"> 9874562400 </a>. We are here to ensure a smooth and timely delivery of your container order.</p>








          </div>




        </div>


        {/* Footer-Start */}
        <Footer> </Footer>
        {/* Footer-End */}

      </main>


    </>
  );
}
