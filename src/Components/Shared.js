import React from 'react'
import experthalf from '../images/expert section.svg'
import Footer from './Footer'
import Card from "./Cards/Cards"
import { Helmet } from 'react-helmet'
import Logo from '../images/logo.png'
import {
  Link
} from "react-router-dom";

function Shared() {
  // scrool from top
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <script src="/path/to/express.static" type="text/javascript" />
        <title>Best Shared Web Hosting Plans of 2022 - hoster.pk</title>
        <meta name='Shared Hosting' />
        <meta name="keywords" content="shared web hosting best shared web hosting plans of 2022 best shared web hosting cheap shared web hosting shared web hosting cheapest shared web hosting" />
        <meta name="description" content="Hoster.pk is offering the best web hosting services in pakistan at affordable rates. We have the best plans with high speed." />
        <meta property="og:title" content="Best Shared Web Hosting Plans of 2022 - Hoster.pk" />
        <meta property="og:description" content="Want to buy shared web hosting plans? Visit hoster.pk that is offering variety of packages with extreme storage and speed that tells itself." />
        <meta property="og:image" content={Logo} />
        <Link rel="canonical" href="https://hoster.pk/hosting" />
        <meta name="publisher" content="Pakistan IT Solutions (Pvt).Ltd." />
      </Helmet>

      {/* main section  */}
      <section className="dedicateMain pt-5">
        <div className="container text-center pt-5">
          <h1 className="fw-bolder my-3">Shared Hosting</h1>
          <div className="mx-5 px-5">
            <hr className="text-green px-5 mx-5" />
          </div>

          {/* pricing  */}
          <section className="mb-5 pt-0">
            <h4 className="text-center fw-bolder">Did your needs fall on single hosting that is shareable! Here we have shared hosting in HDD and SDD stats which delivers the demanded speed on the go. The quality is emphasized with 30 days money back guarantee!!
              <a href="tel:+923111661112" className="ms-3">Call Now</a></h4>
          </section>

        </div>

        {/* card section  */}
        <Card />

      </section>

      {/* features  */}
      <section className="my-5">
        <div className="container">
          <h1 className="fw-bolder text-center my-3"> Features </h1>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 my-3">
              <h3 className="fw-bolder my-3 bg-grey p-3 text-light rounded"> Special For Developers </h3>
              <h6> <i className="far fa-check-circle text-green me-3"></i>
                PHP, PHP 7.x, 8.x Support with Version Selector </h6>
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

      {/* expert section  */}
      <section className="bg-success">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-light">
              <div className="text-start">
                <h1 className="fw-bolder display-5 my-4">24/7 Expert Hosting Support Our Customers Love </h1>
                <h6 className="my-4 fw-bold">Objectively innovate highcompellingly progressively pursue mission- critical information quality impretives.</h6>
                <div className="ps-5 ms-4">
                  <span>
                    <a href="javascript:void(Tawk_API.toggle())">
                      <button className="btn btn-light px-3 fw-bolder fs-10px ms-5 btn-lg p-3">LIVE CHAT</button>
                    </a>
                  </span>
                </div>
                <div className="row my-4 text-center">
                  <h5 className="col-lg-6 col-md-6 col-sm-12 fw-bolder"> <i className="fas fa-phone-volume text-warning"></i> Call : 03 111 66 111 2</h5>
                  <h5 className="col-lg-6 col-md-6 col-sm-12 fw-bolder"> <i className="fab fa-whatsapp text-warning"></i>  +923 111 66 111 2</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12"><img alt="pictures" className="w-100 my-5" src={experthalf} /></div>
          </div>
        </div>
      </section>

      {/* footer  */}
      <Footer />

    </>
  )
}

export default Shared;
