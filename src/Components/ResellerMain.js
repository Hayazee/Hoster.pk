import React from 'react'
import Reseller from '../images/reseller.png'
import YChooseUs from '../images/y choose us image.png'
import Footer from './Footer'
import ResellerCard1 from './Cards/ResellerCard1'
import ResellerCard2 from './Cards/ResellerCard2'
import { Helmet } from 'react-helmet';
import Logo from '../images/logo.png'
import {
  Link
} from "react-router-dom";

const ResellerMain = () => {
  // tabs 
  const selectTab = element => {
    const active = document.querySelector('.tab-active');
    const visible = document.querySelector('.content-visible');
    const tabContent = document.getElementById(element.href.split('#')[1]);
    if (active) {
      active.classList.remove('tab-active');
    }
    element.classList.add('tab-active');
    if (visible) {
      visible.classList.remove('content-visible');
    }
    tabContent.classList.add('content-visible');
  }
  document.addEventListener('click', event => {
    if (event.target.matches('.tab-item a')) {
      selectTab(event.target);
    }
  }, false);
  // scrool from top
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <title>Best Reseller Web Hosting Services in Pakistan | Hosters Pk</title>
        <meta name="Best Reseller Web Hosting Services in Pakistan | Hosters Pk" />
        <meta name="keywords" content="best reseller web hosting best reseller web hosting service best reseller web hosting Pakistan good reseller web hosting best site reseller web hosting best reseller plan web hosting best software for reseller web hosting best web hosting reseller package reseller web hosting best value" />
        <meta name="description" content="Hoster.pk serves in variety of domains and hosting services that benifits all. You can also buy best reseller web hosting services with amazing discounts." />
        <meta property="og:title" content="Best Reseller Web Hosting Services in Pakistan | Hoster.Pk" />
        <meta property="og:description" content="Hosters pk serves in variety of domains and hosting services that benifits all. You can also buy best reseller web hosting services with amazing discounts." />
        <meta name="publisher" content="Haya Zeeshan" />
        <Link rel="canonical" href="https://hoster.pk/reseller" />
        <meta property="og:image" content={Logo} />
      </Helmet>
      <main>
        {/* header  */}
        
        {/* header section  */}
        <section className="dedicateMain pt-5">
          <div className="container text-center">
            <h1 className="fw-bolder my-3">Reseller Hosting</h1>
            <div className="mx-5 px-5">
              <hr className="text-green px-5 mx-5" />
              <h4 className="text-center fw-bolder">At hoster.pk, we grow mutually. You bring business, we share profit with bespoken services!! Get reseller hosting service with shareable bandwidth and hard drive Today.</h4>
            </div>
          </div>

          {/* card section  */}
          <section className="text-center">
            <h1 className="fw-bolder text-center">Wide Range Of <span className="text-green">Reseller Hosting</span> Plans</h1>
            <h6 className="my-2 fw-bold"> Choose your Plans </h6>
            <section className="my-5 text-center">
              <div className="container text-center">
                <div className="tab-row text-center bg-l-grey tab-row pt-3 pb-2 rounded-pill">
                  <div className="tabs row rounded-pill fw-bolder w-100 text-center">
                    <div className="col-lg-6 col-md-4 col-sm-12">
                      <h6 className="tab-item"><a href="#resellerssdhosting" className="text-decoration-none w-100 tab-active px-5 fw-bolder">SSD Hosting</a></h6>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12 tab-item">
                      <h6 className="tab-item"><a href="#resellerflashhosting" className="text-decoration-none w-100 px-5 fw-bolder">Flash Hosting</a></h6>
                    </div>
                  </div>
                </div>
                <div className="wrapper_tab-content">
                  <article id="resellerssdhosting" className="tab-content content-visible">
                    <ResellerCard1 />
                  </article>
                  <article id="resellerflashhosting" className="tab-content">
                    <ResellerCard2 />
                  </article>
                </div>
              </div>
            </section>
          </section>

        </section>

        {/* reseller */}
        <section className="bg-l-grey py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-sm-12">
                <img alt="images" src={Reseller} className="rounded w-100" />
              </div>
              <div className="col-lg-8 col-md-7 col-sm-12 py-5">
                <h2 className="fw-bolder">Reseller Hosting</h2>
                <h6>Our Reseller programs are fully secured and reliable. hoster.pk provides best services not only
                  limited to sell hostings. But they also have wide range of services which may offer our clients can
                  make money. Our Services also includes Domain Names, Web Hosting, Reseller Hosting Plans, VPS,
                  and Cloud VPS. And Dedicated Servers, SSLs, Managed WordPress Services, Web Development &
                  many more.</h6>
              </div>
            </div>
          </div>
        </section>

        {/* why choose unders  */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12">
              <h2 className="fw-bolder">Why Choose Us</h2>
              <h6>Our Reseller programs are fully secured and reliable. hoster.pk provides best services not only limited
                to sell hostings. But they also have wide range of services which may offer our clients can make money. Our
                Services also includes Domain Names, Web Hosting, Reseller Hosting Plans, VPS, and Cloud VPS. And
                Dedicated Servers, SSLs, Managed WordPress Services, Web Development & many more.</h6>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12">
              <img alt="images" src={YChooseUs} className="rounded w-75" />
            </div>
          </div>
        </div>

        {/* features  */}
        <section className="">
          <div className="container">
            <h1 className="fw-bolder text-center my-3 text-green"> Features </h1>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 my-3">
                <h3 className="fw-bolder my-3 bg-grey p-3 text-light rounded"> Special For Developers </h3>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  PHP, PHP 7.x, 5.x Support with Version Selector </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  WordPress, Joomla, Prestashop, OpenCart, Magento… 250+ </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  MySQL Databases </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  phpMyAdmin for MySQL </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Cron Jobs </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  SitePad Website Builder </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Shell Access / SFTP </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Ruby on Rails </h6>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 my-3">
                <h3 className="fw-bolder my-3 bg-grey p-3 text-light rounded"> Why Choose Us </h3>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  30 Days Moneyback Guaranted </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  <del className="me-2"> 99.9% </del> 100% UpTime Guaranted </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Free Domain Registeration </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  No Hidden Charges </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Enterprise RAID 10 Drives </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Phone, Email, Chat & Whatsapp Support </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  In Business Since 2006 with more then <span className="fw-bolder">24000+</span> Sites </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Experienced & Friendly Support Staff </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Multiple Landline & Toll free #Support </h6>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 my-3">
                <h3 className="fw-bolder my-3 bg-grey p-3 text-light rounded">Email Features </h3>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Mail Boxes </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  POP3 / SMTP / IMAP </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Web Based Email </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Spam & Virus Protection </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Email Groups </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Email lists </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Catch-All Mail Addresses </h6>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 my-3">
                <h3 className="fw-bolder my-3 bg-grey p-3 text-light rounded"> Other Resources </h3>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  FTP Accounts </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Domain Aliases </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Scheduled Tasks , Crontab </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  File MIME Types </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  File Manager  </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Application Packs (Self Install Scripts) </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Raw Log Files </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Web Traffic Statistic </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Flash, Streaming Audio / Video Support </h6>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 my-3">
                <h3 className="fw-bolder my-3 bg-grey p-3 text-light rounded"> Supported Products Addons </h3>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  SSL Certificate & Dedicated IP </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Advanced Website Security </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Corporate / Business Email </h6>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 my-3">
                <h3 className="fw-bolder my-3 bg-grey p-3 text-light rounded"> Datacenters Specs </h3>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Redundant Fibre Carriers (6+) </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Six pairs with 2+ strands each </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Automatic failover between fiber pairs. </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  24×7 Network Monitoring </h6>
                <h6> <i className="far fa-check-circle text-green me-3"></i>
                  Nightly Security Updates </h6>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs  */}
        <section className="mt-3 container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12"><img alt="images" src="https://themelooks.us/demo/ecohosting/wordpress/wp-content/uploads/2016/11/domain-page-faq-1.png" /></div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-5">
              <h1 className="fw-bolder mt-3">Reseller FAQs</h1>
              <hr className="text-green mb-3" />
              <p className="bg-green text-light p-2 fw-bolder rounded" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What Is A Reseller Hosting? <span className="float-end"> <i className="fas fa-angle-down"></i> </span>
              </p>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <p className="card-body border rounded">
                  Reseller hosting is a type of web hosting in which the account owner uses his allotted hard drive space and bandwidth to hose the websites of third parties. The account owner is the reseller, as he purchases the services of a parent web hosting company and sells it as his own.
                </p>
              </div>
              <div className="collapse-2 my-3">
                <p className="bg-green text-light p-2 fw-bolder rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                  How Do I Transfer Web Pages To Server? <span className="float-end"> <i className="fas fa-angle-down"></i> </span>
                </p>
                <div className="collapse" id="collapseExample2">
                  <div className="card card-body">
                    <p>Generate a 'Full Backup' of your website and store it on the server by selecting 'Home Directory' as the destination from the cPanel. ... Login to WHM using the details provided in the welcome email. Click on 'Transfer Button' on the Home page.</p>
                  </div>
                </div>
              </div>
              <div className="collapse-3">
                <p className="bg-green text-light p-2 fw-bolder rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                  Purchased A Hosting.Now What Do I Do? <span className="float-end"> <i className="fas fa-angle-down"></i> </span>
                </p>
                <div className="collapse" id="collapseExample3">
                  <div className="card card-body">
                    <p>Choosing a reseller hosting business startup plan. Let's start our guide with how to choose from different plans. ... Do not buy the cheapest plan. ... Use a corporate billing system. ... Provide 24/7 support. ... Use private nameservers. ... Install an SSL certificate. ... Add trust seals to the footer of your website.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* footer  */}
        <Footer />
      </main>
    </>
  )
}

export default ResellerMain
