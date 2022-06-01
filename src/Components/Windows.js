import React from 'react'
import experthalf from '../images/expert section.svg'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import Logo from '../images/logo.png'
import {
  Link
} from "react-router-dom";

function Shared() {
  // card 
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price21');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price21[data-target]');
      if (!$select.length) {
        return;
      }
      $select.each(function () {
        $(this).parent($parent);
        var $target = $(this).attr('data-target');
        if (!$target) {
          return;
        }
        $target = $('[data-price=' + $target + ']');
        if ($target.length === 0) {
          return;
        }
        var $selected = $(this).find('option:selected');
        if ($selected.length) {
          $target.html($selected.val());
        }

        $(this).on('change', function (e) {
          e.stopPropagation();
          $selected = $(this).find('option:selected');
          $target.html($selected.val());
          $('#link_button-21').attr('href', $selected.data('url'));
        });
      });
    });

  })(window.jQuery);
  // 2
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price22');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price22[data-target]');
      if (!$select.length) {
        return;
      }
      $select.each(function () {
        $(this).parent($parent);
        var $target = $(this).attr('data-target');
        if (!$target) {
          return;
        }
        $target = $('[data-price=' + $target + ']');
        if ($target.length === 0) {
          return;
        }
        var $selected = $(this).find('option:selected');
        if ($selected.length) {
          $target.html($selected.val());
        }

        $(this).on('change', function (e) {
          e.stopPropagation();
          $selected = $(this).find('option:selected');
          $target.html($selected.val());
          $('#link_button-22').attr('href', $selected.data('url'));
        });
      });
    });

  })(window.jQuery);
  // 3
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price23');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price23[data-target]');
      if (!$select.length) {
        return;
      }
      $select.each(function () {
        $(this).parent($parent);
        var $target = $(this).attr('data-target');
        if (!$target) {
          return;
        }
        $target = $('[data-price=' + $target + ']');
        if ($target.length === 0) {
          return;
        }
        var $selected = $(this).find('option:selected');
        if ($selected.length) {
          $target.html($selected.val());
        }

        $(this).on('change', function (e) {
          e.stopPropagation();
          $selected = $(this).find('option:selected');
          $target.html($selected.val());
          $('#link_button-23').attr('href', $selected.data('url'));
        });
      });
    });

  })(window.jQuery);
  // 4
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price24');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price24[data-target]');
      if (!$select.length) {
        return;
      }
      $select.each(function () {
        $(this).parent($parent);
        var $target = $(this).attr('data-target');
        if (!$target) {
          return;
        }
        $target = $('[data-price=' + $target + ']');
        if ($target.length === 0) {
          return;
        }
        var $selected = $(this).find('option:selected');
        if ($selected.length) {
          $target.html($selected.val());
        }

        $(this).on('change', function (e) {
          e.stopPropagation();
          $selected = $(this).find('option:selected');
          $target.html($selected.val());
          $('#link_button-24').attr('href', $selected.data('url'));
        });
      });
    });

  })(window.jQuery);

  // scroll from top
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

      <script language="javascript" src="https://hoster.pk/clientarea/feeds/productsinfo.php?pid=1&get=description">hj</script>
      
      {/* main section  */}
      <section className="dedicateMain pt-5">
        <div className="container text-center pt-5">
          <h1 className="fw-bolder my-3">SSD Windows Shared Hosting</h1>
          <hr className="text-green px-5 mx-5" />
          
          {/* pricing  */}
          <section className="mb-5 pt-0">
            <h4 className="text-center fw-bolder">Did your needs fall on single hosting that is shareable! Here we have shared hosting in HDD and SDD stats which delivers the demanded speed on the go. The quality is emphasized with 30 days money back guarantee!!
              <a href="tel:+923111661112" className="ms-3">Call Now</a></h4>
          </section>
        </div>

        {/* card     */}
        <section class="container-md">
        <div class="text-center row">
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0  text-light fw-bolder rounded-top">
              <h5 class="mb-0"> SSD Basic </h5>
            </div>
            <div class="bg-d-green p-2 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 285 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennially </p>
              <span data-price="plan21" class="text-d-green">1 Month Rs. 570</span>
              <div class="form-group parent-select-price21">
                <select class="m-auto form-control select-price21 text-center" data-target="plan21">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=monthly">1 Month Rs. 570</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=quarterly">3 Months Rs. 1539 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=semi-annually">6 Months Rs. 2736 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=annually">1 Year Rs. 4104 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=biennually">2 Years Rs. 7524 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=triennually">3 Years Rs. 10260 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Host 1 Website </h6>
              <hr />
              <h6 class="m-0"> 1GB SSD Cloud Disk Space </h6>
              <hr />
              <h6 class="m-0"> 10GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> 5 FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> 5 E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> WebMail Email Access </h6>
              <hr />
              <h6 class="m-0"> MailChannels Outbound Spam Filterning </h6>
              <hr />
              <h6 class="m-0"> POP3/IMAP/SMTP Email Access </h6>
              <hr />
              <h6 class="m-0"> 1 Maria 10.5 Databases </h6>
              <hr />
              <h6 class="m-0 fw-bolder"> No MsQL Database </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> Dedicated Application Pool Ram </h6>
              <hr />
              <h6 class="m-0"> Free SSL </h6>
              <hr />
              <h6 class="m-0"> IIS Web Server </h6>
              <hr />
              <h6 class="m-0"> Classic ASP </h6>
              <hr />
              <h6 class="m-0"> ASP.net </h6>
              <hr />
              <h6 class="m-0"> .NET Core </h6>
              <hr />
              <h6 class="m-0"> <del> 99.9% </del> <span class="fw-bolder">100% </span> Guaranteed UpTime </h6>
            </div>
            <a id="link_button-21" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=659&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> SSD Economy </h5>
            </div>
            <div class="bg-d-green p-2 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 450 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennially </p>
              <span data-price="plan22" class="text-d-green">1 Month Rs. 900</span>
              <div class="form-group parent-select-price22">
                <select class="m-auto form-control select-price22 text-center" data-target="plan22">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=monthly">1 Month Rs. 900</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=quarterly">3 Months Rs. 2430 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=semi-annually">6 Months Rs. 4320 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=annually">1 Year Rs. 6480 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=biennually">2 Years Rs. 11880 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=triennually">3 Years Rs. 16200 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Host 2 Website </h6>
              <hr />
              <h6 class="m-0"> 5GB SSD Cloud Disk Space </h6>
              <hr />
              <h6 class="m-0"> 20GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> 10 FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> 10 E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> WebMail Email Access </h6>
              <hr />
              <h6 class="m-0"> MailChannels Outbound Spam Filterning </h6>
              <hr />
              <h6 class="m-0"> POP3/IMAP/SMTP Email Access </h6>
              <hr />
              <h6 class="m-0"> 3 Maria 10.5 Databases </h6>
              <hr />
              <h6 class="m-0 fw-bolder"> 1 MS SQL Server 2019 Databases </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> Dedicated Application Pool Ram </h6>
              <hr />
              <h6 class="m-0"> Free SSL </h6>
              <hr />
              <h6 class="m-0"> IIS Web Server </h6>
              <hr />
              <h6 class="m-0"> Classic ASP </h6>
              <hr />
              <h6 class="m-0"> ASP.net </h6>
              <hr />
              <h6 class="m-0"> .NET Core </h6>
              <hr />
              <h6 class="m-0"> <del> 99.9% </del> <span class="fw-bolder">100%</span> Guaranteed UpTime </h6>
            </div>
            <a id="link_button-22" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=660&amp;billingcycle=monthly" target="_blank">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> SSD Deluxe </h5>
            </div>
            <div class="bg-d-green p-2 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 600 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennially </p>
              <span data-price="plan23" class="text-d-green"> 1 Month Rs. 1200 </span>
              <div class="form-group parent-select-price23">
                <select class="m-auto form-control select-price23 text-center" data-target="plan23">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=monthly">1 Month Rs. 1200</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=quarterly">3 Months Rs. 3240 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=semi-annually">6 Months Rs. 5760 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=annually">1 Year Rs. 8640 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=biennually">2 Years Rs. 15840 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=triennually"> 3 Years Rs. 21600 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Host 5 Website </h6>
              <hr />
              <h6 class="m-0"> 15GB SSD Cloud Disk Space </h6>
              <hr />
              <h6 class="m-0"> 30GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> 30 FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> 30 E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> WebMail Email Access </h6>
              <hr />
              <h6 class="m-0"> MailChannels Outbound Spam Filterning </h6>
              <hr />
              <h6 class="m-0"> POP3/IMAP/SMTP Email Access </h6>
              <hr />
              <h6 class="m-0"> 5 Maria 10.5 Databases </h6>
              <hr />
              <h6 class="m-0 fw-bolder"> 2 MS SQL Server 2019 Databases </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> Dedicated Application Pool Ram </h6>
              <hr />
              <h6 class="m-0"> Free SSL</h6>
              <hr />
              <h6 class="m-0"> IIS Web Server </h6>
              <hr />
              <h6 class="m-0"> Classic ASP </h6>
              <hr />
              <h6 class="m-0"> ASP.net </h6>
              <hr />
              <h6 class="m-0"> .NET Core </h6>
              <hr />
              <h6 class="m-0"> <del> 99.9% </del> <span class="fw-bolder"> 100% </span> Guaranteed UpTime </h6>
            </div>
            <a id="link_button-23" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=661&amp;billingcycle=monthly" target="_blank">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> SSD Unlimited </h5>
            </div>
            <div class="bg-d-green p-2 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 1100 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennially </p>
              <span data-price="plan24" class="text-d-green">1 Month Rs. 2200</span>
              <div class="form-group parent-select-price24">
                <select class="m-auto form-control select-price24 text-center" data-target="plan24">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=monthly">1 Month Rs. 2200</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=quarterly">3 Months Rs. 5940 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=semi-annually">6 Months Rs. 10560 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=annually">1 Year Rs. 15840 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=biennually">2 Years Rs. 29040 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=triennually">3 Years Rs. 39600 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Host 10 Website </h6>
              <hr />
              <h6 class="m-0"> 20GB SSD Cloud Disk Space </h6>
              <hr />
              <h6 class="m-0"> 50GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Unlimited FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> Unlimited E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> WebMail Email Access </h6>
              <hr />
              <h6 class="m-0"> MailChannels Outbound Spam Filterning </h6>
              <hr />
              <h6 class="m-0"> POP3/IMAP/SMTP Email Access </h6>
              <hr />
              <h6 class="m-0"> 10 Maria 10.5 Databases </h6>
              <hr />
              <h6 class="m-0 fw-bolder"> 3 MS SQL Server 2019 Databases </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> Dedicated Application Pool Ram </h6>
              <hr />
              <h6 class="m-0"> Free SSL</h6>
              <hr />
              <h6 class="m-0"> IIS Web Server </h6>
              <hr />
              <h6 class="m-0"> Classic ASP </h6>
              <hr />
              <h6 class="m-0"> ASP.net </h6>
              <hr />
              <h6 class="m-0"> .NET Core </h6>
              <hr />
              <h6 class="m-0"> <del> 99.9% </del> <span class="fw-bolder">100%</span> Guaranteed UpTime </h6>
            </div>
            <a id="link_button-24" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=monthly" target="_blank">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      </section>

      {/* features  */}
      <section className="my-5">
        <div className="container">
          <h1 className="fw-bolder text-center my-3"> Features </h1>
          <div className="row">
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
