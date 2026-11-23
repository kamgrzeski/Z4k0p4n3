var PREMIUM_USER = 1;
var RODO_ACCEPTED = true;
const _DOMAIN_ = 'webcamera.pl';
const _DOMAIN_STATIC_ = 'static.webcamera.pl';
const _DOMAIN_CDN_ = 'imageserver.webcamera.pl';

window.modules = window.modules || {};
window.modules.window = (function () {
    var windowWidth = +window.innerWidth;
    var windowHeight = +window.innerHeight;
    var windowIsMobile = windowWidth <= 767;
    var resizeListeners = [];
    var addResizeListener = function (callback) {
        resizeListeners.push(callback)
    };
    var isMobile = function () {
        return windowIsMobile
    };
    var getWidth = function () {
        return windowWidth
    };
    var getHeight = function () {
        return windowHeight
    };
    var checkSize = function () {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        windowIsMobile = windowWidth <= 767;
        resizeListeners.forEach(function (resizeListener) {
            resizeListener(windowWidth, windowHeight)
        })
    };
    window.addEventListener('resize', checkSize, {passive: !0});
    return {isMobile: isMobile, getWidth: getWidth, getHeight: getHeight, addResizeListener: addResizeListener}
}())