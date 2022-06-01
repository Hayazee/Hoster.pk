import React from 'react'

const Card4 = () => {
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
          $('#link_button-13').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price16');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price16[data-target]');
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
          $('#link_button-16').attr('href', $selected.data('url'));
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
              <h5 class="mb-0"> VPS Basic </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 2249 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan13" class="text-d-green">1 Month Rs. 4499</span>
              <div class="text-center form-group parent-select-price13">
                <select class="m-auto form-control select-price13" data-target="plan13">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=309&amp;billingcycle=monthly">1 Month Rs. 4499</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=309&amp;billingcycle=quarterly">3 Months Rs. 12147 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=309&amp;billingcycle=semi-annually">6 Months Rs. 21595 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=309&amp;billingcycle=annually">1 Year Rs. 32392 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=309&amp;billingcycle=biennually">2 Years Rs. 59286 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=309&amp;billingcycle=triennually">3 Years Rs. 80982 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> 1GB RAM </h6>
              <hr />
              <h6 class="m-0"> CPU 100% </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> 1GB Internet Port </h6>
              <hr />
              <h6 class="m-0"> 200GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0">50GB Storage Space</h6>
              <hr />
              <h6 class="m-0">Unlimited Database</h6>
              <hr />
              <h6 class="m-0">Host Unlimited Website</h6>
              <hr />
              <h6 class="m-0">Unlimited Control Panel</h6>
              <hr />
              <h6 class="m-0">Unlimited E-mail Accounts</h6>
              <hr />
              <h6 class="m-0">Reseller Account Management</h6>
              <hr />
              <h6 class="m-0"> <del> 99.9% </del> <span class="fw-bolder">100%</span> Guaranted UpTime </h6>
            </div>
            <a target="_blank" id="link_button-13" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15"><button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                <p class="m-0"> Buy Now </p>
              </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> VPS Economy </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 2999 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan14" class="text-d-green">1 Month Rs. 5999</span>
              <div class="text-center form-group parent-select-price14">
                <select class="m-auto form-control select-price14" data-target="plan14"><option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=monthly">1 Month Rs. 5999</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=quarterly">3 Months Rs. 16197 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=semi-annually">6 Months Rs. 28795 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=annually">1 Year Rs. 43192 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=biennually">2 Years Rs. 79186 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=triennually">3 Years Rs. 107982 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> 3GB RAM </h6>
              <hr />
              <h6 class="m-0"> CPU 100% </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> 1GB Internet Port </h6>
              <hr />
              <h6 class="m-0"> 400GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0">70GB Storage Space</h6>
              <hr />
              <h6 class="m-0">Unlimited Database</h6>
              <hr />
              <h6 class="m-0">Host Unlimited Website</h6>
              <hr />
              <h6 class="m-0">Unlimited Control Panel</h6>
              <hr />
              <h6 class="m-0">Unlimited E-mail Accounts</h6>
              <hr />
              <h6 class="m-0">Reseller Account Management</h6>
              <hr />
              <h6 class="m-0"> <del> 99.9% </del> <span class="fw-bolder">100%</span> Guaranted UpTime </h6>
            </div>
            <a target="_blank" id="link_button-14" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> VPS Deluxe </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 4999 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan15" class="text-d-green">1 Month Rs. 9999</span>
              <div class="text-center form-group parent-select-price15">
                <select class="m-auto form-control select-price15" data-target="plan15"><option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=monthly">1 Month Rs. 9999</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=quarterly">3 Months Rs. 26997 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=semi-annually">6 Months Rs. 47995 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=annually">1 Year Rs. 71992 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=biennually">2 Years Rs. 131986 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=triennually">3 Years Rs. 179982 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> 8GB RAM </h6>
              <hr />
              <h6 class="m-0"> CPU 300% </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> 1GB Internet Port </h6>
              <hr />
              <h6 class="m-0"> 800GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0">200GB Storage Space</h6>
              <hr />
              <h6 class="m-0">Unlimited Database</h6>
              <hr />
              <h6 class="m-0">Host Unlimited Website</h6>
              <hr />
              <h6 class="m-0">Unlimited Control Panel</h6>
              <hr />
              <h6 class="m-0">Unlimited E-mail Accounts</h6>
              <hr />
              <h6 class="m-0">Reseller Account Management</h6>
              <hr />
              <h6 class="m-0"> <del> 99.9% </del> <span class="fw-bolder">100%</span> Guaranted UpTime </h6>
            </div>
            <a target="_blank" id="link_button-15" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> VPS Unlimited </h5></div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 7499 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan16" class="text-d-green">1 Month Rs. 14999</span>
              <div class="text-center form-group parent-select-price16">
                <select class="m-auto form-control select-price16" data-target="plan16"><option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=monthly">1 Month Rs. 14999</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=quarterly">3 Months Rs. 40497 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=semi-annually">6 Months Rs. 71995 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=annually">1 Year Rs. 107986 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=biennually">2 Years Rs. 197986 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=triennually">3 Years Rs. 269982 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> 16GB RAM </h6>
              <hr />
              <h6 class="m-0"> CPU 400% </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> 1GB Internet Port </h6>
              <hr />
              <h6 class="m-0"> 1.6TB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"> 400GB Storage Space</h6>
              <hr />
              <h6 class="m-0">Unlimited Database</h6>
              <hr />
              <h6 class="m-0">Host Unlimited Website</h6>
              <hr />
              <h6 class="m-0">Unlimited Control Panel</h6>
              <hr />
              <h6 class="m-0">Unlimited E-mail Accounts</h6>
              <hr />
              <h6 class="m-0">Reseller Account Management</h6>
              <hr />
              <h6 class="m-0"> <del> 99.9% </del> <span class="fw-bolder">100%</span> Guaranted UpTime </h6>
            </div>
            <a target="_blank" id="link_button-16" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=monthly">
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

export default Card4
