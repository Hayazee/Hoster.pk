// icons 
import React from 'react'
import headerhalf from '../images/header half.svg'
import experthalf from '../images/expert section.svg'
import features from '../images/features.svg'
// icons 
import dataProtection from '../images/icons/data-protection.png'
import seo from '../images/icons/SEO.png'
import severalServer from '../images/icons/several server.png'
import moneyBack from '../images/icons/money back.png'
import upTime from '../images/icons/uptime.png'
import lessMoney from '../images/icons/less money.png'
// other images 
import greyimg from '../images/grey-img.jpg'
import affiliateimg from '../images/affiliate.png'
// testimonials image 
import client1 from '../images/client 1.jpg'
import client2 from '../images/client 2.jpg'
import client3 from '../images/client 3.jpg'
import client4 from '../images/client 4.jpg'
import client5 from '../images/client 5.jpg'
import client6 from '../images/client 6.jpg'
import blog1 from '../images/blog 1.jpg'
import blog2 from '../images/blog 2.jpg'
import blog3 from '../images/blog 3.jpg'
// components 
import Footer from './Footer'
import Card from './Cards/Cards'
import {
  Link
} from "react-router-dom";
import Logo from '../images/logo topbar.jpeg'
// react Helmet
import { Helmet } from 'react-helmet'
function Main() {
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <title>Best Web Hosting Services in Pakistan | Hosters Pk</title>
        <meta name="description" content="Hoster.pk is offering the best web hosting services in pakistan at affordable rates. We have the best plans with high speed." />
        <meta name='Home Page' />
        <meta name="keywords" content="best web hosting services in pakistan best web hosting company in pakistan best web hosting for reactjs best web hosting services best web hosting for beginners best web hosting for small business best web hosting 2022 best web hosting in pakistan" />
        <meta property="og:title" content="Best Web Hosting Services in Pakistan | Hoster.Pk" />
        <meta property="og:description" content="Hoster.pk is offering the best web hosting services in pakistan at affordable rates. We have the best plans with high speed." />
        <meta property="og:image" content={Logo} />
        <Link rel="canonical" href="https://hoster.pk" />
        <meta name="publisher" content="Pakistan IT Solutions (Pvt).Ltd." />
      </Helmet>
      <main>

        <div className="container-fluid my-1 mobileDevice">
          <form className='card-form p-1 bg-l-grey mx-1' action="https://hoster.pk/clientarea/cart.php?a=add&domain=register" method="post" target='_blank'>
            <input type="text" name="query" size="20" className='card-input border-0 px-4 bg-l-grey w-100' placeholder='Find Your Perfect Domain' />
            <button type="submit" value="Go" className='card-button btn bg-green w-25 text-white fw-bolder'> Go </button>
          </form>
        </div>

        {/* header  */}
        <section className="py-3 bg-success position-relative header text-center" >
          <div className="container">
            <div className="row">
              <h1 className='fw-bolder text-warning mb-2'> As Always, we are there for you!  </h1>
              <h5 className='fw-bolder text-white'> In this rapid inflation era <span className='fw-bolder text-warning m-0'> hoster.pk </span> is entertaining its customer with the stability of exchange rates calculating on <span className='text-warning fw-bolder m-0'> 139 PKR = $1 </span>. So keep enjoying your national hosting company. </h5>
              <h3 className='fw-bolder text-warning mb-2'> Pakistan Zindabad! </h3>
            </div>
          </div>
        </section>

        {/* card section  */}
        <Card />

        <section className="py-3 bg-success position-relative header" >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 text-start my-5">
                <h5 className='text-capitalize text-white'>
                  We Offer Superb Discounted prices to our national borthers & sisters 100% full powered SSD hosting just in <span className='text-warning fw-bolder m-0'> 3114 </span> with free .com domain also we have Flash Server with NVMe powered
                </h5>
                <br />
                <h5 className='text-capitalize text-white'>
                  Big Offer for .Pk Lovers, Get .Pk domain in<del className='mx-1'> 2500 </del>Rs <span className='text-warning fw-bolder'> 2299 </span> only
                </h5>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                <img alt="pictures" className="w-50" src={headerhalf} />
              </div>
            </div>
          </div>
        </section>

        {/* expert section  */}
        <section className="bg-success my-5">
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
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img alt="pictures" className="w-100 my-5" src={experthalf} />
              </div>
            </div>
          </div>
        </section>

        {/* features  */}
        <section className="dedicateMain">
          <div className="container py-5">
            <h2 className="text-center fw-bolder my-3"> OUR MOST POPULAR<span className="text-green"> FEATURES </span>FOR ALL TIME</h2>
            <h6 className="text-dark fw-bold text-center m-auto p-auto my-2">We guaranteed you will like our Services that's why we offer 30 Days money back guaranty without any Question.</h6>
            <div className="row my-5">
              <div className="col-lg-4 col-md-4 col-sm-12 my-4 text-align-right px-5">
                <div className="my-3">
                  <img alt="pictures" src={lessMoney} className="featuresimg bg-l-grey rounded-circle w-25" />
                  <h4 className="fw-bolder">Best Affordable Prices</h4>
                  <p className="text-dark fw-bold">We provide the best hosting services at affordable prices. We always offer reasonable prices for our clients.</p>
                </div>
                <div className="my-3">
                  <img alt="pictures" src={upTime} className="featuresimg bg-l-grey rounded-circle w-25" />
                  <h4 className="fw-bolder">Uptime & Reliability</h4>
                  <p className="text-dark fw-bold">We have proactive monitoring down to seconds with reactive solutions in place.</p>
                </div>
                <div className="my-3">
                  <img alt="pictures" src={dataProtection} className="featuresimg bg-l-grey rounded-circle w-25" />
                  <h4 className="fw-bolder">Data Protection </h4>
                  <p className="text-dark fw-bold">We provide 100% secure data protection. Which keeps your data away from hacking, and viruses.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 my-4">
                <img alt="pictures" src={features} className="w-100 features-center" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 my-4 text-align-left px-5">
                <div className="my-3">
                  <img alt="pictures" src={moneyBack} className="featuresimg bg-l-grey rounded-circle w-25" />
                  <h4 className="fw-bolder">30 Days Money Back</h4>
                  <p className="text-dark fw-bold">To guarantee that we deliver on our promises, we provide a 30-days money back refund.</p>
                </div>
                <div className="my-3">
                  <img alt="pictures" src={seo} className="featuresimg bg-l-grey rounded-circle w-25" />
                  <h4 className="fw-bolder">Free SEO</h4>
                  <p className="text-dark fw-bold">We have SEO tools in c-panel and we provide free and best SEO services</p>
                </div>
                <div className="my-3">
                  <img alt="pictures" src={severalServer} className="featuresimg bg-l-grey rounded-circle w-25" />
                  <h4 className="fw-bolder">Multiple, Central Server</h4>
                  <p className="text-dark fw-bold">We provide low lantancy time and have a central server on multiple locations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* compromise  */}
        <section>
          <div className="container-fluid">
            <div className="row px-2">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="bg-success  p-5 rounded text-light justify-content-center position-relative">
                  <h2 className="my-4">We dont compromise with the best hosting Solution</h2>
                  <p className="my-4">We provide website up-time and excellent web services. We have multiple data paths to ensures no single path is here and 100% excellent results.The website will be online and loads quickly, during maintenance and upgrades. OneClick app installation Only 1 click installer offers CMS apps including WordPress, Joomla, and Drupal.</p>
                  <p className="my-4">Get all benefits from powerful and secure hoster.pk at best & affordable prices. Our clustered architecture provides the best levels of redundancy and protects your site from malicious attacks.With the help of pooling technology. On our Web Hosting plans you can also get a dedicated SSL certificate. Which is free for one year.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 position-relative half text-center p-0 m-0">
                <img alt="pictures" src={greyimg} className="w-100 bx-shadow rounded" />
              </div>
            </div>
          </div>
        </section>

        {/* reseller  */}
        <section className="my-5 py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img alt="pictures" src={affiliateimg} className="w-100" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                <h1 className="fw-bolder mt-4"> 100% <span className="text-green"> White-Label </span> Resseller </h1>
                <div className='ps-3 pt-0 mt-0'>
                  <h4 className='fw-bold ms-5 ps-5'> Dedicated Hot Line </h4>
                </div>
                <h6 className="fw-bolder my-3"> Start your own Hosting Business with automatic Billing System. </h6>
                <p className="text-dark my-3">At hoster.pk, we grow mutually. You bring business, we share profit with bespoken services!! Get reseller hosting service with shareable bandwidth and hard drive Today.</p>
                <Link to={`/reseller`} className="text-decoration-none"><button className="btn nav-btn text-light rounded-pill px-5 my-3 btn-mobile fw-bolder"> Become Partner </button></Link>
              </div>
            </div>
          </div>
        </section>

        {/* testimonial  */}
        <section className="my-5 bg-l-grey text-center">
          <div className="container-fluid py-3">
            <h1 className="my-3 fw-bolder">Our <span className="text-green">Clients</span> Says </h1>          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="container carousel-inner p-0">
                <div className="carousel-item  active" >
                  <div className="row my-5">
                    <div className="col-lg-6 col-md-12 col-sm-12 my-5">
                      <img alt="pictures" src={client1} className="rounded-circle w-20 bottom-50px position-relative float-start ms-5 testimonial-img" />
                      <div className="bg-white text-start bx-shadow p-4 position pt-5 rounded-15">
                        <h6 className="fw-bolder mx-1 mt-5 pt-3">"hoster.pk is very responsible and give exellent quality of workd, it is the best choice for my taste.Their shared hsoting services works awesome.I am very thankful to you for providing such an exellent website."</h6>
                        <h6 className="text-green my-1 mt-3 fw-bolder">Aida Bugg</h6>
                        <p className="text-warning "><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-5">
                      <img alt="pictures" src={client2} className="rounded-circle w-20 bottom-50px position-relative float-start ms-5 testimonial-img" />
                      <div className="bg-white text-start bx-shadow p-4 position pt-5 rounded-15">
                        <h6 className="fw-bolder mx-1 mt-5 pt-3">"They are really interested in your site.The big difference from most companies is that all their hosting services are the best, especially shared hosting.They offer theeir services at a low cost and do a great job"</h6>
                        <h6 className="text-green my-1 mt-3 fw-bolder">Nino George</h6>
                        <p className="text-warning "><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row my-5">
                    <div className="col-lg-6 col-md-12 col-sm-12 my-5">
                      <img alt="pictures" src={client3} className="rounded-circle w-20 bottom-50px position-relative float-start ms-5 testimonial-img" />
                      <div className="bg-white text-start bx-shadow p-4 position pt-5 rounded-15">
                        <h6 className="fw-bolder mx-1 mt-5 pt-3">"I am writing to inform you about the excellent and reliable services we have received from hosters.They gave more attention to customer service and detail.They are giving their services at an affordable price.I really appericiate their work."</h6>
                        <h6 className="text-green my-1 mt-3 fw-bolder">Chloe Sofia</h6>
                        <p className="text-warning "><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-5">
                      <img alt="pictures" src={client4} className="rounded-circle w-20 bottom-50px position-relative float-start ms-5 testimonial-img" />
                      <div className="bg-white text-start bx-shadow p-4 position pt-5 rounded-15">
                        <h6 className="fw-bolder mx-1 mt-5 pt-3 mb-4 pb-2">"Thank you for being so humble, hosters. pk! The SSL certificates were missing from my website. A quick call to hoster.pk resolved the problem."</h6>
                        <h6 className="text-green my-1 mt-3 fw-bolder">Zero Woods</h6>
                        <p className="text-warning "><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row my-5">
                    <div className="col-lg-6 col-md-12 col-sm-12 my-5">
                      <img alt="pictures" src={client5} className="rounded-circle w-20 bottom-50px position-relative float-start ms-5 testimonial-img" />
                      <div className="bg-white text-start bx-shadow p-4 position pt-5 rounded-15">
                        <h6 className="fw-bolder mx-1 mt-5 pt-3">"My business of reseller hosting with hoster.pk is a pleasant experience. The speed was surprising and the services proved 100% up time.”."</h6>
                        <h6 className="text-green my-1 mt-3 fw-bolder">Mack Jhonston</h6>
                        <p className="text-warning "><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-5">
                      <img alt="pictures" src={client6} className="rounded-circle w-20 bottom-50px position-relative float-start ms-5 testimonial-img" />
                      <div className="bg-white text-start bx-shadow p-4 position pt-5 rounded-15">
                        <h6 className="fw-bolder mx-1 mt-5 pt-3">"I called a customer representative to discuss my dedicated hosting needs. Surprisingly they craft me a plan and quoted in budget!! It was really a good buying experience."</h6>
                        <h6 className="text-green my-1 mt-3 fw-bolder">Gaibriella Charles</h6>
                        <p className="text-warning "><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="btn btn-outline-success slider-btn mx-2 rounded-circle" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className="btn btn-outline-success slider-btn mx-2 rounded-circle"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className="btn btn-outline-success slider-btn mx-2 rounded-circle"></button>
            </div>
          </div>
        </section>

        {/* blog  */}
        <section className="mt-5 pt-3">
          <div className="container">
            <h5 className="text-center ffw-bold my-3">Latest Info</h5>
            <h1 className="text-center fw-bolder my-3">Get Latest <span className="text-green">Info</span></h1>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div><img alt="pictures" src={blog3} className="position-relative w-100" /></div>
                <div className="bg-white position-relative bottom-50px bx-shadow p-3 mx-4 text-start position-relative">
                  <h6 className="text-secondary"> Share Hosting </h6>
                  <h5 className="fw-bolder"> Attentive was born in 2015 help sales teams </h5>
                  <hr className="text-green fw-bolder position-relative top-50" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div><img alt="pictures" src={blog2} className="position-relative w-100" /></div>
                <div className="bg-white position-relative bottom-50px bx-shadow p-3 mx-4 text-start">
                  <h6 className="text-secondary"> Share Hosting </h6>
                  <h5 className="fw-bolder"> Attentive was born in 2015 help sales teams </h5>
                  <hr className="text-green fw-bolder position-relative top-50" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div><img alt="pictures" src={blog1} className="position-relative w-100" /></div>
                <div className="bg-white position-relative bottom-50px bx-shadow p-3 mx-4 text-start">
                  <h6 className="text-secondary"> Share Hosting </h6>
                  <h5 className="fw-bolder"> Attentive was born in 2015 help sales teams </h5>
                  <hr className="text-green fw-bolder position-relative top-50" />
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

export default Main
