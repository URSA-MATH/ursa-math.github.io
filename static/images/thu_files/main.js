!function(){var i={601:function(){var i='<div class="pageTips" id="pageTips"><div class="container"><a href="javascript:;" onclick="$(\'#pageTips\').hide()" class="close"></a><div class="img"><img src="image/nimg273.png" alt="" /></div><div class="msg">抱歉，我们不再支持您的浏览器。请升级您的Internet Explorer（IE）浏览器到<a href="https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads" target="_blank">最新版本( IE 10以上版本)</a>，或将<a href="https://ie.sogou.com/" target="_blank">搜狗</a>、<a href="https://browser.360.cn/" target="_blank">360</a>、<a href="https://browser.qq.com/" target="_blank">QQ</a> 等浏览器切换到急速模式，您还可以下载安装 <a href="https://www.google.cn/chrome/" target="_blank">谷歌</a>、<a href="https://www.firefox.com.cn/">火狐</a> 浏览器以达到最佳观看模式。</div></div></div>';function n(){var i,n=window.innerWidth;i=n<=1360&&n>800?Math.round(n/13.6):n<=800&&n>550?70:n<=550?Math.round(n/7.5):100,$("html").css({"font-size":i+"px"})}!function(){var n=navigator.appName,o=navigator.appVersion.split(";");if(void 0!==o[1]){var t=o[1].replace(/[ ]/g,"");"Microsoft Internet Explorer"==n&&("MSIE8.0"==t||"MSIE7.0"==t||"MSIE6.0"==t||"MSIE5.0"==t?document.write(i):"MSIE9.0"==t&&($("body").prepend(i),$("#pageTips").show()))}}(),n(),$(window).resize((function(){n()})),$((function(){setTimeout((function(){$("body").addClass("show")}),500),(new WOW).init()}))}},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var s=n[t]={exports:{}};return i[t](s,s.exports,o),s.exports}!function(){"use strict";function i(i){var n=this;this.dom=i.dom,this.domList=this.dom,void 0!==i.domList&&(this.domList=this.dom.find(i.domList)),this.domList.find("ul").addClass("swiper-wrapper"),this.domList.find("li").addClass("swiper-slide"),this.dom.find(".num").length>0&&this.dom.find(".num-total").html(this.dom.find("li").length),this.change=function(){},this.mySwiper=new Swiper(this.domList,{initialSlide:void 0!==i.initial?i.initial:0,loop:void 0===i.loop||i.loop,autoplay:void 0!==i.autoplay?i.autoplay:5e3,autoplayDisableOnInteraction:!1,paginationClickable:!0,speed:600,slidesPerView:void 0!==i.slidesPerView?i.slidesPerView:1,slidesPerGroup:void 0!==i.slidesPerGroup?i.slidesPerGroup:1,centeredSlides:void 0!==i.centeredSlides&&i.centeredSlides,roundLengths:void 0!==i.roundLengths&&i.roundLengths,slideToClickedSlide:void 0!==i.slideToClickedSlide&&i.slideToClickedSlide,pagination:this.dom.find(".dots"),autoHeight:!0,onSlideChangeStart:function(i){n.dom.find(".num").length>0&&n.dom.find(".num-curr").html(i.realIndex+1),n.change(i.realIndex)}}),this.dom.hover((function(){n.mySwiper.stopAutoplay()}),(function(){n.mySwiper.startAutoplay()})),this.dom.find(".prev").click((function(){return n.mySwiper.slidePrev(),!1})),this.dom.find(".next").click((function(){return n.mySwiper.slideNext(),!1}))}function n(i,n){for(var o=i.length,t=o%n==0?o/n:Math.floor(o/n+1),e=[],s=0;s<t;s++)e.push(i.slice(s*n,s*n+n));return e}o(601),$((function(){!function(){var o=$(".index-2"),t=[];o.find(".list li").each((function(){t.push($(this).html())})),t=window.innerWidth>800?n(t,4):n(t,1);var e="";t.forEach((function(i){e+="<li><dl>",i.forEach((function(i){e+="<dd>".concat(i,"</dd>")})),e+="</dl></li>"})),o.find(".list-wrapper ul").html(e),new i({dom:o.find(".list"),domList:".list-wrapper",slidesPerView:window.innerWidth>800?1:1.3,centeredSlides:!0})}();var o=[$(".g-head"),$("body"),$(".g-nav")],t=o[0],e=o[1],s=o[2];if(t.find(".navA").click((function(){e.hasClass("navShow")?e.removeClass("navShow"):e.addClass("navShow")})),s.find("li").each((function(i){var n=$(this);window.innerWidth<800&&n.find(".list").length>0&&(n.addClass("s-nav-li"),n.find("a.name").click((function(){return n.hasClass("open")?(n.removeClass("open"),n.find(".list").hide()):(n.addClass("open"),n.find(".list").show()),!1})))})),t.find(".search").find("a").click((function(){t.hasClass("searchShow")?t.removeClass("searchShow"):t.addClass("searchShow")})),window.innerWidth>800)$(".select").hover((function(){$(this).addClass("on")}),(function(){$(this).removeClass("on")}));else{$(".select").each((function(){var i=$(this);i.find(".name").click((function(){i.hasClass("on")?$(".select").removeClass("on"):($(".select").removeClass("on"),i.addClass("on"))}))}));var a=$(".p-class");$("body").click((function(){a.removeClass("on")})),a.click((function(i){i.stopPropagation()})),a.find(".title").click((function(){a.hasClass("on")?a.removeClass("on"):a.addClass("on")}))}if($(".article-nav").length>0){var d=$(".article-nav"),l=$(".article-nav li"),c=$(".schoolBadge .item");l.each((function(i){$(this).find("a").click((function(){return $("body,html").stop(!0,!0).animate({scrollTop:c.eq(i).offset().top},300),!1}))})),$(window).scroll((function(){c.each((function(i){$(window).scrollTop()>$(this).offset().top-$(window).height()/3&&(l.find("a").removeClass("on"),l.eq(i).find("a").addClass("on"))}));var i=$(".g-foot-msg").offset().top-$(window).scrollTop()-d.find(".article-nav-container").height();i>=0&&(i=0),$(window).scrollTop()>d.offset().top?(d.addClass("fixed"),d.find(".article-nav-container").css({top:i})):d.removeClass("fixed")}))}$(".schoolBadge").find(".imgs").each((function(){var i=$(this),n=i.find("dd"),o=i.find("li");function t(i){n.removeClass("on"),n.eq(i).addClass("on"),o.hide(),o.eq(i).fadeIn(300)}n.each((function(i){$(this).click((function(){t(i)}))})),t(0)}));var r=function(i){m.hide(),m.eq(i).fadeIn(300),w||(u=i,f())},f=function(){h.find("li").removeClass("on"),h.find("li").eq(u).addClass("on"),p=setTimeout((function(){u<h.find("li").length-1?u++:u=0,console.log(u),r(u)}),5e3)},h=$(".templateShow .img-list"),u=0,p=null,m=h.find(".big-img div"),v=window.innerWidth>800?6:3,w=h.find("li").length>v;w?new i({dom:h.find(".list"),domList:".list-wrapper",slidesPerView:v,slideToClickedSlide:!0,loop:w}).change=function(i){r(i)}:(h.find(".arrow").addClass("disabled"),h.find("li").each((function(i){$(this).click((function(){clearTimeout(p),r(i)}))})),h.find(".list").addClass("list22")),r(0);var g=$(".side-nav");g.find("h1").click((function(){g.hasClass("on")?g.removeClass("on"):g.addClass("on")}));var C=$(".photo-layer");C.click((function(){C.removeClass("show")})),C.find(".container").click((function(i){i.stopPropagation()})),$(".schoolBadge").find(".img").each((function(){var i=$(this);i.find("a.btn").click((function(){return C.find("img").attr("src",i.find("img").attr("src")),C.addClass("show"),!1}))}));var k,S,b=$(".photo-layer2");b.click((function(){b.removeClass("show")})),b.find(".container").click((function(i){i.stopPropagation()})),$(".templateShow").find(".big-img div").each((function(){var i=$(this);i.find("a.btn").click((function(){return b.find("img").attr("src",i.find("img").attr("src")),b.addClass("show"),!1}))})),new Clipboard(".copy-btn"),$(".copy-btn").click((function(){clearTimeout(k),0===$(".copy-tips").length&&$("body").append('<div class="copy-tips">链接复制成功</div>'),k=setTimeout((function(){$(".copy-tips").remove()}),600)})),$(".input").each((function(){var i=$(this);i.find("input").focus((function(){i.addClass("on")})),i.find("input").blur((function(){i.removeClass("on")})),i.find("textarea").focus((function(){i.addClass("on")})),i.find("textarea").blur((function(){i.removeClass("on")}))})),(S=$(".topA")).click((function(){$("body,html").stop(!0,!0).animate({scrollTop:0},300)})),$(window).scroll((function(){$(window).scrollTop()>$(window).height()?S.addClass("show"):S.removeClass("show")}))}))}()}();