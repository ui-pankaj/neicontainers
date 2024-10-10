import Head from "next/head";
import Link from "next/link";
import { useState } from 'react'; // Import useState

export default function Header() {

  const [isHovered, setIsHovered] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (item) => {
    setIsHovered(true);
    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
    setActiveItem(null);
  };

  return (
    <>
      <Head>
        <title>National Engineering Industries</title>

        {/* Google-font  */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

        {/* Fontawesome */}

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      </Head>

      {/* Header-start */}

      <header>
        <div className="header-sec">
          <div className="row">
            <div className="col-sm-3">
              <div className="main-logo">
                <img src="/nei-text-logo.svg" />
              </div>
            </div>
            <div className="col-sm-6">
              <nav className="main-menu">
                <ul>
                  <li className={`hover-item ${activeItem === 'item1' ? 'active' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}><Link href="#" >Acoustic Solutions</Link></li>

                  <li className={`hover-item ${activeItem === 'item2' ? 'active' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}><Link href="#">Cargo Containers</Link></li>

                  <li><Link href="#">Porta Cabin</Link></li>
                  <li><Link href="#">Retail</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-sm-3">
              <nav className="main-menu-right">
                <ul className="menu-icons">
                  <li><Link href="#"><span><img src="/info.svg" /></span></Link></li>
                  <li><Link href="#"><span><img src="/circle-phone.svg" /></span></Link></li>

                </ul>
              </nav>
            </div>
          </div>

          {/* Megamenu Acoustic Container */}
          {isHovered && (
            <div
              id="hover-content"
              className={`acoustic-solution ${isHovered ? 'show' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="acoustic-megamenu-sec
              ">

                <div className="container">
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="cnnters-list-flex">
                        <div className="cnnter-div">
                          <img src="/cnntr-3.jpg" />
                          <h6 className="cnnter-div-heading">Acoustic Container</h6>
                          <Link href="#">  <p className="lrn-more">Learn More</p></Link>
                        </div>
                        <div className="cnnter-div">
                          <img src="/cnntr-2.jpg" />
                          <h6 className="cnnter-div-heading">Transformer Container</h6>
                          <Link href="#">  <p className="lrn-more">Learn More</p></Link>
                        </div>
                        <div className="cnnter-div">
                          <img src="/cnntr-1.jpg" />
                          <h6 className="cnnter-div-heading">Heavy Machinery Container</h6>
                          <Link href="#">  <p className="lrn-more">Learn More</p></Link>
                        </div>

                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="item-list">
                        <ul>
                          <li>
                            <Link href="#">Fuel Tank</Link>
                          </li>
                          <li>
                            <Link href="#">Control Panel</Link>
                          </li>
                          <li>
                            <Link href="#">Sound Attenvator</Link>
                          </li>
                          <li>
                            <Link href="#">Acoustic Louvers</Link>
                          </li>
                          <li>
                            <Link href="#">Acoustic Door</Link>
                          </li>
                          <li>
                            <Link href="#">Custom Acoustic</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}


        </div>


      </header>



    </>
  );
}
