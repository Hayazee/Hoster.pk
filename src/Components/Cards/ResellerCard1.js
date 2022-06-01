import React from 'react'

const ResellerCard1 = () => {
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price13');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price13[data-target]');
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
          $('#link_button-12').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price14');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price14[data-target]');
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
          $('#link_button-14').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price15');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price15[data-target]');
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
          $('#link_button-15').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price15');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price15[data-target]');
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
          $('#link_button-15').attr('href', $selected.data('url'));
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
              <h5 class="mb-0"> Basic Reseller </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 1149 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennially </p>
              <span data-price="plan13" class="text-d-green">1 Month Rs. 2299</span>
              <div class="text-center form-group parent-select-price13">
                <select class="m-auto form-control select-price13" data-target="plan13">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=monthly">1 Month Rs. 2299</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=quarterly">3 Months Rs. 6207 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=semi-annually">6 Months Rs. 11035 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=annually">1 Year Rs. 16552 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=biennually">2 Years Rs. 30346 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=triennually">3 Years Rs. 41382 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Free Domain </h6>
              <hr />
              <h6 class="m-0"> Custom Branding </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"> 10 GB Storage Space </h6>
              <hr />
              <h6 class="m-0"> Unlimited Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Unlimited SSH Access </h6>
              <hr />
              <h6 class="m-0"> Discount on .pk domain </h6>
              <hr />
              <h6 class="m-0"> Unlimited Control panel </h6>
              <hr />
              <h6 class="m-0">Anonymous Nameservers</h6>
              <hr />
              <h6 class="m-0"> Reseller Account Management </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a target="_blank" id="link_button-12" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> Reseller Economy </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 1724 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennially </p>
              <span data-price="plan14" class="text-d-green">1 Month Rs. 3448</span>
              <div class="text-center form-group parent-select-price14">
                <select class="m-auto form-control select-price14" data-target="plan14">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=monthly">1 Month Rs. 3448 </option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=quarterly">3 Months Rs. 9310 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=semi-annually">6 Months Rs. 16552 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=annually">1 Year Rs. 24829 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=biennually">2 Years Rs. 45520 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=triennually">3 Years Rs. 62073 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Free Domain </h6>
              <hr />
              <h6 class="m-0"> Custom Branding </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"> 20 GB Storage Space </h6>
              <hr />
              <h6 class="m-0"> Unlimited Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Unlimited SSH Access </h6>
              <hr />
              <h6 class="m-0"> Discount on .pk domain </h6>
              <hr />
              <h6 class="m-0"> Unlimited Control panel </h6>
              <hr />
              <h6 class="m-0"> Anonymous Nameservers </h6>
              <hr />
              <h6 class="m-0"> Reseller Account Management </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a target="_blank" id="link_button-13" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> Reseller Deluxe </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 2299 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennially </p>
              <span data-price="plan15" class="text-d-green"></span>
              <div class="text-center form-group parent-select-price15">
                <select class="m-auto form-control select-price7" data-target="plan15">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=monthly">1 Month Rs. 4599 </option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=quarterly">3 Months Rs. 12417 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=semi-annually">6 Months Rs. 22075 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=annually">1 Year Rs. 33112 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=biennually">2 Years Rs. 60706 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=triennually">3 Years Rs. 82782 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Free Domain </h6>
              <hr />
              <h6 class="m-0"> Custom Branding </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"> 40 GB Storage Space </h6>
              <hr />
              <h6 class="m-0"> Unlimited Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Unlimited SSH Access </h6>
              <hr />
              <h6 class="m-0"> Discount on .pk domain </h6>
              <hr />
              <h6 class="m-0"> Unlimited Control panel </h6>
              <hr />
              <h6 class="m-0"> Anonymous Nameservers </h6>
              <hr />
              <h6 class="m-0"> Reseller Account Management </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a target="_blank" id="link_button-14" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> Reseller Unlimited </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 4599 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennially </p>
              <span data-price="plan16" class="text-d-green"></span>
              <div class="text-center form-group parent-select-price16">
                <select class="m-auto form-control select-price8" data-target="plan16">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=monthly">1 Month Rs. 9198 </option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=quarterly">3 Months Rs. 24834 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=semi-annually">6 Months Rs. 44150 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=annually">1 Year Rs. 66225 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=biennually">2 Years Rs. 121413 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=triennually">3 Years Rs. 165564 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Free Domain </h6>
              <hr />
              <h6 class="m-0"> Custom Branding </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"> 100 GB Storage Space </h6>
              <hr />
              <h6 class="m-0"> Unlimited Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Unlimited SSH Access </h6>
              <hr />
              <h6 class="m-0"> Discount on .pk domain </h6>
              <hr />
              <h6 class="m-0"> cWatch Website Security - Basic </h6>
              <hr />
              <h6 class="m-0"> Unlimited Control panel </h6>
              <hr />
              <h6 class="m-0">Reseller Account Management </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a target="_blank" id="link_button-15" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=monthly">
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

export default ResellerCard1
