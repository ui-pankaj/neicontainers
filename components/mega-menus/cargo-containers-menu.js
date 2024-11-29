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
                      <Image src="/containers/standard-container.jpg" alt="Standard Container" width={1300} height={600} priority />
                      <Link href="#">
                        <h6 className="cnnter-div-heading">Standard Container</h6>
                      </Link>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/containers/high-cube-container.jpg" alt="Highcube Container" width={500} height={300} priority />
                      <Link href="#">

                        <h6 className="cnnter-div-heading">Highcube Container</h6>
                      </Link>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/containers/Flat-Rack.webp" alt="Flat Rack Container" width={500} height={300} priority />
                      <Link href="#">

                        <h6 className="cnnter-div-heading">Flat Rack Container</h6>
                      </Link>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/containers/open-top.webp" alt="Open Top Container" width={500} height={300} priority />
                      <Link href="#">
                        <h6 className="cnnter-div-heading">Open Top Container</h6>
                      </Link>


                    </div>
                    <div className="cnnter-div">
                      <Image src="/containers/open-side.jpg" alt="Open Side Container" width={500} height={300} priority />

                      <Link href="#">
                        <h6 className="cnnter-div-heading">Open Side Container</h6>

                      </Link>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/containers/insulated.jpg" alt="Insulated & Thermal Container" width={500} height={300} priority />

                      <Link href="#">
                        <h6 className="cnnter-div-heading">Insulated & Thermal Container</h6>

                      </Link>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/containers/tank-container.webp" alt="Tank Container" width={500} height={300} priority />
                      <Link href="#">

                        <h6 className="cnnter-div-heading">Tank Container</h6>
                      </Link>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/containers/double-door.png" alt="Double Door Container" width={500} height={300} priority />
                      <Link href="#">

                        <h6 className="cnnter-div-heading">Double Door Container</h6>
                      </Link>

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
