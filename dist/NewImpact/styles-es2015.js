(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n@font-face {\r\n  font-family: latoBold;\r\n  src: url('/assets/Lato-Bold.woff');\r\n}\r\n@font-face {\r\n  font-family: latoBoldItalic;\r\n  src: url('/assets/Lato-BoldItalic.woff');\r\n}\r\n@font-face {\r\n  font-family: latoItalic;\r\n  src: url('/assets/Lato-Italic.woff');\r\n}\r\n@font-face {\r\n  font-family: lato;\r\n  src: url('/assets/Lato-Regular.woff');\r\n}\r\nbody {\r\n    margin: 0px;\r\n    background-color: #fafafa;\r\n    font-family: Arial, Helvetica, sans-serif, lato;\r\n  }\r\n::-webkit-scrollbar {\r\n    width: 12px;\r\n  }\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    border-radius: 10px;\r\n  }\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background: #dedbdb;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.15);\r\n  }\r\n::-webkit-scrollbar-thumb:window-inactive {\r\n      background: #d0d2d4;\r\n    }\r\n.pull-right {\r\n      float: right;\r\n  }\r\n.nav.nav-tabs {\r\n    position: relative;\r\n  }\r\n.nav-tabs {\r\n    background-color: #d0d2d4;\r\n    box-shadow: 0 0 10px #cccccc;\r\n    padding: 15px 10px 10px 10px;\r\n    padding: 0px 75px;\r\n    position: relative !important;\r\n    width: 100%;\r\n    padding: 50px 0px 0px 80px\r\n  }\r\n.nav-tabs > li:last-of-type > a {\r\n    margin-right: 0;\r\n    position: absolute;\r\n    right: 0;\r\n  }\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\r\n    color: #fff !important;\r\n    background-color: #4477aa !important;\r\n    border: none !important;\r\n  }\r\n.tab-pane.active {\r\n    padding: 1.5rem;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);\r\n    border-radius: .25rem;\r\n    -webkit-transition: 0.3s linear;\r\n    transition: 0.3s linear;\r\n    position: relative;\r\n    padding: 20px 80px;\r\n  }\r\n.nav-tabs .nav-item {\r\n    text-align: center;\r\n  }\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active .tab-title {\r\n    color: #fff!important;\r\n}\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active .trending-icon {\r\n  background-image: url(\"/assets/trending_white.svg\") !important;\r\n}\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active .verbatim-icon {\r\n  background-image: url(\"/assets/verbatim_white.svg\") !important;\r\n}\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active .about-icon {\r\n  background-image: url(\"/assets/about_white.svg\") !important;\r\n}\r\n.p-right-80 {\r\n      padding: 0px 80px;\r\n  }\r\n@media (max-width: 1024px) {\r\n   .p-mobile-0 {\r\n       padding: 0px 20px !important;\r\n   }\r\n    .tab-pane.active{\r\n        padding: 20px;\r\n    }\r\n  }\r\n@media (max-width: 767px) {\r\n    .nav-tabs {\r\n    padding: 90px 0px 0px 0px !important;\r\n  }\r\n}\r\n@media (max-width: 369px) {\r\n    .nav-tabs {\r\n    padding: 130px 0px 0px 0px !important;\r\n  }\r\n}\r\n/*Tag Cloud CSS Starts*/\r\n/* fonts */\r\ndiv.jqcloud {\r\n    font-family: \"Helvetica\", \"Arial\", sans-serif;\r\n    font-size: 10px;\r\n    line-height: normal;\r\n    width: 100%;\r\n  }\r\ndiv.jqcloud a {\r\n      font-size: inherit;\r\n      text-decoration: none;\r\n    }\r\ndiv.jqcloud span.w20 {\r\n      font-size: 600%;\r\n    }\r\ndiv.jqcloud span.w19 {\r\n      font-size: 600%;\r\n    }\r\ndiv.jqcloud span.w18 {\r\n      font-size: 600%;\r\n    }\r\ndiv.jqcloud span.w17 {\r\n      font-size: 575%;\r\n    }\r\ndiv.jqcloud span.w16 {\r\n      font-size: 575%;\r\n    }\r\ndiv.jqcloud span.w15 {\r\n      font-size: 575%;\r\n    }\r\ndiv.jqcloud span.w14 {\r\n      font-size: 550%;\r\n    }\r\ndiv.jqcloud span.w13 {\r\n      font-size: 525%;\r\n    }\r\ndiv.jqcloud span.w12 {\r\n      font-size: 500%;\r\n    }\r\ndiv.jqcloud span.w11 {\r\n      font-size: 475%;\r\n    }\r\ndiv.jqcloud span.w10 {\r\n      font-size: 450%;\r\n    }\r\ndiv.jqcloud span.w9 {\r\n      font-size: 425%;\r\n    }\r\ndiv.jqcloud span.w8 {\r\n      font-size: 400%;\r\n    }\r\ndiv.jqcloud span.w7 {\r\n      font-size: 375%;\r\n    }\r\ndiv.jqcloud span.w6 {\r\n      font-size: 350%;\r\n    }\r\ndiv.jqcloud span.w5 {\r\n      font-size: 325%;\r\n    }\r\ndiv.jqcloud span.w4 {\r\n      font-size: 300%;\r\n    }\r\ndiv.jqcloud span.w3 {\r\n      font-size: 200%;\r\n    }\r\ndiv.jqcloud span.w2 {\r\n      font-size: 150%;\r\n    }\r\ndiv.jqcloud span.w1 {\r\n      font-size: 100%;\r\n    }\r\n/* colors */\r\ndiv.jqcloud {\r\n    color: #aab5f0;\r\n  }\r\ndiv.jqcloud a {\r\n      color: inherit;\r\n    }\r\ndiv.jqcloud a:hover {\r\n        color:#99ccee;\r\n      }\r\ndiv.jqcloud a:hover {\r\n        color: #0cf;\r\n      }\r\ndiv.jqcloud span.w10 {\r\n      color: #a0ddff;\r\n    }\r\ndiv.jqcloud span.w9 {\r\n      color: #a0ddff;\r\n    }\r\ndiv.jqcloud span.w8 {\r\n      color: #a0ddff;\r\n    }\r\ndiv.jqcloud span.w7 {\r\n      color: #39d;\r\n    }\r\ndiv.jqcloud span.w6 {\r\n      color: #90c5f0;\r\n    }\r\ndiv.jqcloud span.w5 {\r\n      color: #90a0dd;\r\n    }\r\ndiv.jqcloud span.w4 {\r\n      color: #90c5f0;\r\n    }\r\ndiv.jqcloud span.w3 {\r\n      color:#0cf;\r\n    }\r\ndiv.jqcloud span.w2 {\r\n      color:#0df;\r\n    }\r\ndiv.jqcloud span.w1 {\r\n      color:#09f;\r\n    }\r\n/* layout */\r\ndiv.jqcloud {\r\n    overflow: hidden;\r\n    position: relative;\r\n  }\r\ndiv.jqcloud span {\r\n      padding: 0;\r\n    }\r\n/*Tag Cloud CSS Ends*/\r\n.ng2-tag-input__text-input {\r\n    padding: 0 .5rem !important;\r\n    height: 30px !important;\r\n    font-size: 14px !important;\r\n    border-radius: 3px;\r\n  }\r\n.ng2-tag-input {\r\n      border-bottom: none !important;\r\n  }\r\ntag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\r\n      box-shadow: none!important;\r\n  }\r\ntag {\r\n    font-size: 14px !important;\r\n    color: #444;\r\n    border-radius: 7px !important;\r\n    -webkit-transition: .3s;\r\n    transition: .3s;\r\n    margin: .1rem .3rem .1rem 0;\r\n    padding: .08rem .45rem;\r\n    height: 26px !important;\r\n    line-height: 25px !important;\r\n  }\r\ndelete-icon svg {\r\n    vertical-align: bottom!important;\r\n    height: 25px!important;\r\n  }\r\n.custom-day {\r\n    text-align: center;\r\n    padding: 0.185rem 0.25rem;\r\n    display: inline-block;\r\n    height: 2rem;\r\n    width: 2rem;\r\n  }\r\n.custom-day.range {\r\n      background-color: rgb(2, 117, 216);\r\n      color: white;\r\n    }\r\n.btn:focus, .btn:active:focus, .btn.active:focus, .btn.active {\r\n    outline: none !important;\r\n    background-image: none;\r\n    box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);\r\n  }\r\ndiv#ngb-tab-1-panel{\r\n      padding: 0px;\r\n  }\r\nngb-accordion.accordion .card {\r\n    background:#31353d   !important;\r\n    color: #818896!important;\r\n    border: none;\r\n    border-radius: 0px;\r\n  }\r\nngb-accordion.accordion .card-header {\r\n    padding: 0px!important;\r\n    border: 0!important;\r\n    background-color: transparent!important;\r\n  }\r\nngb-accordion.accordion .btn {\r\n    color: #818896 !important;\r\n    width: 100%;\r\n    text-align: left;\r\n    border-radius: 0px;\r\n  }\r\nngb-accordion.accordion .btn:hover, ngb-accordion.accordion .btn:focus, ngb-accordion.accordion .btn:active {\r\n    background-color: transparent;\r\n    box-shadow: none;\r\n    color: #b8bfce!important;\r\n  }\r\nngb-accordion.accordion .card-header button:after {\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 900;\r\n    content: \"\\f105\";\r\n    font-style: normal;\r\n    display: inline-block;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    background: 0 0;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 9px;\r\n  }\r\n.loader img {\r\n    width: 30px;\r\n    height: auto;\r\n  }\r\n.hide-page-numbers /deep/ .ngx-pagination li:not(.pagination-previous):not(.pagination-next) {\r\n  display: none !important;\r\n}\r\n.ngx-pagination .pagination-previous a::before, .ngx-pagination .pagination-previous.disabled::before {\r\n  content: \"\\003C\" !important;\r\n  display: inline-block;\r\n  margin-right: 0.5rem;\r\n  font-weight: 900;\r\n}\r\n.ngx-pagination .pagination-next a::after, .ngx-pagination .pagination-next.disabled::after {\r\n    content: \"\\003E\" !important;\r\n    display: inline-block;\r\n    margin-left: 0.5rem;\r\n    font-weight: 900;\r\n}\r\n.header-title {\r\n  font-size: 1rem;\r\n  margin: 0 0 7px 0;\r\n}\r\n.card-box {\r\n  background-color: #fff;\r\n  padding: 1.5rem;\r\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);\r\n  margin-bottom: 24px;\r\n  border-radius: .25rem;\r\n  -webkit-transition: 0.3s linear;\r\n  transition: 0.3s linear;\r\n  position: relative;\r\n  overflow: auto;\r\n}\r\n.h-350 {\r\n  height: 350px;\r\n}\r\n.sweep-to-right {\r\n  position: relative;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition: color 1000ms;\r\n  transition: color 1000ms;\r\n}\r\n.sweep-to-right:before {\r\n    height: 5px;\r\n    content: \"\";\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: #2098d1;\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: 0 50%;\r\n    transform-origin: 0 50%;\r\n    -webkit-transition-property: transform;\r\n    -webkit-transition-property: -webkit-transform;\r\n    transition-property: -webkit-transform;\r\n    transition-property: transform;\r\n    transition-property: transform, -webkit-transform;\r\n    -webkit-transition: 300ms ease-out;\r\n    transition: 300ms ease-out;\r\n  }\r\n.sweep-to-right:hover:before {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n  }\r\n.z-index-1 {\r\n    z-index: 1;\r\n  }\r\n@media (max-width: 1024px) {\r\n    .ngb-dp-months {\r\n      display: -webkit-box !important;\r\n      display: flex !important;\r\n      overflow-x: scroll !important;\r\n      width: 245px !important;\r\n    }  \r\n}\r\n  \r\n  \r\n \r\n/*# sourceMappingURL=data:application/json;base64,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dCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBsYXRvQm9sZDtcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9MYXRvLUJvbGQud29mZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBsYXRvQm9sZEl0YWxpYztcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9MYXRvLUJvbGRJdGFsaWMud29mZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBsYXRvSXRhbGljO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL0xhdG8tSXRhbGljLndvZmYnKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogbGF0bztcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9MYXRvLVJlZ3VsYXIud29mZicpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmLCBsYXRvO1xyXG4gIH1cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUcmFjayAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhhbmRsZSAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZWRiZGI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB9XHJcbiAgXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOndpbmRvdy1pbmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkMGQyZDQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgLnB1bGwtcmlnaHQge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYubmF2LXRhYnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAubmF2LXRhYnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDJkNDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2NjY2M7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDc1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNTBweCAwcHggMHB4IDgwcHhcclxuICB9XHJcbiAgLm5hdi10YWJzID4gbGk6bGFzdC1vZi10eXBlID4gYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3N2FhICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYi1wYW5lLmFjdGl2ZSB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggODBweDtcclxuICB9XHJcblxyXG4gIC5uYXYtdGFicyAubmF2LWl0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbi5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIC50YWItdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG59XHJcbiAgXHJcbi5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIC50cmVuZGluZy1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3RyZW5kaW5nX3doaXRlLnN2Z1wiKSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIC52ZXJiYXRpbS1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3ZlcmJhdGltX3doaXRlLnN2Z1wiKSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIC5hYm91dC1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2Fib3V0X3doaXRlLnN2Z1wiKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gIFxyXG4gIC5wLXJpZ2h0LTgwIHtcclxuICAgICAgcGFkZGluZzogMHB4IDgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgLnAtbW9iaWxlLTAge1xyXG4gICAgICAgcGFkZGluZzogMHB4IDIwcHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAgLnRhYi1wYW5lLmFjdGl2ZXtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubmF2LXRhYnMge1xyXG4gICAgcGFkZGluZzogOTBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzY5cHgpIHtcclxuICAgIC5uYXYtdGFicyB7XHJcbiAgICBwYWRkaW5nOiAxMzBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4gIFxyXG4gIC8qVGFnIENsb3VkIENTUyBTdGFydHMqL1xyXG4gIC8qIGZvbnRzICovXHJcbiAgXHJcbiAgZGl2LmpxY2xvdWQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBhIHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MjAge1xyXG4gICAgICBmb250LXNpemU6IDYwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MTkge1xyXG4gICAgICBmb250LXNpemU6IDYwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MTgge1xyXG4gICAgICBmb250LXNpemU6IDYwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MTcge1xyXG4gICAgICBmb250LXNpemU6IDU3NSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLncxNiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTc1JTtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLncxNSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTc1JTtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLncxNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTUwJTtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLncxMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTI1JTtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLncxMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLncxMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDc1JTtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLncxMCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDUwJTtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLnc5IHtcclxuICAgICAgZm9udC1zaXplOiA0MjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53OCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDAwJTtcclxuICAgIH1cclxuICBcclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzcge1xyXG4gICAgICBmb250LXNpemU6IDM3NSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLnc2IHtcclxuICAgICAgZm9udC1zaXplOiAzNTAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53NSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzI1JTtcclxuICAgIH1cclxuICBcclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzQge1xyXG4gICAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLnczIHtcclxuICAgICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIH1cclxuICBcclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzEge1xyXG4gICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgLyogY29sb3JzICovXHJcbiAgZGl2LmpxY2xvdWQge1xyXG4gICAgY29sb3I6ICNhYWI1ZjA7XHJcbiAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgYSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgICBkaXYuanFjbG91ZCBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjojOTljY2VlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGRpdi5qcWNsb3VkIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMGNmO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLncxMCB7XHJcbiAgICAgIGNvbG9yOiAjYTBkZGZmO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53OSB7XHJcbiAgICAgIGNvbG9yOiAjYTBkZGZmO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53OCB7XHJcbiAgICAgIGNvbG9yOiAjYTBkZGZmO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53NyB7XHJcbiAgICAgIGNvbG9yOiAjMzlkO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53NiB7XHJcbiAgICAgIGNvbG9yOiAjOTBjNWYwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53NSB7XHJcbiAgICAgIGNvbG9yOiAjOTBhMGRkO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53NCB7XHJcbiAgICAgIGNvbG9yOiAjOTBjNWYwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MyB7XHJcbiAgICAgIGNvbG9yOiMwY2Y7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLncyIHtcclxuICAgICAgY29sb3I6IzBkZjtcclxuICAgIH1cclxuICBcclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzEge1xyXG4gICAgICBjb2xvcjojMDlmO1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIGxheW91dCAqL1xyXG4gIFxyXG4gIGRpdi5qcWNsb3VkIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgLypUYWcgQ2xvdWQgQ1NTIEVuZHMqL1xyXG4gIFxyXG4gIC5uZzItdGFnLWlucHV0X190ZXh0LWlucHV0IHtcclxuICAgIHBhZGRpbmc6IDAgLjVyZW0gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZzItdGFnLWlucHV0IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICB0YWc6bm90KDpmb2N1cyk6bm90KC50YWctLWVkaXRpbmcpOm5vdCg6YWN0aXZlKTpub3QoLnJlYWRvbmx5KTpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICB0YWcge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgbWFyZ2luOiAuMXJlbSAuM3JlbSAuMXJlbSAwO1xyXG4gICAgcGFkZGluZzogLjA4cmVtIC40NXJlbTtcclxuICAgIGhlaWdodDogMjZweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgZGVsZXRlLWljb24gc3ZnIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b20haW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyNXB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1kYXkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAgIC5jdXN0b20tZGF5LnJhbmdlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gIC5idG46Zm9jdXMsIC5idG46YWN0aXZlOmZvY3VzLCAuYnRuLmFjdGl2ZTpmb2N1cywgLmJ0bi5hY3RpdmUge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsMC4xMjUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsMC4xMjUpO1xyXG4gIH1cclxuICBcclxuICBkaXYjbmdiLXRhYi0xLXBhbmVse1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIG5nYi1hY2NvcmRpb24uYWNjb3JkaW9uIC5jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IzMxMzUzZCAgICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzgxODg5NiFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIG5nYi1hY2NvcmRpb24uYWNjb3JkaW9uIC5jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgbmdiLWFjY29yZGlvbi5hY2NvcmRpb24gLmJ0biB7XHJcbiAgICBjb2xvcjogIzgxODg5NiAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICBcclxuICBuZ2ItYWNjb3JkaW9uLmFjY29yZGlvbiAuYnRuOmhvdmVyLCBuZ2ItYWNjb3JkaW9uLmFjY29yZGlvbiAuYnRuOmZvY3VzLCBuZ2ItYWNjb3JkaW9uLmFjY29yZGlvbiAuYnRuOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBjb2xvcjogI2I4YmZjZSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIG5nYi1hY2NvcmRpb24uYWNjb3JkaW9uIC5jYXJkLWhlYWRlciBidXR0b246YWZ0ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMTA1XCI7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDlweDtcclxuICB9XHJcblxyXG4gIC5sb2FkZXIgaW1nIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgXHJcbi5oaWRlLXBhZ2UtbnVtYmVycyAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIGxpOm5vdCgucGFnaW5hdGlvbi1wcmV2aW91cyk6bm90KC5wYWdpbmF0aW9uLW5leHQpIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIGE6OmJlZm9yZSwgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwwMDNDXCIgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQgYTo6YWZ0ZXIsIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0LmRpc2FibGVkOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcMDAzRVwiICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbjogMCAwIDdweCAwO1xyXG59XHJcblxyXG4uY2FyZC1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMSk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBsaW5lYXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uaC0zNTAge1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbi5zd2VlcC10by1yaWdodCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDEwMDBtcztcclxuICB0cmFuc2l0aW9uOiBjb2xvciAxMDAwbXM7XHJcbn1cclxuXHJcbiAgLnN3ZWVwLXRvLXJpZ2h0OmJlZm9yZSB7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6ICMyMDk4ZDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIC5zd2VlcC10by1yaWdodDpob3ZlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIH1cclxuXHJcbiAgLnotaW5kZXgtMSB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5uZ2ItZHAtbW9udGhzIHtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDI0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9ICBcclxufVxyXG4gIFxyXG4gIFxyXG4gIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 18:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\iGuest\Desktop\Winwin_new_Layout\NI\NewImpact\src\styles.css */"./src/styles.css");


/***/ })

},[[18,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map