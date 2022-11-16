window.addEventListener('DOMContentLoaded', function() {
    $(".group-product .aside-list-product").each(function() {
      console.log('ALo')
      var cur = $(this);
      var label_cate = "san-pham";
      $.ajax({
        url: "/feeds/posts/default/-/" + label_cate,
        type: "get",
        data: {
          alt: "json",
          "max-results": 5
        },
        dataType: "jsonp",
        beforeSend: function() {},
        success: function(b) {
          getproductdata(b);
          awe_lazyloadImage();
        }
      })

      function getproductdata(e) {
        var entry_post = e.feed.entry;
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
              d = e.feed.entry[n].media$thumbnail.url.replace("s72-c", "w240-h240-p-k-no-nu");
            } else {
              d = "https://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/w240-h240-p-k-no-nu/nth.png"
            }
            if ("content" in e.feed.entry[n]) var post = e.feed.entry[n].content.$t;
            else post = "summary" in e.feed.entry[n] ? e.feed.entry[n].summary.$t : "";
            let dataItem = null;
          
            try {
              const el  = document.createElement('div');
              el.innerHTML = post;
             const dataModelStr = el.querySelector('div[data-model]').getAttribute('data-model')
              dataItem = JSON.parse(atob(dataModelStr));
            } catch (error) {}
             if (dataItem) {  
                var giaban = dataItem.price;
                    if (dataItem.oldPrice != null) {
                        var giacu =  dataItem.oldPrice;
                    var cu = '<span class="old-price">'+giacu+'</span>';
                        } else {
                            cu = ''
                        }
            }
            var content = '<div class="evo-product-block-item evo-product-block-item-small"> <a href="'+t+'" title="'+f+'" class="product__box-image"> <img class="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="'+d+'" alt="'+f+'" /> </a> <div class="evo-product-right"> <a href="'+t+'" title="'+f+'" class="product__box-name">'+f+'</a> <div class="product__box-price"> <span class="price">'+giaban+'</span> '+cu+' </div> </div> </div>';
            cur.append(content)
          }
        } else {
          var content = '<div class="alert alert-warning fade in green-alert show" role="alert"> <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button> Không có sản phẩm nào trong danh mục này. </div>';
          cur.append(content)
        }
      }
    })
  })