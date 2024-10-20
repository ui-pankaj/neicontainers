import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function PortaCabinMenu() {
  return (
    <>
      <Head>
        <title>Neicontainers</title>

      </Head>

      <div className="porta-cabin-menu">
        <div className="acoustic-solution">
          <div className="acoustic-megamenu-sec
              ">

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="item-list no-border">
                        <h4>Homes</h4>
                        <ul>
                          <li>
                            <Link href="#" className="item-option">Farm House</Link>
                          </li>
                          <li>
                            <Link href="#" className="item-option">Porta Home</Link>
                          </li>
                          <li>
                            <Link href="#" className="item-option">Capsule Homes</Link>
                          </li>
                          <li>
                            <Link href="#" className="item-option">Porta Bunker</Link>
                          </li>

                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="item-list no-border">
                        <h4>Commercials</h4>
                        <ul>
                          <li>
                            <Link href="#" className="item-option">Porta Cabin Restaurants</Link>
                          </li>
                          <li>
                            <Link href="#" className="item-option">Porta Office</Link>
                          </li>
                          <li>
                            <Link href="#" className="item-option">Porta G+1</Link>
                          </li>
                          <li>
                            <Link href="#" className="item-option">Porta Kitchen & Dining </Link>
                          </li>
                          <li>
                            <Link href="#" className="item-option">Porta Stores</Link>
                          </li>

                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="item-list no-border">
                        <h4>Amenities</h4>
                        <ul>
                          <li>
                            <Link href="#" className="item-option">Porta Security</Link>
                          </li>
                          <li>
                            <Link href="#" className="item-option">Porta Toilets/Bathroom</Link>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>



                </div>
                <div className="col-sm-4">

                  <div className="cntnr-imgg">
                    <Image src="/container-dummy.jpg" alt="Acoustic Container" width={500} height={500} priority
                    />
                  </div>
                </div>

              </div>
              <div className="d-flex justify-content-center mt-5 mb-3">
                <button className="theme-btn">Help me choose</button>
              </div>
            </div>

          </div>

        </div>
      </div>


    </>
  );
}
