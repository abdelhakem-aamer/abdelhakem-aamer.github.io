var ticking = !1,
    isFirefox = /Firefox/i.test(navigator.userAgent),
    isIe = /MSIE/i.test(navigator.userAgent) || /Trident.*rv\:11\./i.test(navigator.userAgent),
    scrollSensitivitySetting = 30,
    slideDurationSetting = 600,
    currentSlideNumber = 0,
    totalSlideNumber = $(".hero_background").length;

function parallaxScroll(e) {
    delta = isFirefox ? -120 * e.detail : isIe ? -e.deltaY : e.wheelDelta, 1 != ticking && (delta <= -scrollSensitivitySetting && (ticking = !0, currentSlideNumber !== totalSlideNumber - 1 && (currentSlideNumber++ , nextItem()), slideDurationTimeout(slideDurationSetting)), delta >= scrollSensitivitySetting && (ticking = !0, 0 !== currentSlideNumber && currentSlideNumber-- , previousItem(), slideDurationTimeout(slideDurationSetting)));
}

function slideDurationTimeout(e) {
    setTimeout(function () {
        ticking = !1;
    }, e);
}
var ts, mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";

function nextItem() {
    $(".hero_background").eq(currentSlideNumber - 1).removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
    $(".hero_background").eq(currentSlideNumber).removeClass("down-scroll").addClass("up-scroll");
}
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), !1), $(document).on("touchstart bind", function (e) {
    ts = e.originalEvent.touches[0].clientY;
}), $(document).on("touchend bind", function (e) {
    var t = e.originalEvent.changedTouches[0].clientY;
    t + 5 < ts ? (currentSlideNumber !== totalSlideNumber - 1 && (currentSlideNumber++ , nextItem()), slideDurationTimeout(slideDurationSetting)) : ts < t - 5 && (0 !== currentSlideNumber && currentSlideNumber-- , previousItem(), slideDurationTimeout(slideDurationSetting));
});

