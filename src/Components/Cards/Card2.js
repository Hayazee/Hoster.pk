import React from 'react'

const Card2 = () => {
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price5');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price5[data-target]');
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
          $('#link_button-5').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price6');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price6[data-target]');
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
          $('#link_button-6').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price7');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price7[data-target]');
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
          $('#link_button-7').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price8');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price8[data-target]');
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
          $('#link_button-8').attr('href', $selected.data('url'));
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
              <h5 class="mb-0"> Flash Basic </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 345 </h4><p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan5" class="text-d-green">1 Month Rs. 690</span>
              <div class="text-center form-group parent-select-price5">
                <select class="m-auto form-control select-price5" data-target="plan5">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=monthly">1 Month Rs. 690</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=quarterly">3 Months Rs. 1863 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=semi-annually">6 Months Rs. 3312 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=annually">1 Year Rs. 4968 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=biennually">2 Years Rs. 9108 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=triennually">3 Years Rs. 12420 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Host 1 Website </h6>
              <hr />
              <h6 class="m-0"> 1GB NVMe Storage </h6>
              <hr />
              <h6 class="m-0"> 10GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> 3 FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> 3 E-mail Accounts</h6>
              <hr />
              <h6 class="m-0"> 1 Databases </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> Free SSL </h6>
              <hr />
              <h6 class="m-0"><del>99.9%</del> <span class="fw-bolder">100%</span> Guaranteed UpTime</h6>
            </div>
            <a target="_blank" id="link_button-5" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=monthly">
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
              <h4 class="m-0 display-6"> 485 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan6" class="text-d-green">1 Month Rs. 970</span>
              <div class="text-center form-group parent-select-price6">
                <select class="m-auto form-control select-price6" data-target="plan6">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=monthly">1 Month Rs. 970</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=quarterly">3 Months Rs. 2619 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=semi-annually">6 Months Rs. 4656 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=annually">1 Year Rs. 6984 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=biennually">2 Years Rs. 12804 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=triennually">3 Years Rs. 17460 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Host 1 Websitee </h6>
              <hr />
              <h6 class="m-0"> 3GB NVMe Storage </h6>
              <hr />
              <h6 class="m-0"> 20GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> 5 FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> 5 E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> 3 Databases </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> Free SSL </h6>
              <hr />
              <h6 class="m-0"> <del>99.9%</del> <span class="fw-bolder">100%</span> Guaranteed UpTime </h6>
            </div>
            <a target="_blank" id="link_button-6" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
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
              <h4 class="m-0 display-6"> 692 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan7" class="text-d-green">1 Month Rs. 1385</span>
              <div class="text-center form-group parent-select-price7">
                <select class="m-auto form-control select-price7" data-target="plan7">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=monthly">1 Month Rs. 1385</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=quarterly">3 Months Rs. 3739 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=semi-annually">6 Months Rs. 6648 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=annually">1 Year Rs. 9972 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=biennually">2 Years Rs. 18282 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=triennually">3 Years Rs. 24930 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Host 3 Website </h6>
              <hr />
              <h6 class="m-0">10GB NVMe Storage </h6>
              <hr />
              <h6 class="m-0"> 30GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> 10 FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> 10 E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> 10 Databases </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0">Free SSL </h6>
              <hr />
              <h6 class="m-0"><del>99.9%</del> <span class="fw-bolder">100%</span> Guaranteed UpTime</h6>
            </div>
            <a target="_blank" id="link_button-7" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=monthly">
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
              <h4 class="m-0 display-6"> 1249 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan8" class="text-d-green">1 Month Rs. 2499</span>
              <div class="text-center form-group parent-select-price8">
                <select class="m-auto form-control select-price8" data-target="plan8">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=monthly">1 Month Rs. 2499</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=quarterly">3 Months Rs. 6747 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=semi-annually">6 Months Rs. 11995 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=annually">1 Year Rs. 17992 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=biennually">2 Years Rs. 32986 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=triennually">3 Years Rs. 44982 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> Host 10 Website </h6>
              <hr />
              <h6 class="m-0"> 20 GB NVMe Storage </h6>
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
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"><del>99.9%</del> <span class="fw-bolder">100%</span> Guaranteed UpTime</h6>
            </div>
            <a target="_blank" id="link_button-8" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=monthly">
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

export default Card2
