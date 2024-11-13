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
            <h1>Terms and Conditions</h1>
          
          </div>
        </div>


        <div className="cms-pages bg-theme-green">

          <div className="container">

            <h5>Terms and Conditions</h5>
            <p>
            Welcome to National Engineering Industries! By accessing or using our website, you agree to comply with the following terms and conditions. Please read these terms carefully, as they outline the legal rights and responsibilities between you and company.
            </p>
            

            <h5>1. General Information</h5>

            <ul>
              <li>Company Overview
                <ul>
                  <li>NEI is a container manufacturing company based in India, specializing in product design, prototyping, fabrication, and assembly services.</li>
                </ul>
              </li>
              <li>Service Availability
                <ul>
                  <li>Our services are available across India and internationally, subject to the shipping and logistical arrangements detailed in our <a href="/shipping-policy">Shipping Policy</a>.</li>
                  <li>Expedited shipping options may be available upon request. Additional fees may apply.</li>
                </ul>
              </li>
                         </ul>

            <h5>2. Intellectual Property
            </h5>

            <p><i class="fa-solid fa-circle"></i> All content on this website, including text, images, graphics, logos, and design, is the property of NEI and is protected by applicable copyright and trademark laws.</p>

            <p><i class="fa-solid fa-circle"></i> Unauthorized use, reproduction, or distribution of any materials from this website is prohibited.</p>

            <h5>3. Use of Website</h5>

            <p> <i class="fa-solid fa-circle"></i> You agree to use this website for lawful purposes only. Any unauthorized, abusive, or harmful use of the website, including activities like data mining, hacking, or spamming, is strictly prohibited.</p>
            <p> <i class="fa-solid fa-circle"></i> We reserve the right to restrict access or take legal action against any individual or entity misusing our website.</p>

            <h5>4. Order Process</h5>

            <p> <i class="fa-solid fa-circle"></i> <b>Consultations and Quotes:  </b> All orders begin with a consultation to discuss project requirements, followed by a detailed quote. Quotes are valid for 6-7 days from the date of issue and are subject to change thereafter.</p>

            <p> <i class="fa-solid fa-circle"></i> <b>Agreement of Terms: </b> By accepting a quote, you agree to the project specifications, estimated delivery timeline, and payment terms provided.</p>

            <p> <i class="fa-solid fa-circle"></i> <b>Modifications and Cancellations: </b> Once an order is confirmed, any modifications or cancellations may incur additional fees. Please contact us as soon as possible to discuss any changes.</p>

            <h5>5. Payment Terms</h5>

            <p>
            <i class="fa-solid fa-circle"></i> Payments are required as per the agreed-upon terms in the project contract. Late payments may be subject to additional fees or interest charges as outlined in your contract.
            </p>

            <h5>6. Warranty and Liability</h5>

            <p>
            <i class="fa-solid fa-circle"></i> <b>Product Warranty: </b> NEI stands by the quality of our containers. Each product is covered by a limited warranty for against defects in materials and workmanship.
            </p>
            <p>
            <i class="fa-solid fa-circle"></i> <b>Limitation of Liability:</b> While we strive to deliver high-quality products, [Your Company Name] is not liable for any indirect, incidental, or consequential damages arising from the use of our products or services.
            </p>

            <h5>7. Shipping and Delivery</h5>

            <p>
            <i class="fa-solid fa-circle"></i> Please refer to our <a href="/shipping-policy">Shipping Policy</a> for information on how we handle domestic and international shipping, delivery timelines, and handling procedures.
            </p>

            <h5>8. Returns and Refunds</h5>

            <p>
            <i class="fa-solid fa-circle"></i> <b> Return Policy: </b> If you are unsatisfied with your purchase, please contact us within 6 days of receiving the item. Returns are handled on a case-by-case basis, and refunds or replacements may be provided at our discretion.
            </p>
            <p>
            <i class="fa-solid fa-circle"></i> <b>Custom Orders: </b>  Custom orders may not be eligible for return or refund, except in cases where defects or damages occur due to manufacturing issues.

            </p>

            <h5>9. Privacy Policy</h5>
            <p>
            <i class="fa-solid fa-circle"></i> Your privacy is important to us. Please refer to our <a href="/privacy-policy">Privacy Policy</a> to understand how we collect, use, and protect your information.
            </p>

            <h5>10. Changes to Terms</h5>
            <p>
            <i class="fa-solid fa-circle"></i> NEI reserves the right to update or modify these terms at any time. Changes will be posted on this page, and your continued use of the website constitutes acceptance of the updated terms.
            </p>

            <h5>11. Governing Law</h5>

            <p> These terms and conditions are governed by the laws of India. Any disputes arising from these terms shall be resolved exclusively in the courts of Dharuhera, Haryana, India.</p>





            <p>If you have any questions regarding these terms, please contact us at<a href="#"> info@nei.com </a> or <a href="#"> 9874562400 </a>.</p>








          </div>




        </div>


        {/* Footer-Start */}
        <Footer> </Footer>
        {/* Footer-End */}

      </main>


    </>
  );
}
