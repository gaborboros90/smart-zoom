/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _smartZoom = __webpack_require__(1);

var _smartZoom2 = _interopRequireDefault(_smartZoom);

var _mousewheel = __webpack_require__(5);

var _mousewheel2 = _interopRequireDefault(_mousewheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('smart.zoom', ['monospaced.mousewheel']).component('smartZoom', _smartZoom2.default).name;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _smartZoomComponent = __webpack_require__(2);

var _smartZoomComponent2 = _interopRequireDefault(_smartZoomComponent);

var _smartZoomComponentTemplate = __webpack_require__(3);

var _smartZoomComponentTemplate2 = _interopRequireDefault(_smartZoomComponentTemplate);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindings = {
	options: '='
};

var SmartZoomComponent = {
	controller: _smartZoomComponent2.default,
	controllerAs: 'vm',
	bindings: bindings,
	template: _smartZoomComponentTemplate2.default
};

exports.default = SmartZoomComponent;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SmartZoomComponentController = function () {
	function SmartZoomComponentController() {
		_classCallCheck(this, SmartZoomComponentController);
	}

	_createClass(SmartZoomComponentController, [{
		key: '$onInit',
		value: function $onInit() {
			this.zoom = 'Smart zoom';
		}
	}, {
		key: '$onDestroy',
		value: function $onDestroy() {}
	}, {
		key: 'onMouseWheel',
		value: function onMouseWheel($event, $delta, $deltaX, $deltaY) {
			console.log($event);
		}
	}]);

	return SmartZoomComponentController;
}();

exports.default = SmartZoomComponentController;


SmartZoomComponentController.$inject = [];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div class=\"smart-zoom\">\n\t<img src=\"{{vm.options.imageUrl}}\"\n\t\t ng-class=\"{'active': vm.options.active}\"\n\t\t class=\"image\"\n\t\t msd-wheel=\"vm.onMouseWheel($event, $delta, $deltaX, $deltaY)\" />\n</div>\n"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*
 * angular-mousewheel v1.0.5
 * (c) 2013 Monospaced http://monospaced.com
 * License: MIT
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('monospaced.mousewheel', [])
  .directive('msdWheel', ['$parse', function($parse){
    return {
      restrict: 'A, C',
        link: function(scope, element, attr) {
        var expr = $parse(attr['msdWheel']),
            fn = function(event, delta, deltaX, deltaY){
              scope.$apply(function(){
                expr(scope, {
                  $event: event,
                  $delta: delta,
                  $deltaX: deltaX,
                  $deltaY: deltaY
                });
              });
            },
            hamster;

        if (typeof Hamster === 'undefined') {
          // fallback to standard wheel event
          element.bind('wheel', function(event){
            scope.$apply(function() {
              expr(scope, {
                $event: event
              });
            });
          });
          return;
        }

        // don't create multiple Hamster instances per element
        if (!(hamster = element.data('hamster'))) {
          hamster = Hamster(element[0]);
          element.data('hamster', hamster);
        }

        // bind Hamster wheel event
        hamster.wheel(fn);

        // unbind Hamster wheel event
        scope.$on('$destroy', function(){
          hamster.unwheel(fn);
        });
      }
    };
  }]).name);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDkxZWU2MjZmNmM2YWUzYjVkMzQiLCJ3ZWJwYWNrOi8vLy4vbGliL3NtYXJ0Lnpvb20ubW9kdWxlLmpzIiwid2VicGFjazovLy8uL2xpYi9zbWFydC56b29tLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc21hcnQuem9vbS5jb21wb25lbnQuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc21hcnQuem9vbS5jb21wb25lbnQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9saWIvc3R5bGUvc21hcnQuem9vbS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmd1bGFyLW1vdXNld2hlZWwvbW91c2V3aGVlbC5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29tcG9uZW50IiwibmFtZSIsImJpbmRpbmdzIiwib3B0aW9ucyIsIlNtYXJ0Wm9vbUNvbXBvbmVudCIsImNvbnRyb2xsZXIiLCJjb250cm9sbGVyQXMiLCJ0ZW1wbGF0ZSIsIlNtYXJ0Wm9vbUNvbXBvbmVudENvbnRyb2xsZXIiLCJ6b29tIiwiJGV2ZW50IiwiJGRlbHRhIiwiJGRlbHRhWCIsIiRkZWx0YVkiLCJjb25zb2xlIiwibG9nIiwiJGluamVjdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7Ozs7a0JBRWVBLFFBQ2JDLE1BRGEsQ0FDTixZQURNLEVBQ1EsQ0FBQyx1QkFBRCxDQURSLEVBRWJDLFNBRmEsQ0FFSCxXQUZHLHVCQUdiQyxJOzs7Ozs7Ozs7Ozs7O0FDTkY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUMsV0FBVztBQUNoQkMsVUFBUztBQURPLENBQWpCOztBQUlBLElBQU1DLHFCQUFxQjtBQUMxQkMseUNBRDBCO0FBRTFCQyxlQUFjLElBRlk7QUFHMUJKLG1CQUgwQjtBQUkxQks7QUFKMEIsQ0FBM0I7O2tCQU9lSCxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNmTUksNEI7QUFDcEIseUNBQWM7QUFBQTtBQUViOzs7OzRCQUVTO0FBQ1QsUUFBS0MsSUFBTCxHQUFZLFlBQVo7QUFDQTs7OytCQUVZLENBRVo7OzsrQkFFWUMsTSxFQUFRQyxNLEVBQVFDLE8sRUFBU0MsTyxFQUFTO0FBQzlDQyxXQUFRQyxHQUFSLENBQVlMLE1BQVo7QUFDQTs7Ozs7O2tCQWZtQkYsNEI7OztBQWtCckJBLDZCQUE2QlEsT0FBN0IsR0FBdUMsRUFBdkMsQzs7Ozs7O0FDbEJBLDZEQUE2RCxxQkFBcUIscUJBQXFCLDRCQUE0Qiw0Rzs7Ozs7O0FDQW5JLHlDOzs7Ozs7O0FDQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHIiwiZmlsZSI6InNtYXJ0Lnpvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkOTFlZTYyNmY2YzZhZTNiNWQzNCIsImltcG9ydCBTbWFydFpvb21Db21wb25lbnQgZnJvbSAnLi9zbWFydC56b29tLmNvbXBvbmVudCc7XG5pbXBvcnQgYW5ndWxhck1vdXNlV2hlZWwgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItbW91c2V3aGVlbC9tb3VzZXdoZWVsJ1xuXG5leHBvcnQgZGVmYXVsdCBhbmd1bGFyXG5cdC5tb2R1bGUoJ3NtYXJ0Lnpvb20nLCBbJ21vbm9zcGFjZWQubW91c2V3aGVlbCddKVxuXHQuY29tcG9uZW50KCdzbWFydFpvb20nLCBTbWFydFpvb21Db21wb25lbnQpXG5cdC5uYW1lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3NtYXJ0Lnpvb20ubW9kdWxlLmpzIiwiaW1wb3J0IFNtYXJ0Wm9vbUNvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi9zbWFydC56b29tLmNvbXBvbmVudC5jb250cm9sbGVyJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3NtYXJ0Lnpvb20uY29tcG9uZW50LnRlbXBsYXRlLmh0bWwnO1xuaW1wb3J0ICcuL3N0eWxlL3NtYXJ0Lnpvb20uc2Nzcyc7XG5cbmNvbnN0IGJpbmRpbmdzID0ge1xuXHRvcHRpb25zOiAnPSdcbn07XG5cbmNvbnN0IFNtYXJ0Wm9vbUNvbXBvbmVudCA9IHtcblx0Y29udHJvbGxlcjogU21hcnRab29tQ29tcG9uZW50Q29udHJvbGxlcixcblx0Y29udHJvbGxlckFzOiAndm0nLFxuXHRiaW5kaW5ncyxcblx0dGVtcGxhdGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNtYXJ0Wm9vbUNvbXBvbmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9zbWFydC56b29tLmNvbXBvbmVudC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0Wm9vbUNvbXBvbmVudENvbnRyb2xsZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG5cblx0JG9uSW5pdCgpIHtcblx0XHR0aGlzLnpvb20gPSAnU21hcnQgem9vbSc7XG5cdH1cblxuXHQkb25EZXN0cm95KCkge1xuXG5cdH1cblxuXHRvbk1vdXNlV2hlZWwoJGV2ZW50LCAkZGVsdGEsICRkZWx0YVgsICRkZWx0YVkpIHtcblx0XHRjb25zb2xlLmxvZygkZXZlbnQpO1xuXHR9XG59XG5cblNtYXJ0Wm9vbUNvbXBvbmVudENvbnRyb2xsZXIuJGluamVjdCA9IFtdO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3NtYXJ0Lnpvb20uY29tcG9uZW50LmNvbnRyb2xsZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwic21hcnQtem9vbVxcXCI+XFxuXFx0PGltZyBzcmM9XFxcInt7dm0ub3B0aW9ucy5pbWFnZVVybH19XFxcIlxcblxcdFxcdCBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiB2bS5vcHRpb25zLmFjdGl2ZX1cXFwiXFxuXFx0XFx0IGNsYXNzPVxcXCJpbWFnZVxcXCJcXG5cXHRcXHQgbXNkLXdoZWVsPVxcXCJ2bS5vbk1vdXNlV2hlZWwoJGV2ZW50LCAkZGVsdGEsICRkZWx0YVgsICRkZWx0YVkpXFxcIiAvPlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvc21hcnQuem9vbS5jb21wb25lbnQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3N0eWxlL3NtYXJ0Lnpvb20uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogYW5ndWxhci1tb3VzZXdoZWVsIHYxLjAuNVxuICogKGMpIDIwMTMgTW9ub3NwYWNlZCBodHRwOi8vbW9ub3NwYWNlZC5jb21cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXIubW9kdWxlKCdtb25vc3BhY2VkLm1vdXNld2hlZWwnLCBbXSlcbiAgLmRpcmVjdGl2ZSgnbXNkV2hlZWwnLCBbJyRwYXJzZScsIGZ1bmN0aW9uKCRwYXJzZSl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQSwgQycsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XG4gICAgICAgIHZhciBleHByID0gJHBhcnNlKGF0dHJbJ21zZFdoZWVsJ10pLFxuICAgICAgICAgICAgZm4gPSBmdW5jdGlvbihldmVudCwgZGVsdGEsIGRlbHRhWCwgZGVsdGFZKXtcbiAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgZXhwcihzY29wZSwge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICAgICRkZWx0YTogZGVsdGEsXG4gICAgICAgICAgICAgICAgICAkZGVsdGFYOiBkZWx0YVgsXG4gICAgICAgICAgICAgICAgICAkZGVsdGFZOiBkZWx0YVlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFtc3RlcjtcblxuICAgICAgICBpZiAodHlwZW9mIEhhbXN0ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gZmFsbGJhY2sgdG8gc3RhbmRhcmQgd2hlZWwgZXZlbnRcbiAgICAgICAgICBlbGVtZW50LmJpbmQoJ3doZWVsJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBleHByKHNjb3BlLCB7XG4gICAgICAgICAgICAgICAgJGV2ZW50OiBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRvbid0IGNyZWF0ZSBtdWx0aXBsZSBIYW1zdGVyIGluc3RhbmNlcyBwZXIgZWxlbWVudFxuICAgICAgICBpZiAoIShoYW1zdGVyID0gZWxlbWVudC5kYXRhKCdoYW1zdGVyJykpKSB7XG4gICAgICAgICAgaGFtc3RlciA9IEhhbXN0ZXIoZWxlbWVudFswXSk7XG4gICAgICAgICAgZWxlbWVudC5kYXRhKCdoYW1zdGVyJywgaGFtc3Rlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBiaW5kIEhhbXN0ZXIgd2hlZWwgZXZlbnRcbiAgICAgICAgaGFtc3Rlci53aGVlbChmbik7XG5cbiAgICAgICAgLy8gdW5iaW5kIEhhbXN0ZXIgd2hlZWwgZXZlbnRcbiAgICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgaGFtc3Rlci51bndoZWVsKGZuKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfV0pLm5hbWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLW1vdXNld2hlZWwvbW91c2V3aGVlbC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9