import React from 'react'
import work1 from '../images/work 1.png'
import work2 from '../images/work 2.png'
import work3 from '../images/work 3.png'
import Footer from './Footer'
import $ from 'jquery'
import { Helmet } from 'react-helmet'
import Logo from '../images/logo.png'
import {
    Link
  } from "react-router-dom";

const AffiliateHome = () => {
    // total
    $(function () {
        var fx = function fx() {
        $(".stat-number").each(function (i, el) {
            var data = parseInt(this.dataset.price, 10);
            var props = {
                "from": {
                    "count": 0
                },
                    "to": { 
                    "count": data
                }
            };
            $(props.from).animate(props.to, {
                duration: 2000 * 1,
                step: function (now, fx) {
                    $(el).text(Math.ceil(now));
                },
                complete:function() {
                    if (el.dataset.sym !== undefined) {
                      el.textContent = el.textContent.concat(el.dataset.sym)
                    }
                }
            });
        });
        };
        
        var reset = function reset() {
            //console.log($(this).scrollTop())
            if ($(this).scrollTop() > 350) {
                $(this).off("scroll");
              fx()
            }
        };
        
        $(window).on("scroll", reset);
    });
    // scroll from top 
    return (
        <>
            <Helmet>
                <title>Earn Money with Affiliate Web Hosting | hoster.pk</title>
                <meta name="description" content="Make your passive income source with our affiliate web hosting plans. Get conencted and let's grow together by mutual earning."/>
                <meta name="keywords" content="affiliate web hosting cheap affiliate web hosting services cheap affiliate web hosting cheap affiliate web hosting in pakistan cheap affiliate web hosting for small business cheap affiliate web hosting services cheap affiliate web hosting and domain cheap affiliate web hosting in pakistan 2022"/>
                <meta name='Earn Money with Affiliate Web Hosting | Hoster.pk'/>
                <meta property="og:title" content="Earn Money with Affiliate Web Hosting | Hoster.pk" />
                <meta property="og:description" content="Make your passive income source with our affiliate web hosting plans. Get conencted and let's grow together by mutual earning." />
                <meta property="og:image" content={Logo} />
                <Link rel="canonical" href="https://hoster.pk/affiliate" />
                <meta name="publisher" content="Haya Zeeshan" />
            </Helmet>
            <main>
            {/* heading  */}
            <section className="p-5 blogBg">
                <div className="text-center container text-light fw-bolder">
                    <h1 className="fw-bolder display-4"> Affiliate </h1>
                    <hr className="mx-5 px-5"/>
                </div>
            </section>
            {/* main  */}
            <section className="my-5 container">
                <h1 className="fw-bolder  text-center mt-5"> Web Hosting Affiliate Program </h1>
                <hr className="text-green mx-5 px-5 text-center mb-5" />
                <h6 className="fw-bold my-3"> Make some quick and easy cash using our FREE Web Hosting Affiliate Program! </h6>
                <h2 className="fw-bolder my-3">Affiliate Payout Chart:</h2>
                <h6 className="text-dark">We offer straight 10% discount on every product whatever billing cycle customer choose you will get paid if we get paid highly you will as well become our partner and enjoy easy cash</h6>
                <ul className="mb-5">
                    <li> <p className="m-0"> Refer any Shared Hosting Plan <a href="https://hoster.pk/clientarea/index.php/login" target="_blank" className='text-decoration-none'><span className="text-green fw-bolder">Sign-Up</span></a>  10%.00 </p> </li>
                    <li> <p className="m-0"> Refer any VPS Plan <a href="https://hoster.pk/clientarea/index.php/login" target="_blank" className='text-decoration-none'><span className="text-green fw-bolder">Sign-Up</span></a>  10%.00 </p> </li>
                    <li> <p className="m-0"> Refer any Dedicated Server <a href="https://hoster.pk/clientarea/index.php/login" target="_blank" className='text-decoration-none'><span className="text-green fw-bolder">Sign-Up</span></a>  10%.00 </p> </li>
                </ul>
                <h2 className="fw-bolder mt-5">  Benefits to became a part of hoster.pk Affiliate Program: </h2>
                <ol>
                    <li> <p className="m-0"> Affiliates are paid at the end of EVERY month! </p> </li>
                    <li> <p className="m-0"> No minimum payout – your money is your money! </p> </li>
                    <li> <p className="m-0"> Live graphical details and tracking software </p> </li>
                    <li> <p className="m-0"> Screen Shots Main Login Creative Examples Traffic/Clicks Chart </p> </li>
                    <li> <p className="m-0"> Newly created banners and creatives that you can use </p> </li>
                    <li> <p className="m-0"> You don’t have to be a client </p> </li>
                    <li> <p className="m-0"> Affiliate Managers to assist you 24/7 </p> </li>
                </ol>
                <h6 className="fw-bolder">How It Works</h6>
                <p> After <a href='https://hoster.pk/clientarea/index.php/login' className='text-decoration-none' target="_blank"><span className="text-green fw-bolder">signing up</span></a> for the program you will receive a unique affiliate URL which you will use to advertise our website. When someone clicks through this URL a cookie will be set in their browser with your affiliate ID and their IP address will also be logged with your affiliate ID. During that visit to our website or any later visit, when a purchase is made the commission will be given based on the existence of the cookie or a match of the IP address in the database. </p>
                <h6 className="fw-bolder">Getting Started:</h6>
                <p> The possibilities are endless with our great payouts/commissions! Our program fits the needs of everyone, regardless of whether you simply want to make some extra spending cash or you focus on going for the gold! <br/>
                      With our quick and easy approval process you can <a href="https://hoster.pk/clientarea/index.php/login" target="_blank" className='text-decoration-none text-green fw-bolder'>sign up</a> and start making money the very same day! </p>
            <h5 className="fw-bolder">Click Here To <a href="https://hoster.pk/clientarea/index.php/login" target="_blank" className="text-green text-decoration-none">Sign Up</a></h5>
            </section>
            {/* wroks  */}
            <section className="my-5 py-5 text-center container">
                <h1 className="fw-bolder"> How It Works </h1>
                <hr className='text-green mx-5 px-5' />
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img alt="pictures" src={work2} className="w-25"/>
                        <h5 className="fw-bolder my-3"> Register as Affiliate </h5>
                        <h6>hoster.pk affiliate program is a great money making opportunity that allows you to partner with a respected industry leader in domain registration, web hosting and website design.</h6>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <img alt="pictures" src={work1} className="w-25" />
                        <h5 className="fw-bolder my-3"> Start Referral People </h5>
                        <h6>Make referrals part of your initial conversation. When you start work with a new customer, ask them to agree to a simple deal. ... Cash in those compliments. ... Set goals. ... Be specific. ..</h6>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                  <img alt="pictures" src={work3} className="w-25"/>
                        <h5 className="fw-bolder my-3"> Get Paid </h5>
                        <h6>get cash after-joining affiliate program of hoster.pk and also get benefits by referring other peoples.</h6>
                    </div>
                </div>
            </section>
            {/* total  */}
            <section className="blogBg p-5 text-center text-light my-3">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3 className="my-3">Average Commission</h3>
                <hr className='mx-5 px-5' />
                <h1 className="stat-number text-light" data-price="500">$ 0</h1>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3 className="my-3">Total Referrals</h3>
                <hr className='mx-5 px-5' />
                <h1 className="stat-number text-light" data-price="20500">0</h1>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3 className="my-3">Registered Affiliates</h3>
                <hr className='mx-5 px-5' />
                <h1 className="stat-number text-light" data-price="1000">0</h1>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3 className="my-3">Total Commission Paid</h3>
                <hr className='mx-5 px-5' />
                <h1 className="stat-number text-light" data-price="5003500">$ 0</h1>
                    </div>
                </div>
            </section>
            <div className="text-center container my-5">
            <a href='https://hoster.pk/clientarea/index.php/login' target="_blank" className='text-decoration-none'><button className="btn bg-green text-light px-5 p-2 rounded-pill">Sign Up</button></a>
            </div>
                <Footer />
                </main>
        </>
    )
}

export default AffiliateHome
