import React from 'react'

const Card3 = () => {
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price9');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price9[data-target]');
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
          $('#link_button-9').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price10');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price10[data-target]');
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
          $('#link_button-10').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price11');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price11[data-target]');
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
          $('#link_button-11').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price12');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price12[data-target]');
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
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0  text-light fw-bolderc rounded-top">
              <h5 class="mb-0"> WP Basic </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 550 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan9" class="text-d-green">1 Month Rs. 519</span>
              <div class="form-group parent-select-price9 text-center">
                <select class="m-auto form-control select-price9" data-target="plan9">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=monthly">1 Month Rs. 1100</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=quarterly">3 Months Rs. 2970 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=semi-annually">6 Months Rs. 5280 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=annually">1 Year Rs. 7920 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=biennually">2 Years Rs. 14520 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=triennually">3 Years Rs. 19800 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> IO 1MB/s </h6>
              <hr />
              <h6 class="m-0"> IOPS 1024 </h6>
              <hr />
              <h6 class="m-0"> EP 20 </h6>
              <hr />
              <h6 class="m-0"> 1.5GB RAM </h6>
              <hr />
              <h6 class="m-0"> CPU 100% </h6>
              <hr />
              <h6 class="m-0"> Enable Gzip </h6>
              <hr />
              <h6 class="m-0"> 1 Databases </h6>
              <hr />
              <h6 class="m-0"> 10GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> Host 1 Website </h6>
              <hr />
              <h6 class="m-0"> 3 FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> Enable Keep-Alive </h6>
              <hr />
              <h6 class="m-0"> 3 E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"> 1GB Internet Port </h6>
              <hr />
              <h6 class="m-0"> 1 GB NVMe Storage </h6>
              <hr />
              <h6 class="m-0"> Enable mod_pagespeed </h6>
              <hr />
              <h6 class="m-0"> Enable Browser Caching </h6>
              <hr />
              <h6 class="m-0"> Disable Image Hotlinking </h6>
              <hr />
              <h6 class="m-0"> Gzip Deflate Compression </h6>
              <hr />
              <h6 class="m-0"> Automatically WP Installed </h6>
              <hr />
              <h6 class="m-0"> Expires headers to leverage browser caching </h6>
              <hr />
              <h6 class="m-0"> <del> 99.9% </del> <span class="fw-bolder">100%</span> Guaranted UpTime </h6>
            </div>
            <a target="_blank" id="link_button-9" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> WP Economy </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 715 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan10" class="text-d-green"> 1 Month Rs. 800 </span>
              <div class="form-group parent-select-price10">
                <select class="m-auto form-control select-price10" data-target="plan10">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=monthly">1 Month Rs. 1430</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=quarterly">3 Months Rs. 3861 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=semi-annually">6 Months Rs. 6864 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=annually">1 Year Rs. 10296 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=biennually">2 Years Rs. 18876 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=triennually">3 Years Rs. 25740 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> IO 1MB/s </h6>
              <hr />
              <h6 class="m-0"> IOPS 2000 </h6>
              <hr />
              <h6 class="m-0"> EP 30 </h6>
              <hr />
              <h6 class="m-0"> 2GB RAM </h6>
              <hr />
              <h6 class="m-0"> CPU 100% </h6>
              <hr />
              <h6 class="m-0"> Enable Gzip </h6>
              <hr />
              <h6 class="m-0"> 3 Databases </h6>
              <hr />
              <h6 class="m-0"> 20GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> Host 1 Website </h6>
              <hr />
              <h6 class="m-0"> 5 FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> Enable Keep-Alive </h6>
              <hr />
              <h6 class="m-0"> 5 E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"> 1GB Internet Port </h6>
              <hr />
              <h6 class="m-0"> 3 GB NVMe Storage </h6>
              <hr />
              <h6 class="m-0"> Enable mod_pagespeed </h6>
              <hr />
              <h6 class="m-0"> Enable Browser Caching </h6>
              <hr />
              <h6 class="m-0"> Disable Image Hotlinking </h6>
              <hr />
              <h6 class="m-0"> Gzip Deflate Compression </h6>
              <hr />
              <h6 class="m-0"> Automatically WP Installed </h6>
              <hr />
              <h6 class="m-0"> Expires headers to leverage browser caching </h6>
              <hr />
              <h6 class="m-0"> <del>99.9%</del> <span class="fw-bolder">100%</span> Guaranteed UpTime</h6>
            </div>
            <a target="_blank" id="link_button-10" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=monthly"><div class="bg-light m-0 bx-shadow py-3 rounded-15">
              <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                <p class="m-0"> Buy Now </p>
              </button>
            </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> WP Deluxe </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 929 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan11" class="text-d-green">1 Month Rs. 1050</span>
              <div class="form-group parent-select-price11">
                <select class="m-auto form-control select-price11" data-target="plan11">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=monthly">1 Month Rs. 1859</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=quarterly">3 Months Rs. 5019 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=semi-annually">6 Months Rs. 8923 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=annually">1 Year Rs. 13884 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=biennually">2 Years Rs. 24538 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=triennually"> 3 Years Rs. 33462 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> IO 2MB/s </h6>
              <hr />
              <h6 class="m-0"> IOPS 3000 </h6>
              <hr />
              <h6 class="m-0"> EP 40 </h6>
              <hr />
              <h6 class="m-0"> 3GB RAM </h6>
              <hr />
              <h6 class="m-0"> CPU 150% </h6>
              <hr />
              <h6 class="m-0"> Enable Gzip </h6>
              <hr />
              <h6 class="m-0"> 10 Databases </h6>
              <hr />
              <h6 class="m-0"> 30GB Bandwidth </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"> Host 3 Website </h6>
              <hr />
              <h6 class="m-0"> 10 FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> Enable Keep-Alive </h6>
              <hr />
              <h6 class="m-0"> 10 E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> 1GB Internet Port </h6>
              <hr />
              <h6 class="m-0"> 10 GB NVMe Storage </h6>
              <hr />
              <h6 class="m-0"> Enable mod_pagespeed </h6>
              <hr />
              <h6 class="m-0"> Enable Browser Caching </h6>
              <hr />
              <h6 class="m-0"> Disable Image Hotlinking </h6>
              <hr />
              <h6 class="m-0"> Gzip Deflate Compression</h6>
              <hr />
              <h6 class="m-0"> Automatically WP Installed </h6>
              <hr />
              <h6 class="m-0"> Expires headers to leverage browser caching</h6>
              <hr />
              <h6 class="m-0"> <del>99.9%</del> <span class="fw-bolder">100%</span> Guaranteed UpTime </h6>
            </div>
            <a target="_blank" id="link_button-11" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=monthly">
              <div class="bg-light m-0 bx-shadow py-3 rounded-15">
                <button class="btn btn-orange text-light fw-bolder w-75 rounded-pill my-2 py-2">
                  <p class="m-0"> Buy Now </p>
                </button>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div class="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 class="mb-0"> WP Unlimited </h5>
            </div>
            <div class="bg-d-green p-2 px-3 text-light m-0 p-0">
              <h4 class="m-0 display-6"> 1672 </h4>
              <p class="m-1"> Monthly </p>
              <p class="m-1"> *When Ordered Triennally </p>
              <span data-price="plan12" class="text-d-green">1 Month Rs. 1999</span>
              <div class="form-group parent-select-price12">
                <select class="m-auto form-control select-price12" data-target="plan12">
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=monthly">1 Month Rs. 3345</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=quarterly">3 Months Rs. 9031 Save 10%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=semi-annually">6 Months Rs. 16056 Save 20%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=annually">1 Year Rs. 24084 Save 40%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=biennually">2 Years Rs. 44154 Save 45%</option>
                  <option class="cycle" data-url="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=triennually">3 Years Rs. 60210 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 class="m-0"> IO 3MB/s </h6>
              <hr />
              <h6 class="m-0"> IOPS 4000 </h6>
              <hr />
              <h6 class="m-0"> EP 60 </h6>
              <hr />
              <h6 class="m-0"> 4GB RAM </h6>
              <hr />
              <h6 class="m-0"> CPU 200% </h6>
              <hr />
              <h6 class="m-0"> Enable Gzip </h6>
              <hr />
              <h6 class="m-0"> 1 Free Domain* </h6>
              <hr />
              <h6 class="m-0"> Host 10 Website </h6>
              <hr />
              <h6 class="m-0"> Enable Keep-Alive </h6>
              <hr />
              <h6 class="m-0"> Unlimited Free SSL </h6>
              <hr />
              <h6 class="m-0"> 1GB Internet Port </h6>
              <hr />
              <h6 class="m-0"> 20 GB NVMe Storage </h6>
              <hr />
              <h6 class="m-0"> 100 Bandwidth* </h6>
              <hr />
              <h6 class="m-0"> Unlimited Databases </h6>
              <hr />
              <h6 class="m-0"> Enable mod_pagespeed </h6>
              <hr />
              <h6 class="m-0"> Enable Browser Caching </h6>
              <hr />
              <h6 class="m-0"> Unlimited FTP Accounts </h6>
              <hr />
              <h6 class="m-0"> Disable Image Hotlinking </h6>
              <hr />
              <h6 class="m-0"> Gzip Deflate Compression </h6>
              <hr />
              <h6 class="m-0"> Unlimited E-mail Accounts </h6>
              <hr />
              <h6 class="m-0"> Automatically WP Installed </h6>
              <hr />
              <h6 class="m-0"> Expires headers to leverage browser caching </h6>
              <hr />
              <h6 class="m-0"> <del>99.9%</del> <span class="fw-bolder">100%</span> Guaranteed UpTime </h6>
              <hr />
            </div>
            <a target="_blank" id="link_button-12" class="ct-link-button" href="https://hoster.pk/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=monthly">
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

export default Card3
