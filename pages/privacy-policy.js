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
            <h1>Privacy Policy</h1>
        
          </div>
        </div>


        <div className="cms-pages bg-theme-green">

          <div className="container">

            <h5>Privacy Policy</h5>

            <p>National Engineering Industries respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect information on our website.</p>

            <h5>1. Information Collection</h5>

            <p><i class="fa-solid fa-circle"></i> <b>Personal Information:  </b> We may collect personal information (such as your name, email address, phone number, and company name) when you contact us, request a quote, or submit an inquiry through our website.</p>
            <p><i class="fa-solid fa-circle"></i> <b>Non-Personal Information:  </b> We automatically collect non-personal information, such as your IP address, browser type, device information, and browsing behavior, to help us improve website performance.</p>

            <h5>2. How We Use Your Information</h5>

            <p> <i class="fa-solid fa-circle"></i> <b>To Provide Services:  </b> We use your information to respond to inquiries, provide quotes, fulfill orders, and deliver customer support.</p>

            <p> <i class="fa-solid fa-circle"></i> <b>To Improve Our Website: </b>  Non-personal data is used to enhance our website functionality and provide a better user experience.</p>

            <p> <i class="fa-solid fa-circle"></i> <b>To Communicate with You: </b>  We may send emails related to our services, updates, or relevant offers. You can unsubscribe from promotional emails at any time.</p>

            <h5>3. Information Sharing</h5>

            <p> <i class="fa-solid fa-circle"></i> <b>Third-Party Service Providers: </b>  We may share your information with trusted third-party vendors who assist with our business operations (e.g., logistics, payment processing). They have limited access to your data solely to perform these functions.</p>

            <p> <i class="fa-solid fa-circle"></i> <b>Legal Compliance: </b>  We may disclose your information if required by law or to protect our rights and comply with legal proceedings.</p>

            <h5>4. Data Security</h5>

            <p>
            <i class="fa-solid fa-circle"></i> <b>Protection Measures: </b>  We implement security measures to protect your data from unauthorized access, alteration, or disclosure. However, please note that no online transmission is entirely secure.
            </p>
            <p>
            <i class="fa-solid fa-circle"></i> <b>Data Retention: </b>  Personal information is retained only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, or resolve disputes.
            </p>

            <h5> 5. Cookies and Tracking Technologies</h5>

            <p>
            <i class="fa-solid fa-circle"></i> <b>Use of Cookies:  </b> Our website uses cookies to track user preferences, website traffic, and browsing patterns. Cookies help us enhance user experience but do not store personal information.
            </p>

            <p>
            <i class="fa-solid fa-circle"></i> <b>Managing Cookies: </b>  You can disable cookies in your browser settings, though this may impact website functionality.
            </p>

            <h5>6. Your Rights</h5>

            <p>
            <i class="fa-solid fa-circle"></i> <b>Access and Correction: </b>  You have the right to request access to or correction of your personal information. Contact us if you would like to review or update your data.
            </p>

            <p>
            <i class="fa-solid fa-circle"></i> <b>Opt-Out: </b>  You can opt out of receiving promotional communications at any time by following the unsubscribe instructions in our emails or contacting us directly.
            </p>

            <h5>7. Links to Other Websites</h5>

            <p>
            <i class="fa-solid fa-circle"></i>  Our website may contain links to external websites. We are not responsible for the privacy practices or content of third-party sites.

            </p>

            <h5>8. Changes to This Policy</h5>

            <p>
            <i class="fa-solid fa-circle"></i> <b>Updates: </b>  We may update this Privacy Policy periodically. Changes will be posted on this page, and significant updates may be communicated through other methods.

            </p>

            

           
            

            <p>For questions about this Privacy Policy or to exercise your data rights, please contact us at<a href="#"> info@nei.com </a> or <a href="#"> 9874562400 </a>.</p>








          </div>




        </div>


        {/* Footer-Start */}
        <Footer> </Footer>
        {/* Footer-End */}

      </main>


    </>
  );
}
