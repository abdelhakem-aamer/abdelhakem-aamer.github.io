!/*--------------------------------------------------
Project:        Furnid
Version:        1.0
Author:         Company Name
-----------------------------------------------------

    JS INDEX
    ================================================
    * preloader js
    * slick  slider
    * mousemove 
    * wow js
    ================================================*/ 



function(e) {
    "use strict";
    e(window).on("load", function() {
        e(".perker_loader-wrapper").fadeOut("slow"), e(void 0).fadeOut("slow")
    }), e(window).on("scroll", function() {
       
    });
    var t = 0,
        o = 0,
        n = setInterval(function() {
            e(".perker_loader-wrapper .counter h1").html(o + "%"), o++, 101 == ++t && clearInterval(n)
        }, 50);
      
    e("#toggle").on('click', function() {
        e(this).toggleClass("active"), e("#overlay").toggleClass("open")
    });
    const s = document.getElementById("menu-toggle"),
        i = "open",
        a = "close";
    let r = i;
    s.addEventListener("click", () => {
        s.classList.contains(i) ? (s.classList.remove(r), r = a) : s.classList.contains(a) && (s.classList.remove(r), r = i), s.offsetWidth, s.classList.add(r)
    });
    var l = 0,
        c = 0,
        d = 0,
        w = 0,
        m = 1 / 30;
    e(window).on("mousemove click", function(t) {
            var o = Math.max(-100, Math.min(100, e(window).width() / 2 - t.clientX)),
                n = Math.max(-100, Math.min(100, e(window).height() / 2 - t.clientY));
            l = 20 * o / 100, c = 10 * n / 100
        }),
        function t() {
            var o = "translate(" + (d += (l - d) * m) + "px, " + (w += (c - w) * m) + "px) scale(1.1)";
            e(".move-bg").css({
                "-webit-transform": o,
                "-moz-transform": o,
                transform: o
            }), 
            window.requestAnimationFrame(t)
        }(), 


        e(".pro-slide").slick({
            infinite: !0,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: !1,
            autoplaySpeed: 2e3,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    centerMode: !0,
                    slidesToShow: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    centerMode: !1,
                    slidesToShow: 1
                }
            }]
        }),
         (new WOW).init()
}(jQuery);

