import React from 'react'

const ResellerCard2 = () => {
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price17');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price17[data-target]');
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
          $('#link_button-17').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price18');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price18[data-target]');
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
          $('#link_button-18').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price19');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price19[data-target]');
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
          $('#link_button-19').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price20');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price20[data-target]');
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
          $('#link_button-20').attr('href', $selected.data('url'));
        });
      });
    });

  })(window.jQuery);
  return (
    <>

      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0  text-light fw-bolder rounded-top">
              <h5 class="mb-0"> Flash Basic </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 1724 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennially </p>
              <span data-price="plan17" class="text-d-green">1 Month Rs. 3448</span>
              <div class="text-center form-group parent-select-price17">
                <select class="m-auto form-control select-price17" data-target="plan17">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=monthly">1 Month Rs. 3448 </option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=quarterly">3 Months Rs. 9310 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=semi-annually">6 Months Rs. 12420 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=annually">1 Year Rs. 24829 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=biennually">2 Years Rs. 45520 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=triennually">3 Years Rs. 62073 Save 50%</option>
                </select>
              </div>
              <hr />

              <h6 class="m-0"> Free Domain </h6>
              <hr />
              <h6 class="m-0"> Custom Branding </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"> Unlimited Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Discount on .pk domain </h6>
              <hr />
              <h6 class="m-0"> Unlimited Control panel </h6>
              <hr />
              <h6 class="m-0"> Anonymous Nameservers </h6>
              <hr />
              <h6 class="m-0"> Reseller Account Management </h6>
              <hr />
              <h6 class="m-0"> 10 GB NVMe High Speed Storage </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a id="link_button-17" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> Flash Economy </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 2586.38 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennially </p>
              <span data-price="plan18" class="text-d-green">1 Month Rs. 5172</span>
              <div class="text-center form-group parent-select-price18">
                <select class="m-auto form-control select-price18" data-target="plan18">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=monthly">1 Month Rs. 5172 </option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=quarterly">3 Months Rs. 13966 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=semi-annually">6 Months Rs. 24829 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=annually">1 Year Rs. 37243 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=biennually">2 Years Rs. 68280 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=triennually">3 Years Rs. 93109 Save 50%</option>
                </select>
              </div>
              <hr /><h6 class="m-0"> Free Domain </h6>
              <hr />
              <h6 class="m-0"> Custom Branding </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"> Unlimited Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Discount on .pk domain </h6>
              <hr />
              <h6 class="m-0"> Unlimited Control panel </h6>
              <hr />
              <h6 class="m-0"> Anonymous Nameservers </h6>
              <hr />
              <h6 class="m-0"> Reseller Account Management </h6>
              <hr />
              <h6 class="m-0"> 20 GB NVMe High Speed Storage </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a id="link_button-18" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15"><button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                <p class="m-0"> Buy Now </p>
              </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> Flash Deluxe </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 3449 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennially </p>
              <span data-price="plan19" class="text-d-green">1 Month Rs. 6898</span>
              <div class="text-center form-group parent-select-price19">
                <select class="m-auto form-control select-price19" data-target="plan19">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=monthly">1 Month Rs. 6898 </option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=quarterly">3 Months Rs. 18625 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=semi-annually">6 Months Rs. 33112 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=annually">1 Year Rs. 49669 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=biennually">2 Years Rs. 91060 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=triennually">3 Years Rs. 124173 Save 50%</option>
                </select>
              </div>
              <hr />

              <h6 class="m-0"> Free Domain </h6>
              <hr />
              <h6 class="m-0"> Custom Branding </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"> Unlimited Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Discount on .pk domain </h6>
              <hr />
              <h6 class="m-0"> Unlimited Control panel </h6>
              <hr />
              <h6 class="m-0"> Anonymous Nameservers </h6>
              <hr />
              <h6 class="m-0"> Reseller Account Management </h6>
              <hr />
              <h6 class="m-0"> 40 GB NVMe High Speed Storage </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a id="link_button-19" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> Flash Unlimited </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 6898 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennially </p>
              <span data-price="plan20" class="text-d-green">1 Month Rs. 13797</span>
              <div class="text-center form-group parent-select-price20">
                <select class="m-auto form-control select-price20" data-target="plan20">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=monthly">1 Month Rs. 13797 </option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=quarterly">3 Months Rs. 12417 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=semi-annually">6 Months Rs. 66225 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=annually">1 Year Rs. 99338 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=biennually">2 Years Rs. 182120 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=triennually">3 Years Rs. 248346 Save 50%</option>
                </select>
              </div>
              <hr />

              <h6 class="m-0"> Free Domain </h6>
              <hr />
              <h6 class="m-0"> Custom Branding </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"> Unlimited Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Discount on .pk domain </h6>
              <hr />
              <h6 class="m-0"> Unlimited Control panel </h6>
              <hr />
              <h6 class="m-0"> Anonymous Nameservers </h6>
              <hr />
              <h6 class="m-0"> Reseller Account Management </h6>
              <hr />
              <h6 class="m-0"> 100 GB NVMe High Speed Storage </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a id="link_button-20" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=monthly">
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

export default ResellerCard2
