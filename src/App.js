import React from "react";
import { Switch } from "react-router";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Helmet } from 'react-helmet';

// navbar images 
import MobileLogo from '../src/images/logo topbar.jpeg';
import OtherDeviceLogo from '../src/images/logo.png';

// pages 
import Domain from './Components/Domain';
import HomePage from './Components/Main';
import Shared from './Components/Shared';
import AffiliateHome from "./Components/AffiliateHome";
import ResellerMain from "./Components/ResellerMain";
import DedicateMain from "./Components/Dedicate";
import VpsMain from './Components/VpsHome';
import Windows from './Components/Windows';

export default function App() {

  // <!--Start of Tawk.to Script-->
  var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/5d7e91079f6b7a4457e1cadb/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();
  // <!--End of Tawk.to Script-->

  return (
    <Helmet>
      <meta property="og:image" content={OtherDeviceLogo} />
    </Helmet>,
    <Router>
      <>

        {/* navbar to show when on mobile device start here */}
        <nav className="mobileTopBar">
          <div className="container bg-grey m-0 text-light">
            <div className="col-lg-7 pt-3">
              <div className="row">
                <div className="col-6">
                  <Link to="/"> <img src={MobileLogo} className="ms-2" alt="logo that will show on mobile screens only" /> </Link>
                </div>
                <div className="col-6">
                  <div className="row pt-2">
                    <p className="col-1 top-pra fw-bolder mx-0"> <a className="col-1 text-decoration-none text-light" href="https://wa.me/+923111661112/?text=Hello Hoster.Pk"> <i class="fab fa-whatsapp text-white"> </i> </a> </p>
                    <p className="col-1 top-pra fw-bolder mx-1"> <a className="col-1 text-decoration-none text-light" href="https://www.facebook.com/hosters.pk" target="_blank"> <i className="fab fa-facebook-f"> </i> </a> </p>
                    <p className="col-1 top-pra fw-bolder mx-0"> <a className="col-1 text-decoration-none text-light" href="https://www.youtube.com/channel/UCQAxN4p6gnl-T0M0UnIOr4w" target="_blank"> <i class="fab fa-youtube"> </i> </a> </p>
                    <p className="col-1 top-pra fw-bolder mx-2"> <a className="col-1 text-decoration-none text-light" href="col-1 https://pk.linkedin.com/company/pitspk" target="_blank"> <i className="fab fa-linkedin-in"> </i> </a> </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-2 pb-3">
              <div className="row container-fluid text-start p-0 text-dark">
                <div class="col-6">
                  <button class="navbar-toggler me-5 btn bg-light mt-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-list navbar-toggler-icon text-dark"></i>
                  </button>
                  <div class="collapse navbar-collapse me-5" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li class="nav-item dropdown">
                        <span class="nav-link text-white ms-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Hosting
                          <p class="fs-10px d-inline ms-1">
                            <i class="fas fa-chevron-down"></i>
                          </p>
                        </span><ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link class="text-decoration-none" to="/windows">
                            <li>
                              <span class="dropdown-item " href="#">Windows Hosting</span>
                            </li>
                          </Link>
                          <Link class="text-decoration-none" to="/hosting">
                            <li>
                              <span class="dropdown-item " href="#">Shared Hosting</span>
                            </li>
                          </Link>
                          <Link class="text-decoration-none" to="/reseller">
                            <li>
                              <span class="dropdown-item " href="#">Reseller Hosting</span>
                            </li>
                          </Link>
                          <Link class="text-decoration-none" to="/vps">
                            <li>
                              <span class="dropdown-item " href="#">VPS Hosting</span>
                            </li>
                          </Link>
                          <Link class="text-decoration-none" to="/dedicate">
                            <li>
                              <span class="dropdown-item " href="#">Dedicated Hosting</span>
                            </li>
                          </Link>
                        </ul>
                      </li>
                      <li class="nav-item text-dark">
                        <span href="#" class="nav-link mx-2 text-decoration-none">
                          <a class="text-decoration-none text-white" target="_blank" href="https://hoster.pk/clientarea/cart.php?a=add&amp;domain=register"> Domain </a>
                        </span>
                      </li>
                      <li class="nav-item dropdown">
                        <span class="nav-link text-white ms-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Partners
                          <p class="fs-10px d-inline ms-1">
                            <i class="fas fa-chevron-down"></i>
                          </p>
                        </span>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link class="text-decoration-none" to="/reseller"><li>
                            <span class="dropdown-item " href="#">Reseller Hosting</span>
                          </li>
                          </Link>
                          <Link href="https://SSLS.pk" class="text-decoration-none" target="_blank">
                            <li>
                              <span class="dropdown-item " href="#">SSL Reseller</span>
                            </li>
                          </Link>
                          <Link class="text-decoration-none" to="/Domain">
                            <li>
                              <span class="dropdown-item " href="#">Domain Reseller</span>
                            </li>
                          </Link>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <span class="nav-link mx-2 " href="#">
                          <Link class="text-decoration-none text-white" to="/affiliate"> Affiliate </Link>
                        </span>
                      </li>
                      <li class="nav-item">
                        <span href="https://hoster.pk/blog/" class="nav-link mx-2 er text-decoration-none">
                          <a target="_blank" class="text-decoration-none text-white" href="https://hoster.pk/blog/"> Blog </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 mt-2">
                  <div className="row">
                    <div className="col-6">
                      <button className="btn bg-white rounded w-100"> <p className="m-0"> <a href="tel:+923111661112" class="text-decoration-none text-dark fw-bolder"> Call </a> </p> </button>
                    </div>
                    <div className="col-6">
                      <button className="btn bg-white rounded w-100" type="submit">
                        <p class="m-0">
                          <a target="_blank" class="text-decoration-none text-dark fw-bolder" href="https://hoster.pk/clientarea/"> Login </a>
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* navbar to show when on mobile device end here */}

        {/* navbar to show on other devices start here */}

        {/* topbar  */}
        <div class="container-fluid row bg-grey m-0 text-light lh-lg OtherDevice">
          <div class="container m-0 p-0">
            <div class="row m-0 p-0">
              <div class="col-lg-10 col-md-6 col-sm-12">
                <div class="row top-row">
                  <p class=" col-lg-3 col-md-12 m-0 p-0 top-pra fw-bolder">
                    <i class="fas fa-phone-alt me-1"></i> Phone : 03 111 66 111 2 </p>
                  <p class=" col-lg-3 col-md-12 m-0 p-0 top-pra fw-bolder">
                    <i class="fab fa-whatsapp me-1"></i> +923 111 66 111 2 </p>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-12 m-0 p-0">
                <div class="d-flex ps-5">
                  <a class="text-decoration-none text-light" href="https://www.facebook.com/hoster.pk" target="_blank"><p class="mx-2 py-0 my-0 top-pra">
                    <i class="fab fa-facebook-f"></i>
                  </p>
                  </a>
                  <a class="text-decoration-none text-light" href="https://www.youtube.com/channel/UCQAxN4p6gnl-T0M0UnIOr4w" target="_blank">
                    <p class="mx-2 py-0 my-0 top-pra">
                      <i class="fab fa-youtube"></i>
                    </p>
                  </a>
                  <a href="https://pk.linkedin.com/company/pitspk" class="text-white" target="_blank">
                    <p class="mx-2 py-0 my-0 top-pra">
                      <i class="fab fa-linkedin-in"></i>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* navbar  */}
        <nav class="navbar navbar-expand-lg bg-white p-0 m-0 navbar-light">
          <div class="container-fluid text-center p-0">
            <span class="navbar-brand p-0 m-0" href="#">
              <a class="text-decoration-none " to="/">
                <Link to="/"> <img alt="pictures" src={OtherDeviceLogo} className="w-25" /> </Link>
              </a>
            </span>
            <div className="w-60 float-start OtherDevice">
              <div className="my-1">
                <form className='card-form p-1 bg-l-grey mx-1' action="https://hoster.pk/clientarea/cart.php?a=add&domain=register" method="post" target='_blank'>
                  <input type="text" name="query" size="20" className='card-input border-0 px-4 bg-l-grey w-100' placeholder='Find Your Perfect Domain' />
                  <button type="submit" value="Go" className='card-button btn bg-green w-25 text-white fw-bolder'> Go </button>
                </form>
              </div>
            </div>
            <button class="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon text-green">
              </span>
            </button>
            <div class="collapse navbar-collapse me-5" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <span class="nav-link text-dark d-flex" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Hosting
                    <p class="fs-10px d-inline ms-1">
                      <i class="fas fa-chevron-down"></i>
                    </p>
                  </span>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="text-decoration-none" to="/windows">
                      <li>
                        <span class="dropdown-item " href="#">Windows Hosting</span>
                      </li>
                    </Link>
                    <Link class="text-decoration-none" to="/hosting">
                      <li>
                        <span class="dropdown-item " href="#">Shared Hosting</span>
                      </li>
                    </Link>
                    <Link class="text-decoration-none" to="/reseller">
                      <li>
                        <span class="dropdown-item " href="#">Reseller Hosting</span>
                      </li>
                    </Link>
                    <Link class="text-decoration-none" to="/vps">
                      <li>
                        <span class="dropdown-item " href="#">VPS Hosting</span>
                      </li>
                    </Link>
                    <Link class="text-decoration-none" to="/dedicate">
                      <li>
                        <span class="dropdown-item " href="#">Dedicated Hosting</span>
                      </li>
                    </Link>
                  </ul>
                </li>
                <li class="nav-item">
                  <span href="#" class="nav-link text-dark mx-2  text-decoration-none">
                    <a class="text-decoration-none" target="_blank" href="https://hoster.pk/clientarea/cart.php?a=add&amp;domain=register"> Domain </a>
                  </span>
                </li>
                <li class="nav-item dropdown">
                  <span class="nav-link text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Partners <p class="fs-10px d-inline ms-1">
                    <i class="fas fa-chevron-down"></i>
                  </p>
                  </span>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="text-decoration-none" to="/reseller"><li>
                      <span class="dropdown-item " href="#">Reseller Hosting</span>
                    </li>
                    </Link>
                    <a href="https://SSLS.pk" class="text-decoration-none" target="_blank">
                      <li>
                        <span class="dropdown-item " href="#">SSL Reseller</span>
                      </li>
                    </a>
                    <Link class="text-decoration-none" to="/Domain">
                      <li>
                        <span class="dropdown-item" href="#">Domain Reseller</span>
                      </li>
                    </Link>
                  </ul>
                </li>
                <li class="nav-item">
                  <span class="nav-link mx-2 " href="#">
                    <Link class="text-decoration-none" to="/affiliate"> Affiliate </Link>
                  </span>
                </li>
                <li class="nav-item">
                  <span href="https://hoster.pk/blog/" class="nav-link mx-2 er text-decoration-none">
                    <a target="_blank" class="text-decoration-none" href="https://hoster.pk/blog/"> Blog </a>
                  </span>
                </li>
              </ul>
              <button class="btn nav-btn bg-green rounded-pill px-4  p-2 lh-lg text-white fw-bolder" type="submit">
                <p class="m-0">
                  <a target="_blank" class="text-decoration-none text-light" href="https://hoster.pk/clientarea/">CLIENTAREA</a>
                </p>
              </button>
            </div>
          </div>
        </nav>
        {/* navbar to show ehrn on other devices end here */}

        <Switch>
          <Route path="/windows">
            <Window />
          </Route>
          <Route path="/dedicate">
            <Dedicate />
          </Route>
          <Route path="/vps">
            <VPS />
          </Route>
          <Route path="/affiliate">
            <Affiliate />
          </Route>
          <Route path="/reseller">
            <Reseller />
          </Route>
          <Route path="/domain">
            <Domain />
          </Route>
          <Route path="/hosting">
            <Hosting />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

function Home() {
  return <HomePage />;
}
function Hosting() {
  return <Shared />;
}
function Reseller() {
  return <ResellerMain />;
}
function Affiliate() {
  return <AffiliateHome />;
}
function VPS() {
  return <VpsMain />;
}
function Dedicate() {
  return <DedicateMain />;
}
function Window() {
  return <Windows />;
}