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
                            <Image src="/containers/acoustic-container.jpg" alt="Acoustic Container" width={500} height={300} priority
                              />
                            <Link href="#">

                            <h6 className="cnnter-div-heading">Acoustic Container</h6>
                          
                            </Link>
                          </div>
                          <div className="cnnter-div">
                            <Image src="/containers/containers-heavy-red.jpg" alt="Transformer Container" width={500} height={300} priority
                               />
                            <Link href="#">
                            <h6 className="cnnter-div-heading">Transformer Container</h6>
                            {/* <p className="lrn-more">Learn More</p> */}
                            </Link>
                          </div>
                          <div className="cnnter-div">
                            <Image src="/containers/green-acoustic.webp" alt="Heavy Machaniery Container" width={500} height={300} priority />
                            <Link href="#">
                            <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>
                           
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
