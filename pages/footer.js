import Head from "next/head";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Head>
        <title>Neicontainers</title>
      </Head>

      <main className="">
        <footer className="footer-sec">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="footer-info">
                  <img src="/nei-text-logo.svg" />
                  <p>
                    National Engineering Industries in Dharuhera is one of the leading businesses in the all types of Containers.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="fttr-clm">
                  <h4 className="">Quick Links</h4>
                  <ul>
                    <li>
                      <Link href="#" > <i className="fa-solid fa-angle-right"></i> Home</Link>
                    </li>

                    <li>
                      <Link href="#" > <i className="fa-solid fa-angle-right"></i> Services</Link>
                    </li>

                    <li>
                      <Link href="#" ><i className="fa-solid fa-angle-right"></i> Products</Link>
                    </li>

                    <li>
                      <Link href="#" ><i className="fa-solid fa-angle-right"></i> About Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="fttr-clm">
                  <h4 className="">Support</h4>
                  <ul>
                    <li>
                      <Link href="#" > <i className="fa-solid fa-angle-right"></i> Shipping Policy</Link>
                    </li>

                    <li>
                      <Link href="#" > <i className="fa-solid fa-angle-right"></i> Terms & Conditions</Link>
                    </li>

                    <li>
                      <Link href="#" ><i className="fa-solid fa-angle-right"></i> Privacy Policy</Link>
                    </li>

                    <li>
                      <Link href="/contact-us" ><i className="fa-solid fa-angle-right"></i> Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="fttr-clm contact-us-ftr">
                  <h4 className="">Contact Us</h4>
                  <ul>
                    <li className="phn-nmbr">
                      <i className="fa-solid fa-phone"></i>
                      <span>+91-9876543210</span>
                    </li>

                    <li className="email-adrs">
                      <i className="fa-solid fa-envelope"></i>
                      <span>info@nei.com</span>
                    </li>

                    <li className="location-adrs">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>Dharuhera, Haryana, <br /> India, 141001</span>
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <div className="copy-right-section">
              <div className="socials-icons">
                <span> <Link href="#"><img src="/facebook.png" /></Link> </span>
                <span> <Link href="#"><img src="/instagram.png" /></Link> </span>
                <span> <Link href="#"> <img src="/linkedin.png" /></Link> </span>
                <span> <Link href="#"><img src="/youtube.png" /></Link> </span>
              </div>
              <p>
                Nei © 2024, All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>

      </main>


    </>
  );
}
