import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function CargoContainersMenu() {
  return (
    <>
      <Head>
        <title>Neicontainers</title>

      </Head>

      <div className="cargo-containers-mega-menu">
        <div className="acoustic-solution">
          <div className="acoustic-megamenu-sec
              ">

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-11">
                  <div className="cnnters-list-flex">
                    <div className="cnnter-div">
                      <Image src="/cnntr-1.jpg" alt="Acoustic Container" width={1300} height={600} priority />

                      <h6 className="cnnter-div-heading">Acoustic Container</h6>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/cnntr-2.jpg" alt="Acoustic Container" width={500} height={300} priority />
                      <h6 className="cnnter-div-heading">Transformer Container</h6>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/cnntr-3.jpg" alt="Acoustic Container" width={500} height={300} priority />
                      <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/cnntr-1.jpg" alt="Acoustic Container" width={500} height={300} priority />

                      <h6 className="cnnter-div-heading">Acoustic Container</h6>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/cnntr-2.jpg" alt="Acoustic Container" width={500} height={300} priority />
                      <h6 className="cnnter-div-heading">Transformer Container</h6>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/cnntr-3.jpg" alt="Acoustic Container" width={500} height={300} priority />
                      <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/cnntr-3.jpg" alt="Acoustic Container" width={500} height={300} priority />
                      <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/cnntr-3.jpg" alt="Acoustic Container" width={500} height={300} priority />
                      <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>

                    </div>

                  </div>
                  <div className="d-flex justify-content-center mt-5 mb-3">
                    <button className="theme-btn">Custom Conatiner</button>
                  </div>


                </div>

              </div>
            </div>

          </div>

        </div>
      </div>


    </>
  );
}
