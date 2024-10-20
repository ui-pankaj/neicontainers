import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function AccousticSolutionMenu() {
  return (
    <>
      <Head>
        <title>Neicontainers</title>
       
      </Head>
      
      <div className="acoustic-solution">
                <div className="acoustic-megamenu-sec
              ">

                  <div className="container">
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="cnnters-list-flex">
                          <div className="cnnter-div">
                            <Image src="/cnntr-1.jpg" alt="Acoustic Container" width={500} height={300} priority
                              />

                            <h6 className="cnnter-div-heading">Acoustic Container</h6>
                            <Link href="#">
                            <p className="lrn-more">Learn More</p>
                            </Link>
                          </div>
                          <div className="cnnter-div">
                            <Image src="/cnntr-2.jpg" alt="Acoustic Container" width={500} height={300} priority
                               />
                            <h6 className="cnnter-div-heading">Transformer Container</h6>
                            <Link href="#">
                            <p className="lrn-more">Learn More</p>
                            </Link>
                          </div>
                          <div className="cnnter-div">
                            <Image src="/cnntr-3.jpg" alt="Acoustic Container" width={500} height={300} priority />
                            <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>
                            <Link href="#">
                            <p className="lrn-more">Learn More</p>
                            </Link>
                          </div>

                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="item-list">
                          <ul>
                            <li>
                              <Link href="#" className="item-option">Fuel Tank</Link>
                            </li>
                            <li>
                              <Link href="#" className="item-option">Control Panel</Link>
                            </li>
                            <li>
                              <Link href="#" className="item-option">Sound Attenvator</Link>
                            </li>
                            <li>
                              <Link href="#" className="item-option">Acoustic Louvers</Link>
                            </li>
                            <li>
                              <Link href="#" className="item-option">Acoustic Door</Link>
                            </li>
                            <li>
                              <Link href="#" className="item-option">Custom Acoustic</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
       
   
    </>
  );
}
