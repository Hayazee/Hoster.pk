import React from 'react'

const Card1 = () => {
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price1');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price1[data-target]');
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
          $('#link_button-1').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price2');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price2[data-target]');
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
          $('#link_button-2').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price3');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price3[data-target]');
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
          $('#link_button-3').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price4');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price4[data-target]');
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
          $('#link_button-4').attr('href', $selected.data('url'));
        });
      });
    });

  })(window.jQuery);
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0  text-light fw-bolderc rounded-top">
              <h5 class="mb-0"> SSD Basic </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 233 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan1" class="text-d-green">1 Month Rs. 519</span>
              <div class="form-group parent-select-price1 text-center">
                <select class="m-auto form-control select-price1" data-target="plan1">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=monthly">1 Month Rs. 519</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=quarterly">3 Months Rs. 1401 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=semi-annually">6 Months Rs. 2491 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=annually">1 Year Rs. 3114 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=biennually">2 Years Rs. 6228 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=triennually">3 Years Rs. 8407 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Host 1 Website </h6>
              <hr />
              <h6 class="m-0"> 1GB Storage Space </h6>
              <hr />
              <h6 class="m-0"> 10GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> 5 FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> 5 E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> 1 Database </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0">Free SSL</h6>
              <hr />
              <h6 class="m-0"> <del> 99.9% </del> <span class="fw-bolder">100%</span> Guaranted UpTime </h6>
            </div>
            <a target="_blank" id="link_button-1" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=monthly">
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
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 400 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan2" class="text-d-green">1 Month Rs. 800</span>
              <div class="form-group parent-select-price2">
                <select class="m-auto form-control select-price2" data-target="plan2">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=monthly">1 Month Rs. 800</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=quarterly">3 Months Rs. 2160 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=semi-annually">6 Months Rs. 3840 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=annually">1 Year Rs. 5760 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=biennually">2 Years Rs. 10560 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=triennually">3 Years Rs. 14400 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Host 2 Websites </h6>
              <hr />
              <h6 class="m-0"> 5GB Storage Space </h6>
              <hr />
              <h6 class="m-0"> 30 GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> 10 FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> 10 E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> 5 Databases </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0">Free SSL</h6>
              <hr />
              <h6 class="m-0"> <del>99.9%</del> <span class="fw-bolder">100%</span> Guaranteed UpTime</h6>
            </div>
            <a target="_blank" id="link_button-2" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=monthly"><div class="bg-light m-0 bx-shadow py-3 rounded-15">
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
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 525 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan3" class="text-d-green">1 Month Rs. 1050</span>
              <div class="form-group parent-select-price3">
                <select class="m-auto form-control select-price3" data-target="plan3">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=monthly">1 Month Rs. 1050</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=quarterly">3 Months Rs. 2835 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=semi-annually">6 Months Rs. 5040 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=annually">1 Year Rs. 7560 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=biennually">2 Years Rs. 13860 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=triennually"> 3 Years Rs. 18900 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Host 5 Websites </h6>
              <hr />
              <h6 class="m-0"> 15GB Storage Space </h6>
              <hr />
              <h6 class="m-0"> 50GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> 30 FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> 30 E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> 15 Databases </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> Cloudflare </h6>
              <hr />
              <h6 class="m-0"> Free SSL </h6>
              <hr />
              <h6 class="m-0"> <del>99.9%</del> <span class="fw-bolder">100%</span> Guaranteed UpTime </h6>
              <hr />
            </div>
            <a target="_blank" id="link_button-3" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=monthly">
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
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 999 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan4" class="text-d-green">1 Month Rs. 1999</span>
              <div class="form-group parent-select-price4">
                <select class="m-auto form-control select-price4" data-target="plan4">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=monthly">1 Month Rs. 1999</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=quarterly">3 Months Rs. 5397 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=semi-annually">6 Months Rs. 9595 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=annually">1 Year Rs. 14392 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=biennually">2 Years Rs. 26386 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=triennually">3 Years Rs. 35982 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Host 10 Websites </h6>
              <hr />
              <h6 class="m-0"> 30GB Storage Space </h6>
              <hr />
              <h6 class="m-0"> Unlimited Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Unlimited FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> Unlimited E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> Unlimited Databases </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> Cloudflare </h6>
              <hr />
              <h6 class="m-0"> Free SSL* </h6>
              <hr />
              <h6 class="m-0"> <del>99.9%</del> <span class="fw-bolder">100%</span> Guaranteed UpTime </h6>
              <hr />
            </div>
            <a target="_blank" id="link_button-4" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card1
