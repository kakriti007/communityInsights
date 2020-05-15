(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chart/chart.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chart/chart.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card-box sweep-to-right\">\r\n    <div *ngIf=\"empty\">\r\n        <div class=\"text-center mt-5 mx-auto p-4\">\r\n            <img class=\"mb-4 text-center pb-2 \" src=\"/assets/zero_page_icon.svg\">\r\n            <p id=\"emptySearch\"><i class=\"fas fa-exclamation-circle mx-2\"></i> Click on topics/hashtag to see the trends.</p>\r\n        </div>\r\n    </div>\r\n    \r\n    <h4 class=\"header-title d-inline-block\">Topics Over Time: {{searchValue}}</h4>\r\n    <p class=\"m-0 p-0 text-muted mb-3 small\"><em>Please select topics from Sentiment Bifurcation to see the trend over time</em></p>\r\n    \r\n    <div class=\"row h-350\">\r\n        <div id=\"chart\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\">\r\n  Loading...\r\n</div>\r\n\r\n<div id=\"top-nav\" class=\"w-100 text-white\">\r\n  <div class=\"navbar p-mobile-0\">\r\n    <img class=\"logo\" src=\"/assets/logo.png\">\r\n  </div>\r\n  <div class=\"p-right-80 p-mobile-0\">\r\n  <div id=\"d-block\">\r\n    <div class=\"row\">\r\n      <div class=\"col d-md-flex place-date-choice\">\r\n        <div class=\"inner-wrapper mt-1\">\r\n          <span>See what people are saying in </span>\r\n          <tag-input class=\"d-inline-block\" [ngModel]=\"['King County']\" [removable]=\"false\" [maxItems]=\"0\"></tag-input>\r\n\r\n          <!--This is the actual code to be used when there are multiple places-->\r\n          <!-- \r\n            <tag-input class=\"d-inline-block\" [ngModel]=\"[]\"\r\n                     [placeholder]=\"'Select Place'\"\r\n                     [onTextChangeDebounce]=\"0\"\r\n                     [maxItems]=\"2\"\r\n                     [secondaryPlaceholder]=\"'Select Place'\"\r\n                     [onlyFromAutocomplete]=\"true\">\r\n            <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [autocompleteItems]=\"['Seattle', 'Texas', 'Utah']\">\r\n            </tag-input-dropdown>\r\n          </tag-input>\r\n        -->\r\n\r\n        </div>\r\n       <div class=\"inner-wrapper mt-1\">\r\n        <span class=\"pr-2\">during</span>\r\n        <form class=\"form-inline d-inline-block\">\r\n          <div class=\"form-group my-1\">\r\n            <div class=\"input-group\">\r\n              <input #myRangeInput myRangeInput=\"myRangeInput\"\r\n                     class=\"form-control form-control-sm\"\r\n                     placeholder=\"yyyy-mm-dd to yyyy-mm-dd \"\r\n                     (click)=\"d.toggle()\"\r\n                     name=\"dp\"\r\n                     [(value)]=\"text\"\r\n                     [footerTemplate]=\"footerTemplate\"\r\n                     ngbDatepicker\r\n                     [dayTemplate]=\"t\"\r\n                     [displayMonths]=\"2\"\r\n                     [maxDate]=\"maxDate\"\r\n                     [minDate]=\"minDate\"\r\n                     [outsideDays]=\"outsideDays\"\r\n                     [autoClose]=\"outside\"\r\n                     #d=\"ngbDatepicker\">\r\n\r\n              <ng-template #t let-date=\"date\" let-focused=\"focused\">\r\n                <span class=\"custom-day\"\r\n                      [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\"\r\n                      [class.faded]=\"isHovered(date) || isInside(date)\"\r\n                      (click)=\"onDateSelection(date)\"\r\n                      (mouseenter)=\"hoveredDate = date\"\r\n                      (mouseleave)=\"hoveredDate = null\">\r\n                  {{ date.day }}\r\n                </span>\r\n              </ng-template>\r\n              <ng-template #footerTemplate>\r\n                <hr class=\"my-0\">\r\n                <button class=\"btn btn-primary btn-sm m-2 float-left\" (click)=\"getToday(today, ''); d.close()\">Today</button>\r\n                <button class=\"btn btn-secondary btn-sm m-2\" (click)=\"getWeek(today); d.close()\">This Week</button>\r\n                <button class=\"btn btn-secondary btn-sm m-2 float-right\" (click)=\"d.close()\">Close</button>\r\n              </ng-template>\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-sm btn-outline-light\" (click)=\"d.toggle();  $event.stopPropagation();\" type=\"button\">\r\n                  <i class=\"far fa-calendar-alt\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <button type=\"button\" class=\"btn btn-sm ml-4\" (click)=\"updateText(myRangeInput.value)\"><i class=\"fas fa-search text-dark\"></i></button>\r\n        <!--    <hr /><pre>From: {{ fromDate | json }}</pre><pre>To: {{ toDate | json }}</pre>-->\r\n       </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"wrapper\">\r\n  <div class=\"main-tabs\">\r\n    <ngb-tabset [destroyOnHide]=\"false\">\r\n      <ngb-tab>\r\n        <ng-template ngbTabTitle><span class=\"tabIcons trending-icon\"></span><span class=\"tab-title text-dark\" (click)=\"updateText(myRangeInput.value)\">Trending</span></ng-template>\r\n        <ng-template ngbTabContent>\r\n          <app-trending></app-trending>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab>\r\n        <ng-template ngbTabTitle><span class=\"tabIcons verbatim-icon\"></span><span class=\"tab-title text-dark\" (click)=\"updateText(myRangeInput.value)\">Verbatim</span></ng-template>\r\n        <ng-template ngbTabContent>\r\n          <app-verbatim></app-verbatim>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab>\r\n        <ng-template ngbTabTitle><span class=\"tabIcons about-icon\"></span><span class=\"tab-title text-dark\">About This Tool</span></ng-template>\r\n        <ng-template ngbTabContent>\r\n          <p>\r\n            Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n            Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.\r\n          </p>\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tree-map/tree-map.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tree-map/tree-map.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"load && !empty\">\r\n  <div class=\"text-center mt-5 mx-auto px-4 loader\">\r\n    <img src=\"/assets/loader.gif\">\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!load && !empty\">\r\n  <div class=\"card-box sweep-to-right\">\r\n    <div class=\"d-flex justify-content-between align-items-center\">\r\n      <h4 class=\"header-title d-inline-block\">Tree Map</h4>\r\n      <div>\r\n        <label for=\"frameworkOptions\">Select Framework:&nbsp;</label>\r\n        <select (change)=\"filterImpactArea($event.target.value)\">\r\n          <option *ngFor=\"let types of impactTypes\" [value]=\"types\">{{types}}</option>\r\n        </select>\r\n      </div>\r\n\r\n    </div>\r\n    <br/>\r\n    <div id=\"container\">\r\n      <div id=\"treemap\">\r\n      </div>\r\n      <div class=\"controls\">\r\n        <select [(ngModel)]=\"depthOption\" (change)=\"filterChanged($event.target.value)\">\r\n          <option *ngFor=\"let type of filterTypes\" [selected]=\"2\" [value]=\"type.value\">{{type.value}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n      \r\n  </div>\r\n</ng-container>\r\n\r\n \r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/trending/trending.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/trending/trending.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!empty && !loading\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card-box sweep-to-right\" id=\"cloud\">\r\n        <h4 class=\"header-title mb-3 d-inline-block\">Trending Topics</h4>\r\n      \r\n        <div class=\"d-inline-block pull-right\">\r\n          <button type=\"button\" class=\"btn-sm btn rounded-0 m-0 switchView\" (click)= \"getTrendingTopics(); loading=true\" [ngClass]=\"[selectedTopics ? 'selected' : 'notSelected']\">Topics</button>\r\n          <button type=\"button\" class=\"btn-sm btn rounded-0 m-0 switchView\" (click)= \"getHashtags();  loading=true\" [ngClass]=\"[selectedTopics ? 'notSelected' : 'selected']\">Hashtags</button>\r\n        </div>\r\n        <div class=\"btn-group btn-group-vertical zoom-btn\" bis_skin_checked=\"1\">\r\n          <button type=\"button\" class=\"btn zoomIn zoom p-2 m-0 border rounded-top z-index-1\" [disabled]=\"hideZoomIn\" (click)=\"zoom('in')\"><i class=\"fas fa-search-plus text-muted\"></i></button>\r\n          <button type=\"button\" class=\"btn zoomOut zoom p-2 m-0 border rounded-bottom z-index-1\" [disabled]= \"hideZoomOut\" (click)=\"zoom('out')\"><i class=\"fas fa-search-minus text-muted\"></i></button>\r\n        </div>\r\n        <div id=\"trending-topics\" class=\"h-350 d-flex align-items-center\">\r\n          <div *ngIf=\"loading\" class=\"loader mx-auto\">\r\n            <img src=\"/assets/loader.gif\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-7\">\r\n      <div class=\"card-box sweep-to-right\" style=\"padding-bottom: 15px;\">\r\n        <div class=\"d-flex justify-content-between align-items-center\">\r\n          <h4 class=\"header-title mb-3 d-inline-block\">Sentiment Bifurcation</h4>\r\n          <pagination-controls class=\"hide-page-numbers d-inline-block\" directionLinks=\"true\" (pageChange)=\"p = $event\"></pagination-controls>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-12 p-0\">\r\n            <table class=\"table table-hover m-0 table-centered nowrap w-100 sentiment-table\" role=\"grid\">\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th class=\"sorting_asc col-3 w-25\" tabindex=\"0\">Count</th>\r\n                  <th class=\"sorting col-3 w-25\" tabindex=\"0\">Topic Name</th>\r\n                  <th class=\"sorting col-6 w-50\" tabindex=\"0\">Sentiment</th>\r\n                </tr>\r\n              </thead>\r\n\r\n              <tbody>\r\n                <ng-container *ngIf =\"selectedTopics\">\r\n                  <tr role=\"row\" class=\"odd\" *ngFor = \"let i = index ; let sentimentData of listTrendingTopics | paginate: { itemsPerPage: 9, currentPage: p }\" (click)=\"updateClicked(sentimentData.topic + ' topic'); setClickedRow(i)\"  [class.active]=\"i == selectedRow\" style=\"cursor: pointer;\">\r\n                    <td tabindex=\"0\" class=\"d-flex\">\r\n                      <i class=\"fas icon-sm pr-2 my-auto {{sentimentData.sentiment == -1 ? 'fa-arrow-circle-down' : sentimentData.sentiment == 0 ? 'fa-minus-circle' : 'fa-arrow-circle-up' }}\"></i>\r\n                      <b>{{sentimentData.counts}}</b>\r\n                    </td>\r\n                    <td>\r\n                      {{sentimentData.topic}}\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-negative\" role=\"progressbar\" [style.width.%]=\"(sentimentData.negative/sentimentData.counts)*100\" aria-valuenow=\"sentiment.negative\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        <div class=\"progress-bar bg-neutral\" role=\"progressbar\" [style.width.%]=\" (sentimentData.neutral / sentimentData.counts) * 100\" aria-valuenow=\"sentiment.neutral\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        <div class=\"progress-bar bg-positive\" role=\"progressbar\" [style.width.%]=\"(sentimentData.positive / sentimentData.counts) * 100\" aria-valuenow=\"sentiment.positive\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                      </div>\r\n                    </td>\r\n    \r\n                  </tr>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!selectedTopics\">\r\n                  <tr role=\"row\" class=\"odd\" *ngFor = \"let sentimentData of listHashtags | paginate: { itemsPerPage: 9, currentPage: p }\" (click)=\"updateClicked(sentimentData.hashtag + ' hashtag')\" style=\"cursor: pointer;\">\r\n                    <td tabindex=\"0\" class=\"d-flex\">\r\n                      <i class=\"fas icon-sm pr-2 my-auto {{sentimentData.sentiment == -1 ? 'fa-arrow-circle-down' : sentimentData.sentiment == 0 ? 'fa-minus-circle' : 'fa-arrow-circle-up' }}\"></i>\r\n                      <b>{{sentimentData.counts}}</b>\r\n                    </td>\r\n                    <td>\r\n                      {{sentimentData.hashtag}}\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-negative\" role=\"progressbar\" [style.width.%]=\"(sentimentData.negative/sentimentData.counts)*100\" aria-valuenow=\"sentiment.negative\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        <div class=\"progress-bar bg-neutral\" role=\"progressbar\" [style.width.%]=\" (sentimentData.neutral / sentimentData.counts) * 100\" aria-valuenow=\"sentiment.neutral\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        <div class=\"progress-bar bg-positive\" role=\"progressbar\" [style.width.%]=\"(sentimentData.positive / sentimentData.counts) * 100\" aria-valuenow=\"sentiment.positive\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                      </div>\r\n                    </td>\r\n    \r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-5\">\r\n      <app-chart></app-chart>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-12\" >\r\n      <app-tree-map></app-tree-map>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"empty && !loading\">\r\n  <div class=\"text-center mt-5 mx-auto p-4\">\r\n    <img class=\"mb-4 text-center pb-2 \" src=\"/assets/zero_page_icon.svg\">\r\n    <p id=\"emptySearch\"><i class=\"fas fa-exclamation-circle mx-2\"></i> No Data Found. Please Refine your Search</p>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"loading\">\r\n  <div class=\"text-center mt-5 mx-auto px-4 loader\">\r\n    <img src=\"/assets/loader.gif\">\r\n  </div>\r\n</ng-container>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/verbatim/verbatim.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/verbatim/verbatim.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"empty && !loading\">\r\n  <div class=\"text-center mt-5 mx-auto p-4\">\r\n    <img class=\"mb-4 text-center pb-2 \" src=\"/assets/zero_page_icon.svg\">\r\n    <p id=\"emptySearch\"><i class=\"fas fa-exclamation-circle mx-2\"></i> No Data Found. Please Refine your Search</p>\r\n  </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"empty && loading\">\r\n  <div class=\"text-center mt-5 mx-auto px-4 loader\">\r\n    <img src=\"/assets/loader.gif\">\r\n  </div>\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"!empty\">\r\n  <div class=\"page-wrapper chiller-theme\" [ngClass]=\"[isOn === true ? 'toggled' : 'toggle']\">\r\n    <a id=\"show-sidebar\" class=\"btn btn-sm btn-dark\" href=\"#\">\r\n      <i class=\"fas fa-bars\" (click)=\"isOn ? isOn = false : isOn = true\"></i>\r\n    </a>\r\n    <nav id=\"sidebar\" class=\"sidebar-wrapper\">\r\n      <div class=\"sidebar-content\">\r\n        <div class=\"sidebar-brand\">\r\n          <a href=\"#\">Filter Data</a>\r\n          <div id=\"close-sidebar\" (click)=\"isOn=false\">\r\n            <i class=\"far fa-times-circle\"></i>\r\n          </div>\r\n        </div>\r\n        <!-- sidebar-header  -->\r\n        <div class=\"sidebar-search\">\r\n          <div>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control search-menu\" placeholder=\"Search Filter Criteria\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\">\r\n                  <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- sidebar-search  -->\r\n        <div class=\"sidebar-menu\">\r\n          <ul>\r\n            <ngb-accordion>\r\n              <ngb-panel title=\"Impact\" class=\"sidebar-dropdown\">\r\n                <ng-template ngbPanelContent>\r\n                  <div class=\"d-flex align-items-center justify-content-between\">\r\n                    <input type=\"checkbox\" id=\"impact-1\" name=\"impact-1\" value=\"Impact Area Name 1\">\r\n                    <label for=\"impact-1\" class=\"my-0 px-2\"> Impact Area Name 1</label><br>\r\n                    <span class=\"badge badge-pill badge-warning\">1</span>\r\n                  </div>\r\n  \r\n                  <div class=\"d-flex align-items-center justify-content-between\">\r\n                    <input type=\"checkbox\" id=\"impact-2\" name=\"impact-2\" value=\"Impact Area Name 2\">\r\n                    <label for=\"impact-2\" class=\"my-0 px-2\"> Impact Area Name 2</label><br>\r\n                    <span class=\"badge badge-pill badge-warning\">20</span>\r\n                  </div>\r\n  \r\n                  <div class=\"d-flex align-items-center justify-content-between\">\r\n                    <input type=\"checkbox\" id=\"impact-3\" name=\"impact-3\" value=\"Impact Area Name 3\">\r\n                    <label for=\"impact-3\" class=\"my-0 px-2\"> Impact Area Name 3</label><br>\r\n                    <span class=\"badge badge-pill badge-warning\">100</span>\r\n                  </div>\r\n                  <!--use loop here to populate impact areas as checkboxes, note: here each checkbox will have a different id-->\r\n                </ng-template>\r\n              </ngb-panel>\r\n              <ngb-panel title=\"Source\" class=\"sidebar-dropdown\">\r\n                <span _ngcontent-pbe-c111=\"\" class=\"badge badge-pill badge-warning\">New</span>\r\n                <ng-template ngbPanelContent>\r\n                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n                  aute.\r\n                </ng-template>\r\n              </ngb-panel>\r\n              <ngb-panel title=\"Type\" class=\"sidebar-dropdown\">\r\n                \r\n                <ng-template ngbPanelContent>\r\n                  <span _ngcontent-pbe-c111=\"\" class=\"badge badge-pill badge-warning\">New</span>\r\n                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n                  aute.\r\n                </ng-template>\r\n              </ngb-panel>\r\n              <ngb-panel title=\"Sentiment\" class=\"sidebar-dropdown\">\r\n                <ng-template ngbPanelContent>\r\n                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n                  aute.\r\n                </ng-template>\r\n              </ngb-panel>\r\n            </ngb-accordion>\r\n          </ul>\r\n        </div>\r\n        <!-- sidebar-menu  -->\r\n      </div>\r\n      <!-- sidebar-content  -->\r\n    </nav>\r\n    <!-- sidebar-wrapper  -->\r\n    <main class=\"page-content\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"d-flex justify-content-between align-items-center\">\r\n          <div class=\"source-location\">\r\n            Seattle ...\r\n          </div>\r\n          <div>\r\n            <pagination-controls class=\"hide-page-numbers d-inline-block\" directionLinks=\"true\" (pageChange)=\"p = $event\"></pagination-controls>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"card sub-details\">\r\n          <div class=\"row\">\r\n            <span class=\"col-sm-12 location col-md-2\">\r\n              Seattle\r\n            </span>\r\n            <span class=\"col-sm-4 col-md-3 date\">\r\n              date\r\n            </span>\r\n            <span class=\"col-md-4 col-sm-4 sources\">\r\n              from twitter \r\n            </span>\r\n            <span class=\"col-sm-4 col-md-3 metadata text-right\">\r\n              Traffic (What text?)\r\n            </span>\r\n          </div>\r\n          <div class=\"row d-flex align-items-center\">\r\n            <span class=\"col-1 smiley text-center\">\r\n              <i class=\"far fa-frown\"></i>\r\n            </span>\r\n            <span class=\"col-1 icon-comment text-center\">\r\n              <i class=\"far fa-comment-dots\"></i>\r\n            </span>\r\n            <p class=\"col-10 inline-block my-0\">\r\n             random texts\r\n            </p>\r\n          </div>\r\n          <div class=\"row topics col-12 d-flex justify-content-center mt-3\">\r\n              <span class=\"pink\">\r\n                society \r\n              </span>\r\n              <span class=\"blue\">\r\n                diversity\r\n              </span>\r\n              <span class=\"red\">\r\n                inclusion\r\n              </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"card sub-details threaded\">\r\n          <div class=\"row\">\r\n            <span class=\"col-sm-12 location col-md-2\">\r\n              Seattle\r\n            </span>\r\n            <span class=\"col-sm-4 col-md-3 date\">\r\n              date\r\n            </span>\r\n            <span class=\"col-md-4 col-sm-4 sources\">\r\n              from twitter \r\n            </span>\r\n            <span class=\"col-sm-4 col-md-3 metadata text-right\">\r\n              Traffic (What text?)\r\n            </span>\r\n          </div>\r\n          <div class=\"row d-flex align-items-center\">\r\n            <span class=\"col-1 smiley text-center\">\r\n              <i class=\"far fa-frown\"></i>\r\n            </span>\r\n            <span class=\"col-1 icon-comment text-center\">\r\n              <i class=\"far fa-comment-dots\"></i>\r\n            </span>\r\n            <p class=\"col-10 inline-block my-0\">\r\n             random texts\r\n            </p>\r\n          </div>\r\n          <div class=\"row topics col-12 d-flex justify-content-center mt-3\">\r\n              <span class=\"pink\">\r\n                society \r\n              </span>\r\n              <span class=\"blue\">\r\n                diversity\r\n              </span>\r\n              <span class=\"red\">\r\n                inclusion\r\n              </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"card sub-details threaded\">\r\n          <div class=\"row\">\r\n            <span class=\"col-sm-12 location col-md-2\">\r\n              Seattle\r\n            </span>\r\n            <span class=\"col-sm-4 col-md-3 date\">\r\n              date\r\n            </span>\r\n            <span class=\"col-md-4 col-sm-4 sources\">\r\n              from twitter \r\n            </span>\r\n            <span class=\"col-sm-4 col-md-3 metadata text-right\">\r\n              Traffic (What text?)\r\n            </span>\r\n          </div>\r\n          <div class=\"row d-flex align-items-center\">\r\n            <span class=\"col-1 smiley text-center\">\r\n              <i class=\"far fa-frown\"></i>\r\n            </span>\r\n            <span class=\"col-1 icon-comment text-center\">\r\n              <i class=\"far fa-comment-dots\"></i>\r\n            </span>\r\n            <p class=\"col-10 inline-block my-0\">\r\n             random texts\r\n            </p>\r\n          </div>\r\n          <div class=\"row topics col-12 d-flex justify-content-center mt-3\">\r\n              <span class=\"pink\">\r\n                society \r\n              </span>\r\n              <span class=\"blue\">\r\n                diversity\r\n              </span>\r\n              <span class=\"red\">\r\n                inclusion\r\n              </span>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div *ngFor = \"let discourse of discourseDetails | paginate: { itemsPerPage: 8, currentPage: p }\">\r\n          <div class=\"card sub-details\">\r\n            <div class=\"row\">\r\n              <span class=\"col-sm-12 location col-md-2\">\r\n                {{discourse.region}}\r\n              </span>\r\n              <span class=\"col-sm-4 col-md-3 date\">\r\n                {{discourse.created_time}}\r\n              </span>\r\n              <span class=\"col-md-4 col-sm-4 sources\">\r\n                From {{discourse.platform_desc}}\r\n              </span>\r\n              <span class=\"col-sm-4 col-md-3 metadata text-right\">\r\n                Traffic (What text?)\r\n              </span>\r\n            </div>\r\n            <div class=\"row d-flex align-items-center\">\r\n              <span class=\"col-1 smiley text-center\">\r\n                <i class=\"far {{discourse.sentiment == -1 ? 'fa-frown' : discourse.sentiment == 0 ? 'fa-meh' : 'fa-smile' }}\"></i>\r\n    \r\n              </span>\r\n              <span class=\"col-1 icon-comment text-center\">\r\n                <i class=\"far fa-comment-dots\"></i>\r\n              </span>\r\n              <p class=\"col-10 inline-block my-0\" ngbTooltip=\"{{discourse.comment}}\">\r\n                {{discourse.comment}} \r\n              </p>\r\n            </div>\r\n            <div class=\"row topics col-12 d-flex justify-content-center mt-3\">\r\n                <span class=\"pink\">\r\n                  {{discourse.level0}}\r\n                </span>\r\n                <span class=\"blue\">\r\n                  {{discourse.level1}}\r\n                </span>\r\n                <span class=\"red\">\r\n                  {{discourse.level2}}\r\n                </span>\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n   \r\n      </div>\r\n  \r\n    </main>\r\n    <!-- page-content\" -->\r\n  </div>\r\n</ng-container>\r\n\r\n"

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NewImpact';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngb_date_fr_parser_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngb-date-fr-parser-formatter */ "./src/app/ngb-date-fr-parser-formatter.ts");
/* harmony import */ var _ngb_UTC_string_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngb-UTC-string-adapter */ "./src/app/ngb-UTC-string-adapter.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _trending_trending_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trending/trending.component */ "./src/app/trending/trending.component.ts");
/* harmony import */ var _verbatim_verbatim_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verbatim/verbatim.component */ "./src/app/verbatim/verbatim.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tree-map/tree-map.component */ "./src/app/tree-map/tree-map.component.ts");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm5/ngx-chips.js");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _trending_trending_component__WEBPACK_IMPORTED_MODULE_9__["TrendingComponent"],
                _verbatim_verbatim_component__WEBPACK_IMPORTED_MODULE_10__["VerbatimComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_12__["ChartComponent"],
                _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_13__["TreeMapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_14__["TagInputModule"],
                _graphql_module__WEBPACK_IMPORTED_MODULE_15__["GraphQLModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"]
            ],
            exports: [],
            providers: [
                {
                    provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDateParserFormatter"],
                    useClass: _ngb_date_fr_parser_formatter__WEBPACK_IMPORTED_MODULE_4__["NgbDateFRParserFormatter"]
                },
                {
                    provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDateAdapter"],
                    useClass: _ngb_UTC_string_adapter__WEBPACK_IMPORTED_MODULE_5__["NgbUTCStringAdapter"]
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart/chart.component.css":
/*!*******************************************!*\
  !*** ./src/app/chart/chart.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././data-transfer.service */ "./src/app/data-transfer.service.ts");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/pubsub */ "./node_modules/@aws-amplify/pubsub/lib-esm/index.js");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../aws-exports */ "./src/aws-exports.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var d3plus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3plus */ "./node_modules/d3plus/es/index.js");







aws_amplify__WEBPACK_IMPORTED_MODULE_7__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_6__["default"]);
_aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_5__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_6__["default"]);


var ChartComponent = /** @class */ (function () {
    function ChartComponent(data, apollo) {
        this.data = data;
        this.apollo = apollo;
        this.text = '';
        this.dates = [];
        this.start = String;
        this.end = String;
        this.empty = true;
        this.topicsChart = [];
        this.hashtagChart = [];
    }
    ChartComponent.prototype.plotChart = function (chartData) {
        document.getElementById('chart').innerHTML = '';
        function legendtext(d) {
            if (d === -1)
                return "Negative";
            if (d === 0)
                return "Neutral";
            if (d === 1)
                return "Positive";
        }
        function assignColor(d) {
            if (d === -1)
                return "#4477AA";
            if (d === 0)
                return "#E69F02";
            if (d === 1)
                return "#429E73";
            return "grey";
        }
        new d3plus__WEBPACK_IMPORTED_MODULE_8__["LinePlot"]()
            .config({
            data: chartData,
            groupBy: "sentiment",
            x: "date",
            y: "counts",
            lineMarkers: true,
            lineMarkerConfig: {
                fill: "red"
            },
            legendConfig: {
                label: function (d) {
                    return legendtext(d.sentiment);
                }
            },
            shapeConfig: {
                Line: {
                    stroke: function (d) {
                        return assignColor(d.sentiment);
                    }
                }
            },
            xConfig: {
                title: "Dates",
                labels: [],
            },
            legendTooltip: {
                tbody: []
            },
            tooltipConfig: {
                title: function (d) {
                    var a = d.sentiment === -1 ? 'Negative' : d.sentiment === 0 ? 'Neutral' : 'Positive';
                    return "Sentiment Count - " + d["counts"] + ' ' + a;
                },
                tbody: [
                    ["Date: ", function (d) { return d["date"]; }]
                ]
            },
            timeline: "date",
            select: "#chart",
        })
            .render();
        this.empty = false;
    };
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empty = true;
        this.data.share.subscribe(function (x) {
            if (_this.text != x) {
                _this.text = x;
                _this.dates = _this.text.split(' to ');
                _this.start = _this.dates[0];
                _this.end = _this.dates[1];
            }
        });
        this.data.sharedData.subscribe(function (y) {
            if (_this.selectedData != y) {
                _this.selectedData = y;
                _this.selectedData = _this.selectedData.split(' ');
                _this.searchValue = _this.selectedData[0];
                _this.type = _this.selectedData[1];
                _this.type === 'topic' ? _this.getTopicsChart() : _this.getHashtagsChart();
            }
        });
    };
    ChartComponent.prototype.getTopicsChart = function () {
        var _this = this;
        document.getElementById('chart').innerHTML = '';
        this.apollo
            .query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n      query discourseTrendingTopics($start: String!, $end: String!, $region: String!, $topic:String!) {\n        discourseTrendingTopics(start: $start, end: $end, region: $region, topic: $topic){\n            counts\n            sentiment\t\n            topic\n            date\n          }\n        }\n      "], ["\n      query discourseTrendingTopics($start: String!, $end: String!, $region: String!, $topic:String!) {\n        discourseTrendingTopics(start: $start, end: $end, region: $region, topic: $topic){\n            counts\n            sentiment\t\n            topic\n            date\n          }\n        }\n      "]))),
            variables: {
                start: this.start,
                end: this.end,
                region: "King County",
                topic: this.searchValue
            }
        })
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.topicsChart = data && data.discourseTrendingTopics;
            _this.plotChart(_this.topicsChart);
        }, function (error) {
            console.log("error is: ", error);
        });
    };
    ChartComponent.prototype.getHashtagsChart = function () {
        var _this = this;
        document.getElementById('chart').innerHTML = '';
        this.apollo
            .query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n      query hashtagMaster($start: String!, $end: String!, $region: String!, $topic:String!) {\n        hashtagMaster(start: $start, end: $end, region: $region, topic: $topic){\n            counts\n            sentiment\n            topic\n            date\n          }\n        }\n      "], ["\n      query hashtagMaster($start: String!, $end: String!, $region: String!, $topic:String!) {\n        hashtagMaster(start: $start, end: $end, region: $region, topic: $topic){\n            counts\n            sentiment\n            topic\n            date\n          }\n        }\n      "]))),
            variables: {
                start: this.start,
                end: this.end,
                region: "King County",
                topic: this.searchValue
            }
        })
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.hashtagChart = data && data.hashtagMaster;
            _this.plotChart(_this.hashtagChart);
        }, function (error) {
            console.log("error is: ", error);
        });
    };
    ChartComponent.ctorParameters = function () { return [
        { type: _data_transfer_service__WEBPACK_IMPORTED_MODULE_2__["DataTransferService"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"] }
    ]; };
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! raw-loader!./chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/chart/chart.component.css")]
        })
    ], ChartComponent);
    return ChartComponent;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/data-transfer.service.ts":
/*!******************************************!*\
  !*** ./src/app/data-transfer.service.ts ***!
  \******************************************/
/*! exports provided: DataTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferService", function() { return DataTransferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataTransferService = /** @class */ (function () {
    function DataTransferService() {
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.share = this.content.asObservable();
        //sharing sentiment bifurcation data to chart component
        this.clickedItem = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.sharedData = this.clickedItem.asObservable();
    }
    DataTransferService.prototype.updateData = function (text) {
        this.content.next(text);
    };
    DataTransferService.prototype.updateClickedData = function (selectedData) {
        this.clickedItem.next(selectedData);
    };
    DataTransferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataTransferService);
    return DataTransferService;
}());



/***/ }),

/***/ "./src/app/graphql.module.ts":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ngApolloLinkHttp.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-env */ "./node_modules/apollo-env/lib/index.js");
/* harmony import */ var apollo_env__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_env__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../aws-exports */ "./src/aws-exports.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");








aws_amplify__WEBPACK_IMPORTED_MODULE_6__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_7__["default"]);

var uri = 'https://hv64oxco7naipotbgrduo7lwla.appsync-api.us-west-2.amazonaws.com/graphql';
function createApollo(httpLink) {
    var http = httpLink.create({ uri: uri });
    var authLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_8__["ApolloLink"](function (operation, forward) {
        // Use the setContext method to set the HTTP headers.
        operation.setContext({
            headers: {
                "X-Api-Key": "da2-zy5mhx7dlzaxdg4b2gw6vi6wya"
            },
            fetch: apollo_env__WEBPACK_IMPORTED_MODULE_5__["fetch"]
        });
        return forward(operation);
    });
    return {
        link: authLink.concat(http),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]()
    };
}
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule() {
    }
    GraphQLModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLinkModule"]],
            providers: [
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
                    useFactory: createApollo,
                    deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
                },
            ],
        })
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin: 0;\r\n}\r\n\r\n#top-nav {\r\n  background-color: #2098d1;\r\n  position: fixed;\r\n  padding: 55px 0px 13px 0px;\r\n  z-index: 1000;\r\n}\r\n\r\n.navbar {\r\n  overflow: hidden;\r\n  width: 100%;\r\n  background-color: #414243;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 70px;\r\n  z-index: 100;\r\n  padding: 0px 80px;\r\n}\r\n\r\n.navbar a {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.navbar a:hover {\r\n  background: #ddd;\r\n  color: black;\r\n}\r\n\r\n.wrapper {\r\n  margin-top: 60px;\r\n}\r\n\r\n.nav.nav-tabs {\r\n    position: relative;\r\n}\r\n\r\n.nav-item a{\r\n    padding-left: 0px;\r\n}\r\n\r\n/*DateTimePopup Css Starts*/\r\n\r\n.custom-day {\r\n  text-align: center;\r\n  padding: 0.185rem 0.25rem;\r\n  display: inline-block;\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n\r\n.custom-day.focused {\r\n    background-color: #e6e6e6;\r\n  }\r\n\r\n.custom-day.range, .custom-day:hover {\r\n    background-color: rgb(2, 117, 216);\r\n    color: white;\r\n  }\r\n\r\n.custom-day.faded {\r\n    background-color: rgba(2, 117, 216, 0.5);\r\n  }\r\n\r\n/*DateTimePopup CSS ends*/\r\n\r\n@media (min-width: 1200px) {\r\n  .container-fluid {\r\n    max-width: 90%;\r\n  }\r\n}\r\n\r\nimg.logo {\r\n  width: 28em;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  img.logo {\r\n    width: 20em;\r\n  }\r\n}\r\n\r\n.tabIcons {\r\n  width: 22px;\r\n  height: 22px;\r\n  margin: auto;\r\n  display: block;\r\n  position: relative!important;\r\n  background-size: cover;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.trending-icon {\r\n  background-image: url(\"/assets/trending.svg\");\r\n}\r\n\r\n.verbatim-icon {\r\n  background-image: url(\"/assets/verbatim.svg\");\r\n}\r\n\r\n.about-icon {\r\n  background-image: url(\"/assets/about.svg\") !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUEsMkJBQTJCOztBQUMzQjtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUU7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsWUFBWTtFQUNkOztBQUVBO0lBQ0Usd0NBQXdDO0VBQzFDOztBQUVGLHlCQUF5Qjs7QUFFekI7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxxREFBcUQ7QUFDdkQiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiN0b3AtbmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5OGQxO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nOiA1NXB4IDBweCAxM3B4IDBweDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbi5uYXZiYXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDI0MztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwYWRkaW5nOiAwcHggODBweDtcclxufVxyXG5cclxuLm5hdmJhciBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5uYXZiYXIgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4ubmF2Lm5hdi10YWJzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5hdi1pdGVtIGF7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLypEYXRlVGltZVBvcHVwIENzcyBTdGFydHMqL1xyXG4uY3VzdG9tLWRheSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMnJlbTtcclxufVxyXG5cclxuICAuY3VzdG9tLWRheS5mb2N1c2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWRheS5yYW5nZSwgLmN1c3RvbS1kYXk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tZGF5LmZhZGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XHJcbiAgfVxyXG5cclxuLypEYXRlVGltZVBvcHVwIENTUyBlbmRzKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG5cclxuaW1nLmxvZ28ge1xyXG4gIHdpZHRoOiAyOGVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBpbWcubG9nbyB7XHJcbiAgICB3aWR0aDogMjBlbTtcclxuICB9XHJcbn1cclxuXHJcbi50YWJJY29ucyB7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmUhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4udHJlbmRpbmctaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90cmVuZGluZy5zdmdcIik7XHJcbn1cclxuXHJcbi52ZXJiYXRpbS1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3ZlcmJhdGltLnN2Z1wiKTtcclxufVxyXG5cclxuLmFib3V0LWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYWJvdXQuc3ZnXCIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././data-transfer.service */ "./src/app/data-transfer.service.ts");





var now = new Date();
var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(config, data, element, renderer, _parserFormatter, calendar) {
        var _this = this;
        this.config = config;
        this.data = data;
        this.renderer = renderer;
        this._parserFormatter = _parserFormatter;
        this.calendar = calendar;
        this.listImpactAreas = [];
        this.loading = true;
        this.test = [];
        this.today = this.calendar.getToday();
        this.isHovered = function (date) {
            return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate);
        };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        this.disabled = false;
        var current = new Date();
        config.minDate = { year: 2000, month: 1, day: 1 };
        this.maxDate = { year: current.getFullYear(), month: current.getMonth(), day: current.getDate() };
        config.outsideDays = "hidden";
    }
    Object.defineProperty(HeaderComponent.prototype, "week", {
        set: function (value) {
            this.onChange({ year: this.fromDate.year, week: value });
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.ngAfterContentInit = function () {
        this.text = this.calendar.getToday();
        this.getToday(this.text, 'getinitialdate');
        this.text = this.initialDate;
        this.updateText(this.text);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.updateText = function (text) {
        this.data.updateData(text);
    };
    HeaderComponent.prototype.getToday = function (date, initialData) {
        var parsed = '';
        var fromDate = new Date(date.year + "-" + date.month + "-" + date.day);
        var time = fromDate.getDay() ? fromDate.getDay() - 2 : 6;
        fromDate = new Date(fromDate.getTime() - time * 24 * 60 * 60 * 1000);
        this.fromDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](fromDate.getFullYear(), fromDate.getMonth() + 1, fromDate.getDate());
        var toDate = new Date(fromDate.getTime() - 6 * 24 * 60 * 60 * 1000);
        this.toDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](toDate.getFullYear(), toDate.getMonth() + 1, toDate.getDate());
        parsed += this._parserFormatter.format(this.toDate) + ' to ' + this._parserFormatter.format(this.fromDate);
        if (initialData != '') {
            this.initialDate = parsed;
        }
        else
            this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', parsed);
    };
    HeaderComponent.prototype.getWeek = function (date) {
        var fromDate = new Date(date.year + "-" + date.month + "-" + date.day);
        var time = fromDate.getDay() ? fromDate.getDay() - 1 : 6;
        fromDate = new Date(fromDate.getTime() - time * 24 * 60 * 60 * 1000);
        this.fromDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](fromDate.getFullYear(), fromDate.getMonth() + 1, fromDate.getDate());
        var toDate = new Date(fromDate.getTime() + 6 * 24 * 60 * 60 * 1000);
        this.toDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](toDate.getFullYear(), toDate.getMonth() + 1, toDate.getDate());
        var weekparsed = '';
        weekparsed += this._parserFormatter.format(this.fromDate);
        weekparsed += ' to ' + this._parserFormatter.format(this.toDate);
        this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', weekparsed);
    };
    HeaderComponent.prototype.onDateSelection = function (date) {
        var parsed = '';
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
            this.input.close();
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
        if (this.toDate === null) {
            parsed += this._parserFormatter.format(this.fromDate) + ' to ';
        }
        if (this.fromDate) {
            parsed += this._parserFormatter.format(this.fromDate);
        }
        if (this.toDate) {
            parsed += ' to ' + this._parserFormatter.format(this.toDate);
        }
        this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', parsed);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerConfig"] },
        { type: _data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("d", { static: false })
    ], HeaderComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], { static: false })
    ], HeaderComponent.prototype, "datePick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myRangeInput', { static: false })
    ], HeaderComponent.prototype, "myRangeInput", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ngb-UTC-string-adapter.ts":
/*!*******************************************!*\
  !*** ./src/app/ngb-UTC-string-adapter.ts ***!
  \*******************************************/
/*! exports provided: NgbDateAdapter, NgbUTCStringAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function() { return NgbDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbUTCStringAdapter", function() { return NgbUTCStringAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Abstract type serving as a DI token for the service converting from your application Date model to internal
 * NgbDateStruct model.
 * A default implementation converting from and to NgbDateStruct is provided for retro-compatibility,
 * but you can provide another implementation to use an alternative format, ie for using with native Date Object.
 */
var NgbDateAdapter = /** @class */ (function () {
    function NgbDateAdapter() {
    }
    NgbDateAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NgbDateAdapter);
    return NgbDateAdapter;
}());

var NgbUTCStringAdapter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgbUTCStringAdapter, _super);
    function NgbUTCStringAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param  {NgbDateStruct} value
     * @return {NgbDateStruct}
     */
    NgbUTCStringAdapter.prototype.fromModel = function (date) {
        return (date && date.year && date.month && date.day) ? { year: date.year, month: date.month, day: date.day } : null;
    };
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param  {NgbDateStruct} value
     * @return {NgbDateStruct}
     */
    NgbUTCStringAdapter.prototype.toModel = function (date) {
        return (date && date.year && date.month && date.day) ? { year: date.year, month: date.month, day: date.day } : null;
    };
    NgbUTCStringAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NgbUTCStringAdapter);
    return NgbUTCStringAdapter;
}(NgbDateAdapter));



/***/ }),

/***/ "./src/app/ngb-date-fr-parser-formatter.ts":
/*!*************************************************!*\
  !*** ./src/app/ngb-date-fr-parser-formatter.ts ***!
  \*************************************************/
/*! exports provided: NgbDateFRParserFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateFRParserFormatter", function() { return NgbDateFRParserFormatter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return "";
    }
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt("" + value, 10);
}
var NgbDateFRParserFormatter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgbDateFRParserFormatter, _super);
    function NgbDateFRParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateFRParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split("/");
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0]) };
            }
        }
        return null;
    };
    NgbDateFRParserFormatter.prototype.format = function (date) {
        var stringDate = "";
        if (date) {
            stringDate += date.year + "-";
            stringDate += isNumber(date.month) ? padNumber(date.month) + "-" : "";
            stringDate += isNumber(date.day) ? padNumber(date.day) : "";
        }
        return stringDate;
    };
    NgbDateFRParserFormatter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NgbDateFRParserFormatter);
    return NgbDateFRParserFormatter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"]));



/***/ }),

/***/ "./src/app/tree-map/tree-map.component.css":
/*!*************************************************!*\
  !*** ./src/app/tree-map/tree-map.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    position: relative;\r\n    height: 350px;\r\n    margin-bottom: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n#treemap {\r\n    margin-bottom: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS1tYXAvdHJlZS1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RyZWUtbWFwL3RyZWUtbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiN0cmVlbWFwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tree-map/tree-map.component.ts":
/*!************************************************!*\
  !*** ./src/app/tree-map/tree-map.component.ts ***!
  \************************************************/
/*! exports provided: TreeMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeMapComponent", function() { return TreeMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3plus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3plus */ "./node_modules/d3plus/es/index.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/pubsub */ "./node_modules/@aws-amplify/pubsub/lib-esm/index.js");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../aws-exports */ "./src/aws-exports.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _data_transfer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .././data-transfer.service */ "./src/app/data-transfer.service.ts");








aws_amplify__WEBPACK_IMPORTED_MODULE_7__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_6__["default"]);
_aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_5__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_6__["default"]);


var TreeMapComponent = /** @class */ (function () {
    function TreeMapComponent(apollo, data) {
        this.apollo = apollo;
        this.data = data;
        this.load = true;
        this.empty = false;
        this.start = String;
        this.end = String;
        this.text = '';
        this.dates = [];
        this.hierarchy = ["level0", "level1", "level2", "tag"];
        this.impactTypes = [];
        this.depthOption = 2;
        this.filterTypes = [
            { value: 0 },
            { value: 1 },
            { value: 2 },
            { value: 3 }
        ];
    }
    TreeMapComponent.prototype.buildTreemap = function () {
        var _this = this;
        this.treemapdata = [];
        this.apollo
            .query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n          query listImpactTree($start: String!, $end: String!, $region: String!) {\n            listImpactTree(start: $start, end: $end, region: $region){\n              discourse_id\n              region\n              date\n              tag\n              level2\n              level1\n              level0\n              source_ontology\n              value\n            }\n          }\n        "], ["\n          query listImpactTree($start: String!, $end: String!, $region: String!) {\n            listImpactTree(start: $start, end: $end, region: $region){\n              discourse_id\n              region\n              date\n              tag\n              level2\n              level1\n              level0\n              source_ontology\n              value\n            }\n          }\n        "]))),
            variables: {
                start: this.start,
                end: this.end,
                region: "King County"
            }
        })
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.treemapdata = data && data.listImpactTree;
            _this.load = false;
            $('#treemap').find('svg').remove();
            if (_this.treemapdata.length != 0) {
                _this.empty = false;
                _this.impactTypes = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](new Set(data.listImpactTree.map(function (item) { return item.source_ontology; })));
                _this.impactTypes.splice(0, 0, 'Select All');
                setTimeout(function () { return _this.makevisualization(_this.treemapdata, _this.depthOption); }, 350);
            }
            else
                _this.empty = true;
        }, function (error) {
            _this.load = false;
            _this.error = error;
            console.log("error is: ", error);
        });
    };
    TreeMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.share.subscribe(function (x) {
            if (_this.text != x) {
                _this.load = true;
                _this.text = x;
                _this.dates = _this.text.split(' to ');
                _this.start = _this.dates[0];
                _this.end = _this.dates[1];
                _this.load = true;
                _this.buildTreemap();
            }
        });
    };
    TreeMapComponent.prototype.makevisualization = function (visualizationData, depthOption) {
        depthOption = parseInt(depthOption);
        var visualization = new d3plus__WEBPACK_IMPORTED_MODULE_2__["Treemap"]()
            .data(visualizationData)
            .select("#treemap")
            .groupBy(this.hierarchy)
            .depth(depthOption)
            .legend(false)
            .render();
        this.filterChanged = function (event) {
            depthOption = parseInt(event);
            visualization.depth(depthOption).render();
        };
    };
    TreeMapComponent.prototype.filterX = function (treemapdata, event) {
        return treemapdata.filter(function (o) {
            return Object.keys(o).some(function (k) { return o[k].toString().toLowerCase().includes(event.toString().toLowerCase()); });
        });
    };
    TreeMapComponent.prototype.filterImpactArea = function (event) {
        $('#treemap').find('svg').remove();
        if (event === 'Select All') {
            this.makevisualization(this.treemapdata, this.depthOption);
        }
        else {
            var newData = this.filterX(this.treemapdata, event);
            this.makevisualization(newData, this.depthOption);
        }
    };
    TreeMapComponent.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"] },
        { type: _data_transfer_service__WEBPACK_IMPORTED_MODULE_8__["DataTransferService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('test', { static: false })
    ], TreeMapComponent.prototype, "test", void 0);
    TreeMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tree-map',
            template: __webpack_require__(/*! raw-loader!./tree-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/tree-map/tree-map.component.html"),
            styles: [__webpack_require__(/*! ./tree-map.component.css */ "./src/app/tree-map/tree-map.component.css")]
        })
    ], TreeMapComponent);
    return TreeMapComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/trending/trending.component.css":
/*!*************************************************!*\
  !*** ./src/app/trending/trending.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sentiment-table td, .sentiment-table th {\r\n  padding: 10px 0px;\r\n  vertical-align: top;\r\n  border-top: 1px solid #dee2e6;\r\n  font-size: 12px;\r\n  vertical-align:middle;\r\n}\r\n.progress{\r\n    height: 10px;\r\n}\r\n.icon-sm {\r\n  font-size: 15px;\r\n}\r\n.switchView {\r\n    display: inline-block;\r\n    padding: 3px 12px;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    line-height: 24px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    border: 1px solid transparent;\r\n    background-color: #ffffff;\r\n    color: #b3a7a7;\r\n    border-color: #cccccc;\r\n    *border: 0;\r\n    *background: #e6e6e6;\r\n    border-radius: 4px;\r\n    *margin-left: .3em;\r\n    box-shadow: inset 0 -2px 0px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.5);\r\n  }\r\n.switchView.selected {\r\n    outline: none !important;\r\n    color: #666666;\r\n    background-image: none;\r\n    box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);\r\n}\r\n.switchView.btn:hover{\r\n  outline: none !important;\r\n  color: #666666;\r\n  background-image: none;\r\n  box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);\r\n}\r\n#emptySearch {\r\n  color: #000;\r\n  font-size: 15px;\r\n  padding: 2px 10px;\r\n  margin: 10px;\r\n}\r\n.smalltooltip .tooltip-inner {\r\n  font-size: 10px !important;\r\n}\r\n#trending-topics {\r\n  position: relative;\r\n}\r\n.zoom-btn {\r\n  position: absolute;\r\n  right: 25px;\r\n  top: 65px;\r\n}\r\n.sentiment-table tr.active {\r\n  box-shadow: 0px 3px 21px 0 rgba(44, 41, 84, .48);\r\n}\r\n.bg-negative {\r\n  background-color: #4477AA;\r\n}\r\n.bg-neutral {\r\n  background-color: #E69F02;\r\n}\r\n.bg-positive {\r\n  background-color: #429E73;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlbmRpbmcvdHJlbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDRTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxxQkFBcUI7S0FDckIsU0FBVTtLQUNWLG1CQUFvQjtJQUdwQixrQkFBa0I7S0FDbEIsaUJBQWtCO0lBR2xCLGdGQUFnRjtFQUNsRjtBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsNkNBQTZDO0FBQ2pEO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYO0FBRUE7RUFDRSxnREFBZ0Q7QUFDbEQ7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC90cmVuZGluZy90cmVuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbnRpbWVudC10YWJsZSB0ZCwgLnNlbnRpbWVudC10YWJsZSB0aCB7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcbi5wcm9ncmVzc3tcclxuICAgIGhlaWdodDogMTBweDtcclxufVxyXG5cclxuLmljb24tc20ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4gIC5zd2l0Y2hWaWV3IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDNweCAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjYjNhN2E3O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgKmJvcmRlcjogMDtcclxuICAgICpiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICptYXJnaW4tbGVmdDogLjNlbTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDBweCByZ2JhKDAsMCwwLC4xNSksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwcHggcmdiYSgwLDAsMCwuMTUpLCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDBweCByZ2JhKDAsMCwwLC4xNSksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuNSk7XHJcbiAgfVxyXG5cclxuICAuc3dpdGNoVmlldy5zZWxlY3RlZCB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwwLjEyNSk7XHJcbn1cclxuICBcclxuLnN3aXRjaFZpZXcuYnRuOmhvdmVye1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzY2NjY2NjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsMCwwLDAuMTI1KTtcclxufVxyXG4jZW1wdHlTZWFyY2gge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5zbWFsbHRvb2x0aXAgLnRvb2x0aXAtaW5uZXIge1xyXG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jdHJlbmRpbmctdG9waWNzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi56b29tLWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIHRvcDogNjVweDtcclxufVxyXG5cclxuLnNlbnRpbWVudC10YWJsZSB0ci5hY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMjFweCAwIHJnYmEoNDQsIDQxLCA4NCwgLjQ4KTtcclxufVxyXG5cclxuLmJnLW5lZ2F0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3N0FBO1xyXG59XHJcblxyXG4uYmctbmV1dHJhbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2OUYwMjtcclxufVxyXG5cclxuLmJnLXBvc2l0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI5RTczO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/trending/trending.component.ts":
/*!************************************************!*\
  !*** ./src/app/trending/trending.component.ts ***!
  \************************************************/
/*! exports provided: TrendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingComponent", function() { return TrendingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././data-transfer.service */ "./src/app/data-transfer.service.ts");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/pubsub */ "./node_modules/@aws-amplify/pubsub/lib-esm/index.js");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../aws-exports */ "./src/aws-exports.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");




// import { pluck } from 'rxjs/operators';




aws_amplify__WEBPACK_IMPORTED_MODULE_8__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_7__["default"]);
_aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_6__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_7__["default"]);

var TrendingComponent = /** @class */ (function () {
    function TrendingComponent(data, calendar, element, renderer, apollo) {
        this.data = data;
        this.calendar = calendar;
        this.renderer = renderer;
        this.apollo = apollo;
        this.loading = true;
        this.topics = [];
        this.selectedTopics = true;
        this.selectedRow = 0;
        this.start = String;
        this.end = String;
        this.listHashtags = [];
        this.listTrendingTopics = [];
        this.currentZoom = 3;
        this.hideZoomOut = false;
        this.hideZoomIn = false;
        this.p = 1;
        this.empty = false;
        //Variables for assigning weight to tag cloud:
        this.minWeight = 1;
        this.maxWeight = 20;
        this.text = '';
        this.dates = [];
        this.finalDates = [];
        this.setClickedRow = function (index) {
            this.selectedRow = index;
        };
    }
    TrendingComponent.prototype.ngOnChanges = function () {
        this.getTrendingTopics();
    };
    TrendingComponent.prototype.functionGetTrendingData = function (topicHashtag) {
        var finalTrending = [];
        var length = topicHashtag.length;
        var MaxViewed = topicHashtag[0].counts;
        var MinViewed = topicHashtag[length - 1].counts;
        if (MaxViewed != MinViewed) {
            for (var counts in topicHashtag) {
                var fontsize = (this.minWeight + ((topicHashtag[counts].counts - MinViewed) * (this.maxWeight - this.minWeight) / (MaxViewed - MinViewed)));
                if (topicHashtag[0].hasOwnProperty("hashtag")) {
                    finalTrending.push({
                        text: topicHashtag[counts].hashtag,
                        weight: Math.round(fontsize),
                    });
                }
                else {
                    finalTrending.push({
                        text: topicHashtag[counts].topic,
                        weight: Math.round(fontsize),
                        classPattern: 'w{20}',
                    });
                }
            }
        }
        setTimeout(function () {
            this.loading = false;
            $("#trending-topics").jQCloud(finalTrending);
            500;
        });
    };
    TrendingComponent.prototype.getTrendingTopics = function () {
        var _this = this;
        this.loading = true;
        $("#trending-topics").find('span').remove();
        this.listTrendingTopics = [];
        this.selectedTopics = true;
        this.apollo
            .query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n        query listTrendingTopicsMaster($start: String!, $end: String!, $region: String!) {\n            listTrendingTopicsMaster(start: $start, end: $end, region: $region){\n              topic\n              counts\n              sentiment\n              positive\n              negative\n              neutral\n            }\n          }\n        "], ["\n        query listTrendingTopicsMaster($start: String!, $end: String!, $region: String!) {\n            listTrendingTopicsMaster(start: $start, end: $end, region: $region){\n              topic\n              counts\n              sentiment\n              positive\n              negative\n              neutral\n            }\n          }\n        "]))),
            variables: {
                start: this.start,
                end: this.end,
                region: "King County"
            }
        })
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.listTrendingTopics = data && data.listTrendingTopicsMaster;
            _this.listTrendingTopics.length === 0 ? _this.empty = true : _this.empty = false;
            _this.loading = false;
        }, function (error) {
            _this.error = error;
            console.log("error is: ", error);
        }).add(function () {
            if (_this.listTrendingTopics.length != 0) {
                _this.empty = false;
                _this.data.updateClickedData(_this.listTrendingTopics[0].topic + ' topic');
                _this.functionGetTrendingData(_this.listTrendingTopics);
            }
        });
    };
    TrendingComponent.prototype.getHashtags = function () {
        var _this = this;
        this.loading = true;
        $("#trending-topics").find('span').remove();
        this.selectedTopics = false;
        this.listHashtags = [];
        this.apollo
            .query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n            query listTrendingHashtags($start: String!, $end: String!, $region: String!) {\n              listTrendingHashtags (start: $start, end: $end, region: $region){\n              counts\n              sentiment\n              negative\n              neutral\n              positive\n              hashtag\n              start_date\n            }\n          }\n        "], ["\n            query listTrendingHashtags($start: String!, $end: String!, $region: String!) {\n              listTrendingHashtags (start: $start, end: $end, region: $region){\n              counts\n              sentiment\n              negative\n              neutral\n              positive\n              hashtag\n              start_date\n            }\n          }\n        "]))),
            variables: {
                start: this.start,
                end: this.end,
                region: "King County"
            }
        })
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.listHashtags = data && data.listTrendingHashtags;
            _this.listTrendingTopics.length === 0 ? _this.empty = true : _this.empty = false;
            _this.loading = false;
        }, function (error) {
            _this.error = error;
            console.log("error is: ", error);
        }).add(function () {
            if (_this.listHashtags.length != 0) {
                _this.empty = false;
                _this.data.updateClickedData(_this.listHashtags[0].hashtag + ' hashtag');
                _this.functionGetTrendingData(_this.listHashtags);
            }
        });
    };
    TrendingComponent.prototype.ngOnInit = function () {
        //word list data structure:  { text: "Lorem", weight: 13, link: "https://github.com/DukeLeNoir/jQCloud" },
        var _this = this;
        this.data.share.subscribe(function (x) {
            _this.text = x;
            _this.dates = _this.text.split(' to ');
            _this.start = _this.dates[0];
            _this.end = _this.dates[1];
            $("#trending-topics").find('span').remove();
            _this.selectedTopics ? _this.getTrendingTopics() : _this.getHashtags();
        });
    };
    TrendingComponent.prototype.updateClicked = function (selectedData) {
        this.data.updateClickedData(selectedData);
    };
    TrendingComponent.prototype.zoom = function (zoomType) {
        var element = document.getElementById('trending-topics');
        var zoomArr = [0.75, 0.85, 0.9, 1, 1.2, 1.5, 1.75];
        if (this.currentZoom >= 0 && this.currentZoom <= 6) {
            zoomType === 'in' ? this.currentZoom++ : this.currentZoom--;
            if (this.currentZoom == 0) {
                this.hideZoomOut = true;
                this.currentZoom = 0;
            }
            else
                this.hideZoomOut = false;
            if (this.currentZoom == 6) {
                this.hideZoomIn = true;
                this.currentZoom = 6;
            }
            else
                this.hideZoomIn = false;
            element.style['transform'] = "scale(" + zoomArr[this.currentZoom] + ")";
        }
    };
    TrendingComponent.ctorParameters = function () { return [
        { type: _data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["DataTransferService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] }
    ]; };
    TrendingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trending',
            template: __webpack_require__(/*! raw-loader!./trending.component.html */ "./node_modules/raw-loader/index.js!./src/app/trending/trending.component.html"),
            styles: [__webpack_require__(/*! ./trending.component.css */ "./src/app/trending/trending.component.css")]
        })
    ], TrendingComponent);
    return TrendingComponent;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/verbatim/verbatim.component.css":
/*!*************************************************!*\
  !*** ./src/app/verbatim/verbatim.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes swing {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  10% {\r\n    -webkit-transform: rotate(10deg);\r\n            transform: rotate(10deg);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: rotate(-10deg);\r\n            transform: rotate(-10deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: rotate(5deg);\r\n            transform: rotate(5deg);\r\n  }\r\n\r\n  70% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: rotate(-5deg);\r\n            transform: rotate(-5deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n@keyframes swing {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  10% {\r\n    -webkit-transform: rotate(10deg);\r\n            transform: rotate(10deg);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: rotate(-10deg);\r\n            transform: rotate(-10deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: rotate(5deg);\r\n            transform: rotate(5deg);\r\n  }\r\n\r\n  70% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: rotate(-5deg);\r\n            transform: rotate(-5deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes sonar {\r\n  0% {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes sonar {\r\n  0% {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\nbody {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.page-wrapper .sidebar-wrapper,\r\n.sidebar-wrapper .sidebar-brand > a,\r\n.sidebar-wrapper .sidebar-dropdown > a:after,\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before,\r\n.sidebar-wrapper ul li a i,\r\n.page-wrapper .page-content,\r\n.sidebar-wrapper .sidebar-search input.search-menu,\r\n.sidebar-wrapper .sidebar-search .input-group-text,\r\n.sidebar-wrapper .sidebar-menu ul li a,\r\n#show-sidebar,\r\n#close-sidebar {\r\n  -webkit-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n/*----------------page-wrapper----------------*/\r\n\r\n.page-wrapper {\r\nposition:relative;\r\n}\r\n\r\n.page-wrapper .theme {\r\n    width: 40px;\r\n    height: 40px;\r\n    display: inline-block;\r\n    border-radius: 4px;\r\n    margin: 2px;\r\n  }\r\n\r\n.page-wrapper .theme.chiller-theme {\r\n      background: #1e2229;\r\n    }\r\n\r\n/*----------------toggeled sidebar----------------*/\r\n\r\n.page-wrapper.toggled .sidebar-wrapper {\r\n    left: 0px;\r\n    top: auto;\r\n    position: absolute;\r\n  }\r\n\r\n@media screen and (min-width: 768px) {\r\n  .page-wrapper.toggled .page-content {\r\n    padding-left: 300px;\r\n  }\r\n}\r\n\r\n/*----------------show sidebar button----------------*/\r\n\r\n#show-sidebar {\r\n  left: 0;\r\n  top: 0px;\r\n  border-radius: 0 4px 4px 0px;\r\n  width: 35px;\r\n  -webkit-transition-delay: 0.3s;\r\n          transition-delay: 0.3s;\r\n  position: absolute;\r\n}\r\n\r\n.page-wrapper.toggled #show-sidebar {\r\n  left: 20%;\r\n  top: 0%;\r\n}\r\n\r\n/*----------------sidebar-wrapper----------------*/\r\n\r\n.sidebar-wrapper {\r\n  width: 260px;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -300px;\r\n  z-index: 999;\r\n}\r\n\r\n.sidebar-wrapper ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n\r\n.sidebar-wrapper a {\r\n    text-decoration: none;\r\n  }\r\n\r\n/*----------------sidebar-content----------------*/\r\n\r\n.sidebar-content {\r\n  max-height: calc(100% - 30px);\r\n  height: calc(100% - 30px);\r\n  overflow-y: auto;\r\n  position: relative;\r\n}\r\n\r\n.sidebar-content.desktop {\r\n    overflow-y: hidden;\r\n  }\r\n\r\n/*--------------------sidebar-brand----------------------*/\r\n\r\n.sidebar-wrapper .sidebar-brand {\r\n  padding: 10px 20px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-brand > a {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n  }\r\n\r\n.sidebar-wrapper .sidebar-brand #close-sidebar {\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n  }\r\n\r\n/*-----------------------sidebar-search------------------------*/\r\n\r\n.sidebar-wrapper .sidebar-search > div {\r\n  padding: 10px 20px;\r\n}\r\n\r\n/*----------------------sidebar-menu-------------------------*/\r\n\r\n.sidebar-wrapper .sidebar-menu {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-menu .header-menu span {\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    padding: 15px 20px 5px 20px;\r\n    display: inline-block;\r\n  }\r\n\r\n.sidebar-wrapper .sidebar-menu ul li a {\r\n    display: inline-block;\r\n    width: 100%;\r\n    text-decoration: none;\r\n    position: relative;\r\n    padding: 8px 30px 8px 20px;\r\n  }\r\n\r\n.sidebar-wrapper .sidebar-menu ul li a i {\r\n      margin-right: 10px;\r\n      font-size: 12px;\r\n      width: 30px;\r\n      height: 30px;\r\n      line-height: 30px;\r\n      text-align: center;\r\n      border-radius: 4px;\r\n    }\r\n\r\n.sidebar-wrapper .sidebar-menu ul li a:hover > i::before {\r\n      display: inline-block;\r\n      -webkit-animation: swing ease-in-out 0.5s 1 alternate;\r\n              animation: swing ease-in-out 0.5s 1 alternate;\r\n    }\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown > a:after {\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 900;\r\n    content: \"\\f105\";\r\n    font-style: normal;\r\n    display: inline-block;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    background: 0 0;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 14px;\r\n  }\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu ul {\r\n    padding: 5px 0;\r\n  }\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li {\r\n    padding-left: 25px;\r\n    font-size: 13px;\r\n  }\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before {\r\n      content: \"\\f111\";\r\n      font-family: \"Font Awesome 5 Free\";\r\n      font-weight: 400;\r\n      font-style: normal;\r\n      display: inline-block;\r\n      text-align: center;\r\n      text-decoration: none;\r\n      -webkit-font-smoothing: antialiased;\r\n      -moz-osx-font-smoothing: grayscale;\r\n      margin-right: 10px;\r\n      font-size: 8px;\r\n    }\r\n\r\n.sidebar-wrapper .sidebar-menu ul li a span.label,\r\n  .sidebar-wrapper .sidebar-menu ul li a span.badge {\r\n    float: right;\r\n    margin-top: 8px;\r\n    margin-left: 5px;\r\n  }\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .badge,\r\n  .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .label {\r\n    float: right;\r\n    margin-top: 0px;\r\n  }\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-submenu {\r\n    display: none;\r\n  }\r\n\r\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown.active > a:after {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n    right: 17px;\r\n  }\r\n\r\n/*--------------------------page-content-----------------------------*/\r\n\r\n.page-wrapper .page-content {\r\n  display: inline-block;\r\n  width: 100%;\r\n  padding-left: 30px;\r\n  padding-top: 20px;\r\n  padding-right: 30px;\r\n  z-index: -1;\r\n}\r\n\r\n.page-wrapper .page-content {\r\n  overflow-x: hidden;\r\n}\r\n\r\n/*------scroll bar---------------------*/\r\n\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n  height: 7px;\r\n}\r\n\r\n::-webkit-scrollbar-button {\r\n  width: 0px;\r\n  height: 0px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #525965;\r\n  border: 0px none #ffffff;\r\n  border-radius: 0px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #525965;\r\n  }\r\n\r\n::-webkit-scrollbar-thumb:active {\r\n    background: #525965;\r\n  }\r\n\r\n::-webkit-scrollbar-track {\r\n  background: transparent;\r\n  border: 0px none #ffffff;\r\n  border-radius: 50px;\r\n}\r\n\r\n::-webkit-scrollbar-track:hover {\r\n    background: transparent;\r\n  }\r\n\r\n::-webkit-scrollbar-track:active {\r\n    background: transparent;\r\n  }\r\n\r\n::-webkit-scrollbar-corner {\r\n  background: transparent;\r\n}\r\n\r\n/*-----------------------------chiller-theme-------------------------------------------------*/\r\n\r\n.chiller-theme .sidebar-wrapper {\r\n  background: #31353D;\r\n}\r\n\r\n.chiller-theme .sidebar-wrapper,\r\n  .chiller-theme .sidebar-wrapper .sidebar-search,\r\n  .chiller-theme .sidebar-wrapper .sidebar-menu {\r\n    border-top: 1px solid #3a3f48;\r\n  }\r\n\r\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\r\n    .chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {\r\n      border-color: transparent;\r\n      box-shadow: none;\r\n    }\r\n\r\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\r\n    .chiller-theme .sidebar-wrapper .sidebar-search .input-group-text,\r\n    .chiller-theme .sidebar-wrapper .sidebar-brand > a,\r\n    .chiller-theme .sidebar-wrapper .sidebar-menu ul li a {\r\n      color: #818896;\r\n    }\r\n\r\n.chiller-theme .sidebar-wrapper .sidebar-menu ul li:hover > a,\r\n      .chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active > a,\r\n      .chiller-theme .sidebar-wrapper .sidebar-brand > a:hover {\r\n        color: #b8bfce;\r\n      }\r\n\r\n.page-wrapper.chiller-theme.toggled #close-sidebar {\r\n  color: #bdbdbd;\r\n}\r\n\r\n.page-wrapper.chiller-theme.toggled #close-sidebar:hover {\r\n    color: #ffffff;\r\n  }\r\n\r\n.chiller-theme .sidebar-wrapper ul li:hover a i,\r\n.chiller-theme .sidebar-wrapper .sidebar-dropdown .sidebar-submenu li a:hover:before,\r\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu:focus + span,\r\n.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active a i {\r\n  color: #16c7ff;\r\n  text-shadow: 0px 0px 10px rgba(22, 199, 255, 0.5);\r\n}\r\n\r\n.chiller-theme .sidebar-wrapper .sidebar-menu ul li a i,\r\n.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown div,\r\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\r\n.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {\r\n  background: #3a3f48;\r\n}\r\n\r\n.chiller-theme .sidebar-wrapper .sidebar-menu .header-menu span {\r\n  color: #6c7b88;\r\n}\r\n\r\n.sub-details {\r\n  box-shadow: hsl(0, 0%, 84%) 0 0 8px;\r\n    padding: 10px;\r\n    position: relative;\r\n    margin: 20px 0px;\r\n}\r\n\r\n.topics span {\r\n  display: inline-block;\r\n  padding: 4px 4px;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  line-height: 14px;\r\n  color: #ffffff;\r\n  vertical-align: baseline;\r\n  white-space: nowrap;\r\n  border-radius: 3px;\r\n  margin: 0px 5px;\r\n}\r\n\r\n.pink {\r\n  background-color: #ea4ca0;\r\n}\r\n\r\n.blue {\r\n  background-color: #00accd;\r\n}\r\n\r\n.green {\r\n  background-color: #25a01a;\r\n}\r\n\r\n.red {\r\n  background-color: #cc1a1a;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .smiley {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 25px;\r\n  }\r\n\r\n}\r\n\r\n.threaded {\r\n  margin-left: 40px;\r\n}\r\n\r\n.threaded::before {\r\n  border-top: 1px dashed #ddd;\r\n  height: 0.5px;\r\n  content: \" \";\r\n  width: 3.5%;\r\n  position: absolute;\r\n  left: -31px;\r\n  top: 3.0em;\r\n}\r\n\r\n.threaded::after {\r\n  content: \"\";\r\n  border-color: #ddd;\r\n  position: absolute;\r\n  left: -30px;\r\n  height: 120%;\r\n  border-right: 0;\r\n  border-style: solid;\r\n  top: -22px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyYmF0aW0vdmVyYmF0aW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBcENBO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtBQUNGOztBQVZBO0VBQ0U7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Ozs7Ozs7O0VBV0UsaUNBQWlDO0VBSWpDLHlCQUF5QjtBQUMzQjs7QUFFQSwrQ0FBK0M7O0FBRS9DO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7QUFFRTtNQUNFLG1CQUFtQjtJQUNyQjs7QUFFRixtREFBbUQ7O0FBRW5EO0lBQ0UsU0FBUztJQUNULFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0FBRUY7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUNBLHNEQUFzRDs7QUFDdEQ7RUFDRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUNBLGtEQUFrRDs7QUFFbEQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUU7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFNBQVM7RUFDWDs7QUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7QUFFRixrREFBa0Q7O0FBRWxEO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVFO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVGLDBEQUEwRDs7QUFFMUQ7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUJBQVk7WUFBWixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7QUFHRixnRUFBZ0U7O0FBRWhFO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLDhEQUE4RDs7QUFFOUQ7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUU7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQTBCO0VBQzVCOztBQUVFO01BQ0Usa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixXQUFXO01BQ1gsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsa0JBQWtCO0lBQ3BCOztBQUVBO01BQ0UscUJBQXFCO01BQ3JCLHFEQUE2QztjQUE3Qyw2Q0FBNkM7SUFDL0M7O0FBRUY7SUFDRSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7RUFDWDs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7QUFFRTtNQUNFLGdCQUFnQjtNQUNoQixrQ0FBa0M7TUFDbEMsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixtQ0FBbUM7TUFDbkMsa0NBQWtDO01BQ2xDLGtCQUFrQjtNQUNsQixjQUFjO0lBQ2hCOztBQUVGOztJQUVFLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztBQUVBOztJQUVFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixXQUFXO0VBQ2I7O0FBR0Ysc0VBQXNFOztBQUV0RTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLHdDQUF3Qzs7QUFFeEM7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVFO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUU7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUY7RUFDRSx1QkFBdUI7QUFDekI7O0FBR0EsOEZBQThGOztBQUU5RjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFRTs7O0lBR0UsNkJBQTZCO0VBQy9COztBQUVFOztNQUVFLHlCQUF5QjtNQUN6QixnQkFBZ0I7SUFDbEI7O0FBRUE7Ozs7TUFJRSxjQUFjO0lBQ2hCOztBQUVFOzs7UUFHRSxjQUFjO01BQ2hCOztBQUVOO0VBQ0UsY0FBYztBQUNoQjs7QUFFRTtJQUNFLGNBQWM7RUFDaEI7O0FBRUY7Ozs7RUFJRSxjQUFjO0VBQ2QsaURBQWlEO0FBQ25EOztBQUVBOzs7O0VBSUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTtFQUdJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBS0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztFQUNiOztBQUVGOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZlcmJhdGltL3ZlcmJhdGltLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHN3aW5nIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIDEwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XHJcbiAgfVxyXG5cclxuICAzMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICA0MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcclxuICB9XHJcblxyXG4gIDcwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIDgwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzb25hciB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLnBhZ2Utd3JhcHBlciAuc2lkZWJhci13cmFwcGVyLFxyXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kID4gYSxcclxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1kcm9wZG93biA+IGE6YWZ0ZXIsXHJcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGE6YmVmb3JlLFxyXG4uc2lkZWJhci13cmFwcGVyIHVsIGxpIGEgaSxcclxuLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50LFxyXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudSxcclxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQsXHJcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhLFxyXG4jc2hvdy1zaWRlYmFyLFxyXG4jY2xvc2Utc2lkZWJhciB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLXBhZ2Utd3JhcHBlci0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnBhZ2Utd3JhcHBlciB7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4gIC5wYWdlLXdyYXBwZXIgLnRoZW1lIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgfVxyXG5cclxuICAgIC5wYWdlLXdyYXBwZXIgLnRoZW1lLmNoaWxsZXItdGhlbWUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMWUyMjI5O1xyXG4gICAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS10b2dnZWxlZCBzaWRlYmFyLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gIC5wYWdlLXdyYXBwZXIudG9nZ2xlZCAuc2lkZWJhci13cmFwcGVyIHtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5wYWdlLXdyYXBwZXIudG9nZ2xlZCAucGFnZS1jb250ZW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogMzAwcHg7XHJcbiAgfVxyXG59XHJcbi8qLS0tLS0tLS0tLS0tLS0tLXNob3cgc2lkZWJhciBidXR0b24tLS0tLS0tLS0tLS0tLS0tKi9cclxuI3Nob3ctc2lkZWJhciB7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMHB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ucGFnZS13cmFwcGVyLnRvZ2dsZWQgI3Nob3ctc2lkZWJhciB7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHRvcDogMCU7XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tc2lkZWJhci13cmFwcGVyLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uc2lkZWJhci13cmFwcGVyIHtcclxuICB3aWR0aDogMjYwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtMzAwcHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1jb250ZW50LS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uc2lkZWJhci1jb250ZW50IHtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4gIC5zaWRlYmFyLWNvbnRlbnQuZGVza3RvcCB7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItYnJhbmQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCA+IGEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCAjY2xvc2Utc2lkZWJhciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLXNlYXJjaC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCA+IGRpdiB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLW1lbnUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4IDVweCAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA4cHggMzBweCA4cHggMjBweDtcclxuICB9XHJcblxyXG4gICAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEgaSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGE6aG92ZXIgPiBpOjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGFuaW1hdGlvbjogc3dpbmcgZWFzZS1pbi1vdXQgMC41cyAxIGFsdGVybmF0ZTtcclxuICAgIH1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duID4gYTphZnRlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29udGVudDogXCJcXGYxMDVcIjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogMTRweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IHVsIHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXFxmMTExXCI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDhweDtcclxuICAgIH1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEgc3Bhbi5sYWJlbCxcclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBzcGFuLmJhZGdlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhIC5iYWRnZSxcclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhIC5sYWJlbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItc3VibWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZSA+IGE6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgcmlnaHQ6IDE3cHg7XHJcbiAgfVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1wYWdlLWNvbnRlbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ucGFnZS13cmFwcGVyIC5wYWdlLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qLS0tLS0tc2Nyb2xsIGJhci0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogN3B4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDBweDtcclxuICBoZWlnaHQ6IDBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzUyNTk2NTtcclxuICBib3JkZXI6IDBweCBub25lICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzUyNTk2NTtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICM1MjU5NjU7XHJcbiAgfVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwcHggbm9uZSAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jaGlsbGVyLXRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMzEzNTNEO1xyXG59XHJcblxyXG4gIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIsXHJcbiAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2gsXHJcbiAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2EzZjQ4O1xyXG4gIH1cclxuXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudSxcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudSxcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0LFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCA+IGEsXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSB7XHJcbiAgICAgIGNvbG9yOiAjODE4ODk2O1xyXG4gICAgfVxyXG5cclxuICAgICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpOmhvdmVyID4gYSxcclxuICAgICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZSA+IGEsXHJcbiAgICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQgPiBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2I4YmZjZTtcclxuICAgICAgfVxyXG5cclxuLnBhZ2Utd3JhcHBlci5jaGlsbGVyLXRoZW1lLnRvZ2dsZWQgI2Nsb3NlLXNpZGViYXIge1xyXG4gIGNvbG9yOiAjYmRiZGJkO1xyXG59XHJcblxyXG4gIC5wYWdlLXdyYXBwZXIuY2hpbGxlci10aGVtZS50b2dnbGVkICNjbG9zZS1zaWRlYmFyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgdWwgbGk6aG92ZXIgYSBpLFxyXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYTpob3ZlcjpiZWZvcmUsXHJcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51OmZvY3VzICsgc3BhbixcclxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZSBhIGkge1xyXG4gIGNvbG9yOiAjMTZjN2ZmO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgyMiwgMTk5LCAyNTUsIDAuNSk7XHJcbn1cclxuXHJcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIGksXHJcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biBkaXYsXHJcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxyXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgYmFja2dyb3VuZDogIzNhM2Y0ODtcclxufVxyXG5cclxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcclxuICBjb2xvcjogIzZjN2I4ODtcclxufVxyXG5cclxuXHJcbi5zdWItZGV0YWlscyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBoc2woMCwgMCUsIDg0JSkgMCAwIDhweDtcclxuICAgIC1tb3otYm94LXNoYWRvdzogaHNsKDAsIDAlLCA4NCUpIDAgMCA4cHg7XHJcbiAgICBib3gtc2hhZG93OiBoc2woMCwgMCUsIDg0JSkgMCAwIDhweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG59XHJcblxyXG4udG9waWNzIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA0cHggNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW46IDBweCA1cHg7XHJcbn1cclxuXHJcbi5waW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0Y2EwO1xyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNjZDtcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVhMDFhO1xyXG59XHJcblxyXG4ucmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MxYTFhO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuc21pbGV5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi50aHJlYWRlZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi50aHJlYWRlZDo6YmVmb3JlIHtcclxuICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgaGVpZ2h0OiAwLjVweDtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICB3aWR0aDogMy41JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTMxcHg7XHJcbiAgdG9wOiAzLjBlbTtcclxufVxyXG5cclxuLnRocmVhZGVkOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3JkZXItY29sb3I6ICNkZGQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0zMHB4O1xyXG4gIGhlaWdodDogMTIwJTtcclxuICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICB0b3A6IC0yMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/verbatim/verbatim.component.ts":
/*!************************************************!*\
  !*** ./src/app/verbatim/verbatim.component.ts ***!
  \************************************************/
/*! exports provided: VerbatimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerbatimComponent", function() { return VerbatimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././data-transfer.service */ "./src/app/data-transfer.service.ts");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/pubsub */ "./node_modules/@aws-amplify/pubsub/lib-esm/index.js");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../aws-exports */ "./src/aws-exports.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");







aws_amplify__WEBPACK_IMPORTED_MODULE_7__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_6__["default"]);
_aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_5__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_6__["default"]);

var VerbatimComponent = /** @class */ (function () {
    function VerbatimComponent(data, apollo) {
        this.data = data;
        this.apollo = apollo;
        this.loading = true;
        this.empty = false;
        this.start = String;
        this.end = String;
        this.text = '';
        this.dates = [];
        this.finalDates = [];
        this.discourseDetails = [];
        this.getTopics = [];
        this.p = 1;
    }
    VerbatimComponent.prototype.createVerbatimView = function () {
        var _this = this;
        this.loading = true;
        this.discourseDetails = [];
        this.apollo
            .query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n            query listDiscourseData($start: String!, $end: String!, $region: String!) {\n              listDiscourseData (start: $start, end: $end, region: $region){\n              discourse_id\n              platform_desc\n              created_time\n              level0\n              comment\n              level1\n              level2\n              level3\n              isPost\n              post_id\n              region\n            }\n          }\n        "], ["\n            query listDiscourseData($start: String!, $end: String!, $region: String!) {\n              listDiscourseData (start: $start, end: $end, region: $region){\n              discourse_id\n              platform_desc\n              created_time\n              level0\n              comment\n              level1\n              level2\n              level3\n              isPost\n              post_id\n              region\n            }\n          }\n        "]))),
            variables: {
                start: this.start,
                end: this.end,
                region: "King County"
            }
        })
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.discourseDetails = data && data.listDiscourseData;
            _this.getTopicsName(_this.discourseDetails);
        }, function (error) {
            _this.error = error;
            console.log("error is: ", error);
        }).add(function () {
            if (_this.discourseDetails.length != 0) {
                _this.empty = false;
            }
            else {
                _this.empty = true;
                _this.loading = false;
            }
        });
    };
    VerbatimComponent.prototype.getTopicsName = function (topicData) {
        var _this = this;
        this.apollo
            .query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n            query getTopicsComment($discourse_id: Int) {\n              getTopicsComment (discourse_id: $discourse_id){\n                topic\n            }\n          }\n        "], ["\n            query getTopicsComment($discourse_id: Int) {\n              getTopicsComment (discourse_id: $discourse_id){\n                topic\n            }\n          }\n        "]))),
            variables: {
                discourse_id: topicData.discourse_id
            }
        }).subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.getTopics = data && data.getTopicsComment;
            console.log("getting the list of topics for selected search", _this.getTopics);
        }, function (error) {
            //show error
            console.log("error is: ", error);
        });
    };
    VerbatimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isOn = true;
        this.data.share.subscribe(function (x) {
            if (_this.text != x) {
                _this.loading = true;
                _this.text = x;
                _this.dates = _this.text.split(' to ');
                _this.start = _this.dates[0];
                _this.end = _this.dates[1];
                _this.createVerbatimView();
            }
        });
    };
    VerbatimComponent.prototype.beforeChange = function ($event) {
        console.log($event.panelId);
        if ($event.panelId === 'panelOne') {
            $event.preventDefault();
        }
        if ($event.panelId === 'panelTwo' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    VerbatimComponent.ctorParameters = function () { return [
        { type: _data_transfer_service__WEBPACK_IMPORTED_MODULE_2__["DataTransferService"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myaccordion', { static: true })
    ], VerbatimComponent.prototype, "accordion", void 0);
    VerbatimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verbatim',
            template: __webpack_require__(/*! raw-loader!./verbatim.component.html */ "./node_modules/raw-loader/index.js!./src/app/verbatim/verbatim.component.html"),
            styles: [__webpack_require__(/*! ./verbatim.component.css */ "./src/app/verbatim/verbatim.component.css")]
        })
    ], VerbatimComponent);
    return VerbatimComponent;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/aws-exports.js":
/*!****************************!*\
  !*** ./src/aws-exports.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-west-2",
    "aws_appsync_graphqlEndpoint": "https://tsahf7vqeng6thutuueaanzylq.appsync-api.us-west-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-west-2",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-youeb2krl5gvlm4odlnj6h44jm",
    "aws_content_delivery_bucket": "newimpactprojectapi-devtwo",
    "aws_content_delivery_bucket_region": "us-west-2",
    "aws_content_delivery_url": "https://d1jfog88m7gtu9.cloudfront.net"
};


/* harmony default export */ __webpack_exports__["default"] = (awsmobile);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\iGuest\Desktop\Winwin_new_Layout\NI\NewImpact\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 16:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map