window.addEventListener('DOMContentLoaded', function() {
  $("#id-block-b .LinkList .e-tabs .content .col-lg-9 .tab-content .row").each(function() {
    var block = $(this);
    var label_cate = block.parent().attr("data-label");
    var id_tab = block.parent().attr("id");
    $.ajax({
      url: "/feeds/posts/default/-/" + label_cate,
      type: "get",
      data: {
        alt: "json",
        "max-results": 8
      },
      dataType: "jsonp",
      beforeSend: function() {},
      success: function(b) {
        getBlockData(b);
        awe_lazyloadImage();
        block.find('.item_add').click(function() {
          $(".cart_sidebar").toggleClass('active');
          $(".backdrop__body-backdrop___1rvky").addClass('active');
        });
      }
    })

    function getBlockData(e) {
      var entry_post = e.feed.entry;
      var linkaff = '';
      var linkpost = '';
      if (void 0 !== entry_post) {
        for (var n = 0; n < e.feed.entry.length; n++) {
          var entry = e.feed.entry[n];
          for (var s = 0; s < e.feed.entry[n].link.length; s++) {
            if (e.feed.entry[n].link[s].rel === "alternate") {
              t = e.feed.entry[n].link[s].href;
              break
            }
          }
          var f = e.feed.entry[n].title.$t;
          if ("media$thumbnail" in e.feed.entry[n]) {
            d = e.feed.entry[n].media$thumbnail.url.replace("s72-c", "w480-h480-p-k-no-nu");
          } else {
            d = "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/w480-h480-p-k-no-nu/nth.png"
          }
          var thumb = '';
          const dataContent = entry.content.$t;
          let dataItem = null;
          try {
            dataItem = JSON.parse(
              atob(
                dataContent.match(
                  /<div[^>]*?data-model=(["\'])?((?:.(?!\1|>))*.?)\1?/
                )[2]
              )
            );
          } catch (error) {}
          if (dataItem) {  
            var giaban = dataItem.price;
            if (dataItem.oldPrice != null) {
                var giacu =  dataItem.oldPrice;
                var cu = '<span class="product-old-price">' + giacu + '</span>';
                var price = giaban;
                var old = giacu;
                var giam = (100 * ((parseInt(price) - parseInt(old)) / parseInt(old))).toFixed(0);
                var sale = '<span class="ant-sale"> ' + giam + '% </span>';
              } else {
                cu = sale = ''
              }
              for (var im = 0; im < dataItem.images.length; im++) {
                thumb +=
                    '<span class="tt-img-roll-over"><img class="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="' +
                    dataItem.images[im] +
                    '" alt="' +
                    f +
                    '" /> </span>';
               }
               if (dataItem.aff) {
                var afflink = dataItem.aff;
              buy = '<a href = "' + afflink + '" title="Tới gian hàng" class="action add_to_cart" target = "_blank"><svg x="0px" y="0px" viewBox="0 0 489 489" style="enable-background:new 0 0 489 489;" xml:space="preserve"><path d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"></path></svg></a>';
              linkpost = '<a href = "' + afflink + '" title="Tới gian hàng" class="action cart-button" target = "_blank"><svg x="0px" y="0px" viewBox="0 0 162.656 162.656" style="enable-background:new 0 0 162.656 162.656;" xml:space="preserve"><path d="M151.764,10.894c-14.522-14.522-38.152-14.525-52.676-0.008l0.003,0.003L76.112,33.872l10.607,10.605l22.983-22.988 l-0.002-0.002c8.678-8.663,22.785-8.658,31.457,0.014c8.673,8.672,8.672,22.786,0,31.461l-34.486,34.484 c-4.201,4.202-9.787,6.516-15.729,6.516c-5.942,0-11.529-2.314-15.73-6.516L64.605,98.052c7.035,7.035,16.389,10.91,26.338,10.91 c9.949,0,19.303-3.875,26.335-10.91l34.487-34.484C166.284,49.043,166.284,25.413,151.764,10.894z"></path><path d="M52.96,141.162L52.96,141.162c-8.675,8.67-22.788,8.668-31.461-0.005c-8.673-8.675-8.673-22.791-0.001-31.465L55.98,75.21 c8.675-8.674,22.789-8.674,31.462,0L98.05,64.604c-14.524-14.523-38.154-14.524-52.676,0L10.89,99.086 c-14.519,14.523-14.519,38.154,0.001,52.678c7.263,7.262,16.801,10.893,26.341,10.892c9.536,0,19.074-3.629,26.333-10.887 l0.002-0.001l22.984-22.99l-10.608-10.606L52.96,141.162z"></path></svg></a>';
            } else {
              buy = '<a href = "javascript:void(0)" title="Thêm vào giỏ" class="action add_to_cart item_add"><svg x="0px" y="0px" viewBox="0 0 489 489" style="enable-background:new 0 0 489 489;" xml:space="preserve"><path d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"></path></svg></a>';
              linkpost = '<a title="Xem chi tiết" href="' + t + '" class="action cart-button"><svg x="0px" y="0px" viewBox="0 0 162.656 162.656" style="enable-background:new 0 0 162.656 162.656;" xml:space="preserve"><path d="M151.764,10.894c-14.522-14.522-38.152-14.525-52.676-0.008l0.003,0.003L76.112,33.872l10.607,10.605l22.983-22.988 l-0.002-0.002c8.678-8.663,22.785-8.658,31.457,0.014c8.673,8.672,8.672,22.786,0,31.461l-34.486,34.484 c-4.201,4.202-9.787,6.516-15.729,6.516c-5.942,0-11.529-2.314-15.73-6.516L64.605,98.052c7.035,7.035,16.389,10.91,26.338,10.91 c9.949,0,19.303-3.875,26.335-10.91l34.487-34.484C166.284,49.043,166.284,25.413,151.764,10.894z"></path><path d="M52.96,141.162L52.96,141.162c-8.675,8.67-22.788,8.668-31.461-0.005c-8.673-8.675-8.673-22.791-0.001-31.465L55.98,75.21 c8.675-8.674,22.789-8.674,31.462,0L98.05,64.604c-14.524-14.523-38.154-14.524-52.676,0L10.89,99.086 c-14.519,14.523-14.519,38.154,0.001,52.678c7.263,7.262,16.801,10.893,26.341,10.892c9.536,0,19.074-3.629,26.333-10.887 l0.002-0.001l22.984-22.99l-10.608-10.606L52.96,141.162z"></path></svg></a>';
            }
        var content = '<div class="col-lg-3 col-md-3 col-6"> <div class="evo-product-item simpleCart_shelfItem"> <div class="thumb-evo"> ' + sale + ' <a class="thumb-img" href="' + t + '" title="' + f + '"><span class="d-none item_link">' + t + '</span><span class="tt-img"> <img class="lazy item_thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="' + d + '" alt="' + f + '" /> </span> ' + thumb + ' </a> <form class="product-button hidden-sm hidden-xs hidden-md variants form-nut-grid form-ajaxtocart">' + buy + ' ' + linkpost + ' </form> </div> <a href="' + t + '" title="' + f + '" class="title item_name">' + f + '</a> <div class="flex-prices"> <strong class="product-price item_price">' + giaban + ' </strong> ' + cu + ' </div> </div> </div>';
        $("#id-block-b .LinkList .e-tabs .content .col-lg-9 .tab-content .row").each(function() {
          var vthis = $(this)
          if (vthis.parent().attr("id") == id_tab) {
            vthis.removeClass("loader");
            vthis.append(content);
          }
          })
          }
        }
      } else {
        var content = '<div class="alert alert-warning fade in green-alert show" role="alert"> <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button> Không có sản phẩm nào trong danh mục này. </div>';
        $("#id-block-b .LinkList .e-tabs .content .col-lg-9 .tab-content .row").each(function() {
          var this_a = $(this);
          if (this_a.parent().attr("id") == id_tab) {
            this_a.removeClass("loader")
            this_a.parent().html(content)
          }
        })
      }
    }
  })
})