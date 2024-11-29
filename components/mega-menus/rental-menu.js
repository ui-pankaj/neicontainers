import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function RentalMenu() {
  return (
    <>
      <Head>
        <title>Neicontainers</title>

      </Head>

      <div className="cargo-containers-mega-menu rental-mega-menu">
        <div className="acoustic-solution">
          <div className="acoustic-megamenu-sec
              ">

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-11 mb-5">
                  <div className="cnnters-list-flex">

                    <div className="cnnter-div">
                      <Image src="/containers/generators-sets.jpg" alt="Generators Sets" width={500} height={300} priority />

                      <h6 className="cnnter-div-heading">Generators Sets</h6>

                    </div>
                    <div className="cnnter-div">
                      <Image src="/containers/porta-cabin.webp" alt="Porta Office" width={500} height={300} priority />
                      <h6 className="cnnter-div-heading">Porta Office</h6>

                    </div>
                 

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
