import React from 'react'
import work1 from '../images/work 1.png'
import work2 from '../images/work 2.png'
import work3 from '../images/work 3.png'
import Footer from './Footer'
import $ from 'jquery'
import { Helmet } from 'react-helmet'
import {
    Link
} from "react-router-dom";

const Domain = () => {
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
                <title>Earn Money with Domain Resseller Web Hosting | hoster.pk</title>
                <meta name=''/>
                <meta name="keywords" content="Domain Resseller web hosting cheap Domain Resseller web hosting services cheap Domain Resseller web hosting cheap Domain Resseller web hosting in pakistan cheap Domain Resseller web hosting for small business cheap Domain Resseller web hosting services cheap Domain Resseller web hosting and domain cheap Domain Resseller web hosting in pakistan 2022"/>
                <meta name="description" content="Hoster.pk serves in variety of domains and hosting services that benifits all. You can also buy best Domain hosting services with amazing discounts."/>
                <meta property="og:title" content="Competitively Best-Dedicated Server Hosting" />
                <meta property="og:description" content="With best dedicated server hosting, you can enable the unlimited speed with no lags in loading. Our servers ensure 100% up time for all businesses." />
                <meta property="og:image" content="https://sp-ao.shortpixel.ai/client/q_lqip,ret_wait/https://hoster.pk/wp-content/uploads/2019/08/logo.png" />
                <Link rel="canonical" href="https://hoster.pk" />
                <meta name="publisher" content="Haya Zeeshan" />
            </Helmet>
            <main>
            {/* heading  */}
            <section className="p-5 blogBg">
                <div className="text-center container text-light fw-bolder">
                    <h1 className="fw-bolder display-4"> Domain Resseller </h1>
                    <hr className="mx-5 px-5"/>
                </div>
            </section>
            {/* main  */}
                <section className='my-5 container text-center'>
                    <h1 className='fw-bolder display-1'>Contact With Sale</h1>
                    <a href="javascript:void(Tawk_API.toggle())">
                    <button className='fw-bolder px-3 btn bg-green text-white p-2'>CHAT TO SALE</button>
                     </a>
                </section>
            {/* wroks  */}
            <section className="my-5 py-5 text-center container">
                <h1 className="fw-bolder"> How It Works </h1>
                <hr className='text-green mx-5 px-5' />
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img alt="pictures" src={work2} className="w-25"/>
                        <h5 className="fw-bolder my-3"> Register as Domain Resseller </h5>
                        <h6>hoster.pk Domain Resseller program is a great money making opportunity that allows you to partner with a respected industry leader in domain registration, web hosting and website design.</h6>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <img alt="pictures" src={work1} className="w-25" />
                        <h5 className="fw-bolder my-3"> Start Referral People </h5>
                        <h6>Make referrals part of your initial conversation. When you start work with a new customer, ask them to agree to a simple deal. ... Cash in those compliments. ... Set goals. ... Be specific. ..</h6>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                  <img alt="pictures" src={work3} className="w-25"/>
                        <h5 className="fw-bolder my-3"> Get Paid </h5>
                        <h6>get cash after-joining Domain Resseller program of hoster.pk and also get benefits by referring other peoples.</h6>
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
                    <h3 className="my-3">Registered Domain Ressellers</h3>
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
            <a href='https://hoster.pk/clientarea/index.php/login' target="_blank"><button className="btn bg-green text-light px-5 p-2 rounded-pill">Sign Up</button></a>
            </div>
                <Footer />
                </main>
        </>
    )
}

export default Domain
