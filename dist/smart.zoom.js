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

var _zoomCalculation = __webpack_require__(6);

var _zoomCalculation2 = _interopRequireDefault(_zoomCalculation);

var _imageTransform = __webpack_require__(7);

var _imageTransform2 = _interopRequireDefault(_imageTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('smart.zoom', ['monospaced.mousewheel']).component('smartZoom', _smartZoom2.default).service('zoomService', _zoomCalculation2.default).service('ImageTransformService', _imageTransform2.default).name;

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
	function SmartZoomComponentController(zoomService) {
		_classCallCheck(this, SmartZoomComponentController);

		this.zoomService = zoomService;
	}

	_createClass(SmartZoomComponentController, [{
		key: '$onInit',
		value: function $onInit() {
			this.zoom = 'Smart zoom';
		}
	}, {
		key: 'onMouseWheel',
		value: function onMouseWheel($event) {
			this.zoomService.calcScale($event);
		}
	}]);

	return SmartZoomComponentController;
}();

exports.default = SmartZoomComponentController;


SmartZoomComponentController.$inject = ['zoomService'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div class=\"smart-zoom\">\n\t<img src=\"{{vm.options.imageUrl}}\"\n\t\t ng-class=\"{'active': vm.options.active}\"\n\t\t class=\"image\"\n\t\t msd-wheel=\"vm.onMouseWheel($event)\" />\n</div>\n"

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
  }])
	.name);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ZoomService = function () {
	function ZoomService(ImageTransformService) {
		_classCallCheck(this, ZoomService);

		this.ImageTransformService = ImageTransformService;

		this.scale = 1;
		this.drag = {
			x: 0,
			y: 0,
			z: 0
		};
		this.scaleStep = 0.5;
	}

	_createClass(ZoomService, [{
		key: "calcScale",
		value: function calcScale($event) {
			var direction = $event.deltaY < 0 ? 1 : 0;
			var defaultSize = {
				width: 1307.2,
				height: 735.3
			};
			var prevSize = this.ImageTransformService.getCurrentSize();
			var containerSize = this.ImageTransformService.getContainerSize();
			var transformToDefault = void 0;
			var originalX = void 0;
			var originalY = void 0;

			if (prevSize.width > defaultSize.width) {
				transformToDefault = {
					x: (prevSize.width - containerSize.width) / 2 + $event.clientX - this.drag.x,
					y: (prevSize.height - containerSize.height) / 2 + $event.clientY - this.drag.y
				};

				originalX = defaultSize.width * (transformToDefault.x / prevSize.width);
				originalY = defaultSize.height * (transformToDefault.y / prevSize.height);
			} else {
				originalX = $event.clientX - Math.floor((containerSize.width - defaultSize.width) / 2);
				originalY = $event.clientY - Math.floor((containerSize.height - defaultSize.height) / 2);
			}

			this.scale += direction ? this.scaleStep : -this.scaleStep;

			var nextSize = {
				width: defaultSize.width * this.scale,
				height: defaultSize.height * this.scale
			};

			var scaledX = originalX / defaultSize.width * nextSize.width;
			var scaledY = originalY / defaultSize.height * nextSize.height;

			var translateX = $event.clientX - (scaledX - (nextSize.width - containerSize.width) / 2);
			var translateY = $event.clientY - (scaledY - (nextSize.height - containerSize.height) / 2);

			this.drag.x = translateX;
			this.drag.y = translateY;

			this.ImageTransformService.transformImage(this.scale, this.drag);
		}
	}]);

	return ZoomService;
}();

exports.default = ZoomService;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageTransformService = function () {
	function ImageTransformService() {
		_classCallCheck(this, ImageTransformService);

		this.imageElement = document.querySelector('.image');
		this.containerElement = document.querySelector('.smart-zoom');
	}

	_createClass(ImageTransformService, [{
		key: 'transformImage',
		value: function transformImage() {
			var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
			var drag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { x: 0, y: 0 };

			this.imageElement.style.transform = 'translate3d(' + drag.x + 'px,' + drag.y + 'px,' + drag.z + 'px) ' + 'scale(' + scale + ')';
		}
	}, {
		key: 'getContainerSize',
		value: function getContainerSize() {
			return {
				width: this.containerElement.getBoundingClientRect().width,
				height: this.containerElement.getBoundingClientRect().height
			};
		}
	}, {
		key: 'getCurrentSize',
		value: function getCurrentSize() {
			return {
				width: this.imageElement.getBoundingClientRect().width,
				height: this.imageElement.getBoundingClientRect().height
			};
		}

		//TODO handle resize as well

	}, {
		key: 'getDefaultSize',
		value: function getDefaultSize() {}
	}]);

	return ImageTransformService;
}();

exports.default = ImageTransformService;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmRkYzdiMzY1OTBjMjNlMTZkNmUiLCJ3ZWJwYWNrOi8vLy4vbGliL3NtYXJ0Lnpvb20ubW9kdWxlLmpzIiwid2VicGFjazovLy8uL2xpYi9zbWFydC56b29tLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc21hcnQuem9vbS5jb21wb25lbnQuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc21hcnQuem9vbS5jb21wb25lbnQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9saWIvc3R5bGUvc21hcnQuem9vbS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmd1bGFyLW1vdXNld2hlZWwvbW91c2V3aGVlbC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2FsY3VsYXRpb24tc2VydmljZXMvem9vbS5jYWxjdWxhdGlvbi5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2xpYi9jYWxjdWxhdGlvbi1zZXJ2aWNlcy9pbWFnZS50cmFuc2Zvcm0uc2VydmljZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29tcG9uZW50Iiwic2VydmljZSIsIm5hbWUiLCJiaW5kaW5ncyIsIm9wdGlvbnMiLCJTbWFydFpvb21Db21wb25lbnQiLCJjb250cm9sbGVyIiwiY29udHJvbGxlckFzIiwidGVtcGxhdGUiLCJTbWFydFpvb21Db21wb25lbnRDb250cm9sbGVyIiwiem9vbVNlcnZpY2UiLCJ6b29tIiwiJGV2ZW50IiwiY2FsY1NjYWxlIiwiJGluamVjdCIsIlpvb21TZXJ2aWNlIiwiSW1hZ2VUcmFuc2Zvcm1TZXJ2aWNlIiwic2NhbGUiLCJkcmFnIiwieCIsInkiLCJ6Iiwic2NhbGVTdGVwIiwiZGlyZWN0aW9uIiwiZGVsdGFZIiwiZGVmYXVsdFNpemUiLCJ3aWR0aCIsImhlaWdodCIsInByZXZTaXplIiwiZ2V0Q3VycmVudFNpemUiLCJjb250YWluZXJTaXplIiwiZ2V0Q29udGFpbmVyU2l6ZSIsInRyYW5zZm9ybVRvRGVmYXVsdCIsIm9yaWdpbmFsWCIsIm9yaWdpbmFsWSIsImNsaWVudFgiLCJjbGllbnRZIiwiTWF0aCIsImZsb29yIiwibmV4dFNpemUiLCJzY2FsZWRYIiwic2NhbGVkWSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwidHJhbnNmb3JtSW1hZ2UiLCJpbWFnZUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWluZXJFbGVtZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZUEsUUFDYkMsTUFEYSxDQUNOLFlBRE0sRUFDUSxDQUFDLHVCQUFELENBRFIsRUFFYkMsU0FGYSxDQUVILFdBRkcsdUJBR2JDLE9BSGEsQ0FHTCxhQUhLLDZCQUliQSxPQUphLENBSUwsdUJBSkssNEJBS2JDLEk7Ozs7Ozs7Ozs7Ozs7QUNWRjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQyxXQUFXO0FBQ2hCQyxVQUFTO0FBRE8sQ0FBakI7O0FBSUEsSUFBTUMscUJBQXFCO0FBQzFCQyx5Q0FEMEI7QUFFMUJDLGVBQWMsSUFGWTtB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UUMsR0FBRyxDQUFYLEVBQWU7O0FBQy9DLFFBQUt5QixZQUFMLENBQWtCSSxLQUFsQixDQUF3QkMsU0FBeEIsR0FBb0MsaUJBQWlCaEMsS0FBS0MsQ0FBdEIsR0FBMEIsS0FBMUIsR0FBa0NELEtBQUtFLENBQXZDLEdBQTJDLEtBQTNDLEdBQW1ERixLQUFLRyxDQUF4RCxHQUE0RCxNQUE1RCxHQUFxRSxRQUFyRSxHQUFnRkosS0FBaEYsR0FBd0YsR0FBNUg7QUFDQTs7O3FDQUVrQjtBQUNsQixVQUFPO0FBQ05TLFdBQU8sS0FBS3NCLGdCQUFMLENBQXNCRyxxQkFBdEIsR0FBOEN6QixLQUQvQztBQUVOQyxZQUFRLEtBQUtxQixnQkFBTCxDQUFzQkcscUJBQXRCLEdBQThDeEI7QUFGaEQsSUFBUDtBQUlBOzs7bUNBRWdCO0FBQ2hCLFVBQU87QUFDTkQsV0FBTyxLQUFLbUIsWUFBTCxDQUFrQk0scUJBQWxCLEdBQTBDekIsS0FEM0M7QUFFTkMsWUFBUSxLQUFLa0IsWUFBTCxDQUFrQk0scUJBQWxCLEdBQTBDeEI7QUFGNUMsSUFBUDtBQUlBOztBQUVEOzs7O21DQUNpQixDQUNoQjs7Ozs7O2tCQTFCbUJYLHFCIiwiZmlsZSI6InNtYXJ0Lnpvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZGRjN2IzNjU5MGMyM2UxNmQ2ZSIsImltcG9ydCBTbWFydFpvb21Db21wb25lbnQgZnJvbSAnLi9zbWFydC56b29tLmNvbXBvbmVudCc7XG5pbXBvcnQgYW5ndWxhck1vdXNlV2hlZWwgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItbW91c2V3aGVlbC9tb3VzZXdoZWVsJztcbmltcG9ydCBab29tU2VydmljZSBmcm9tICcuL2NhbGN1bGF0aW9uLXNlcnZpY2VzL3pvb20uY2FsY3VsYXRpb24uc2VydmljZSdcbmltcG9ydCBJbWFnZVRyYW5zZm9ybVNlcnZpY2UgZnJvbSAnLi9jYWxjdWxhdGlvbi1zZXJ2aWNlcy9pbWFnZS50cmFuc2Zvcm0uc2VydmljZSdcblxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhclxuXHQubW9kdWxlKCdzbWFydC56b29tJywgWydtb25vc3BhY2VkLm1vdXNld2hlZWwnXSlcblx0LmNvbXBvbmVudCgnc21hcnRab29tJywgU21hcnRab29tQ29tcG9uZW50KVxuXHQuc2VydmljZSgnem9vbVNlcnZpY2UnLCBab29tU2VydmljZSlcblx0LnNlcnZpY2UoJ0ltYWdlVHJhbnNmb3JtU2VydmljZScsIEltYWdlVHJhbnNmb3JtU2VydmljZSlcblx0Lm5hbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvc21hcnQuem9vbS5tb2R1bGUuanMiLCJpbXBvcnQgU21hcnRab29tQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuL3NtYXJ0Lnpvb20uY29tcG9uZW50LmNvbnRyb2xsZXInO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vc21hcnQuem9vbS5jb21wb25lbnQudGVtcGxhdGUuaHRtbCc7XG5pbXBvcnQgJy4vc3R5bGUvc21hcnQuem9vbS5zY3NzJztcblxuY29uc3QgYmluZGluZ3MgPSB7XG5cdG9wdGlvbnM6ICc9J1xufTtcblxuY29uc3QgU21hcnRab29tQ29tcG9uZW50ID0ge1xuXHRjb250cm9sbGVyOiBTbWFydFpvb21Db21wb25lbnRDb250cm9sbGVyLFxuXHRjb250cm9sbGVyQXM6ICd2bScsXG5cdGJpbmRpbmdzLFxuXHR0ZW1wbGF0ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU21hcnRab29tQ29tcG9uZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3NtYXJ0Lnpvb20uY29tcG9uZW50LmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hcnRab29tQ29tcG9uZW50Q29udHJvbGxlciB7XG5cdGNvbnN0cnVjdG9yKHpvb21TZXJ2aWNlKSB7XG5cdFx0dGhpcy56b29tU2VydmljZSA9IHpvb21TZXJ2aWNlO1xuXHR9XG5cblx0JG9uSW5pdCgpIHtcblx0XHR0aGlzLnpvb20gPSAnU21hcnQgem9vbSc7XG5cdH1cblxuXHRvbk1vdXNlV2hlZWwoJGV2ZW50KSB7XG5cdFx0dGhpcy56b29tU2VydmljZS5jYWxjU2NhbGUoJGV2ZW50KTtcblx0fVxufVxuXG5TbWFydFpvb21Db21wb25lbnRDb250cm9sbGVyLiRpbmplY3QgPSBbXG5cdCd6b29tU2VydmljZSdcbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvc21hcnQuem9vbS5jb21wb25lbnQuY29udHJvbGxlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJzbWFydC16b29tXFxcIj5cXG5cXHQ8aW1nIHNyYz1cXFwie3t2bS5vcHRpb25zLmltYWdlVXJsfX1cXFwiXFxuXFx0XFx0IG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6IHZtLm9wdGlvbnMuYWN0aXZlfVxcXCJcXG5cXHRcXHQgY2xhc3M9XFxcImltYWdlXFxcIlxcblxcdFxcdCBtc2Qtd2hlZWw9XFxcInZtLm9uTW91c2VXaGVlbCgkZXZlbnQpXFxcIiAvPlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvc21hcnQuem9vbS5jb21wb25lbnQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3N0eWxlL3NtYXJ0Lnpvb20uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogYW5ndWxhci1tb3VzZXdoZWVsIHYxLjAuNVxuICogKGMpIDIwMTMgTW9ub3NwYWNlZCBodHRwOi8vbW9ub3NwYWNlZC5jb21cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXIubW9kdWxlKCdtb25vc3BhY2VkLm1vdXNld2hlZWwnLCBbXSlcbiAgLmRpcmVjdGl2ZSgnbXNkV2hlZWwnLCBbJyRwYXJzZScsIGZ1bmN0aW9uKCRwYXJzZSl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQSwgQycsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XG4gICAgICAgIHZhciBleHByID0gJHBhcnNlKGF0dHJbJ21zZFdoZWVsJ10pLFxuICAgICAgICAgICAgZm4gPSBmdW5jdGlvbihldmVudCwgZGVsdGEsIGRlbHRhWCwgZGVsdGFZKXtcbiAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgZXhwcihzY29wZSwge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICAgICRkZWx0YTogZGVsdGEsXG4gICAgICAgICAgICAgICAgICAkZGVsdGFYOiBkZWx0YVgsXG4gICAgICAgICAgICAgICAgICAkZGVsdGFZOiBkZWx0YVlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFtc3RlcjtcblxuICAgICAgICBpZiAodHlwZW9mIEhhbXN0ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gZmFsbGJhY2sgdG8gc3RhbmRhcmQgd2hlZWwgZXZlbnRcbiAgICAgICAgICBlbGVtZW50LmJpbmQoJ3doZWVsJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBleHByKHNjb3BlLCB7XG4gICAgICAgICAgICAgICAgJGV2ZW50OiBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRvbid0IGNyZWF0ZSBtdWx0aXBsZSBIYW1zdGVyIGluc3RhbmNlcyBwZXIgZWxlbWVudFxuICAgICAgICBpZiAoIShoYW1zdGVyID0gZWxlbWVudC5kYXRhKCdoYW1zdGVyJykpKSB7XG4gICAgICAgICAgaGFtc3RlciA9IEhhbXN0ZXIoZWxlbWVudFswXSk7XG4gICAgICAgICAgZWxlbWVudC5kYXRhKCdoYW1zdGVyJywgaGFtc3Rlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBiaW5kIEhhbXN0ZXIgd2hlZWwgZXZlbnRcbiAgICAgICAgaGFtc3Rlci53aGVlbChmbik7XG5cbiAgICAgICAgLy8gdW5iaW5kIEhhbXN0ZXIgd2hlZWwgZXZlbnRcbiAgICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgaGFtc3Rlci51bndoZWVsKGZuKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfV0pXG5cdC5uYW1lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1tb3VzZXdoZWVsL21vdXNld2hlZWwuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbVNlcnZpY2Uge1xuXHRjb25zdHJ1Y3RvcihJbWFnZVRyYW5zZm9ybVNlcnZpY2UpIHtcblx0XHR0aGlzLkltYWdlVHJhbnNmb3JtU2VydmljZSA9IEltYWdlVHJhbnNmb3JtU2VydmljZTtcblxuXHRcdHRoaXMuc2NhbGUgPSAxO1xuXHRcdHRoaXMuZHJhZyA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdFx0ejogMFxuXHRcdH07XG5cdFx0dGhpcy5zY2FsZVN0ZXAgPSAwLjU7XG5cdH1cblxuXHRjYWxjU2NhbGUoJGV2ZW50KSB7XG5cdFx0bGV0IGRpcmVjdGlvbiA9ICRldmVudC5kZWx0YVkgPCAwID8gMSA6IDA7XG5cdFx0bGV0IGRlZmF1bHRTaXplID0ge1xuXHRcdFx0d2lkdGg6IDEzMDcuMixcblx0XHRcdGhlaWdodDogNzM1LjNcblx0XHR9O1xuXHRcdGxldCBwcmV2U2l6ZSA9IHRoaXMuSW1hZ2VUcmFuc2Zvcm1TZXJ2aWNlLmdldEN1cnJlbnRTaXplKCk7XG5cdFx0bGV0IGNvbnRhaW5lclNpemUgPSB0aGlzLkltYWdlVHJhbnNmb3JtU2VydmljZS5nZXRDb250YWluZXJTaXplKCk7XG5cdFx0bGV0IHRyYW5zZm9ybVRvRGVmYXVsdDtcblx0XHRsZXQgb3JpZ2luYWxYO1xuXHRcdGxldCBvcmlnaW5hbFk7XG5cblx0XHRpZihwcmV2U2l6ZS53aWR0aCA+IGRlZmF1bHRTaXplLndpZHRoKSB7XG5cdFx0XHR0cmFuc2Zvcm1Ub0RlZmF1bHQgPSB7XG5cdFx0XHRcdHg6ICgocHJldlNpemUud2lkdGggLSBjb250YWluZXJTaXplLndpZHRoKSAvIDIpICsgJGV2ZW50LmNsaWVudFggLSB0aGlzLmRyYWcueCxcblx0XHRcdFx0eTogKChwcmV2U2l6ZS5oZWlnaHQgLSBjb250YWluZXJTaXplLmhlaWdodCkgLyAyKSArICRldmVudC5jbGllbnRZIC0gdGhpcy5kcmFnLnlcblx0XHRcdH07XG5cblx0XHRcdG9yaWdpbmFsWCA9IGRlZmF1bHRTaXplLndpZHRoICogKHRyYW5zZm9ybVRvRGVmYXVsdC54IC8gcHJldlNpemUud2lkdGgpO1xuXHRcdFx0b3JpZ2luYWxZID0gZGVmYXVsdFNpemUuaGVpZ2h0ICogKHRyYW5zZm9ybVRvRGVmYXVsdC55IC8gcHJldlNpemUuaGVpZ2h0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3JpZ2luYWxYID0gJGV2ZW50LmNsaWVudFggLSBNYXRoLmZsb29yKChjb250YWluZXJTaXplLndpZHRoIC0gZGVmYXVsdFNpemUud2lkdGgpIC8gMik7XG5cdFx0XHRvcmlnaW5hbFkgPSAkZXZlbnQuY2xpZW50WSAtIE1hdGguZmxvb3IoKGNvbnRhaW5lclNpemUuaGVpZ2h0IC0gZGVmYXVsdFNpemUuaGVpZ2h0KSAvIDIpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2NhbGUgKz0gZGlyZWN0aW9uID8gdGhpcy5zY2FsZVN0ZXAgOiAtdGhpcy5zY2FsZVN0ZXA7XG5cblx0XHRsZXQgbmV4dFNpemUgPSB7XG5cdFx0XHR3aWR0aDogZGVmYXVsdFNpemUud2lkdGggKiB0aGlzLnNjYWxlLFxuXHRcdFx0aGVpZ2h0OiBkZWZhdWx0U2l6ZS5oZWlnaHQgKiB0aGlzLnNjYWxlXG5cdFx0fTtcblxuXHRcdGxldCBzY2FsZWRYID0gKG9yaWdpbmFsWCAvIGRlZmF1bHRTaXplLndpZHRoKSAqIG5leHRTaXplLndpZHRoO1xuXHRcdGxldCBzY2FsZWRZID0gKG9yaWdpbmFsWSAvIGRlZmF1bHRTaXplLmhlaWdodCkgKiBuZXh0U2l6ZS5oZWlnaHQ7XG5cblx0XHRsZXQgdHJhbnNsYXRlWCA9ICRldmVudC5jbGllbnRYIC0gKHNjYWxlZFggLSAoKG5leHRTaXplLndpZHRoIC0gY29udGFpbmVyU2l6ZS53aWR0aCkgLyAyKSk7XG5cdFx0bGV0IHRyYW5zbGF0ZVkgPSAkZXZlbnQuY2xpZW50WSAtIChzY2FsZWRZIC0gKChuZXh0U2l6ZS5oZWlnaHQgLSBjb250YWluZXJTaXplLmhlaWdodCkgLyAyKSk7XG5cblx0XHR0aGlzLmRyYWcueCA9IHRyYW5zbGF0ZVg7XG5cdFx0dGhpcy5kcmFnLnkgPSB0cmFuc2xhdGVZO1xuXG5cdFx0dGhpcy5JbWFnZVRyYW5zZm9ybVNlcnZpY2UudHJhbnNmb3JtSW1hZ2UodGhpcy5zY2FsZSwgdGhpcy5kcmFnKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NhbGN1bGF0aW9uLXNlcnZpY2VzL3pvb20uY2FsY3VsYXRpb24uc2VydmljZS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlVHJhbnNmb3JtU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlJyk7XG5cdFx0dGhpcy5jb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNtYXJ0LXpvb20nKTtcblx0fVxuXG5cdHRyYW5zZm9ybUltYWdlKHNjYWxlID0gMSwgZHJhZyA9IHsgeDogMCwgeTogMH0pIHtcblx0XHR0aGlzLmltYWdlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIGRyYWcueCArICdweCwnICsgZHJhZy55ICsgJ3B4LCcgKyBkcmFnLnogKyAncHgpICcgKyAnc2NhbGUoJyArIHNjYWxlICsgJyknO1xuXHR9XG5cblx0Z2V0Q29udGFpbmVyU2l6ZSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0d2lkdGg6IHRoaXMuY29udGFpbmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcblx0XHRcdGhlaWdodDogdGhpcy5jb250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuXHRcdH1cblx0fVxuXG5cdGdldEN1cnJlbnRTaXplKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogdGhpcy5pbWFnZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuaW1hZ2VFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuXHRcdH1cblx0fVxuXG5cdC8vVE9ETyBoYW5kbGUgcmVzaXplIGFzIHdlbGxcblx0Z2V0RGVmYXVsdFNpemUoKSB7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jYWxjdWxhdGlvbi1zZXJ2aWNlcy9pbWFnZS50cmFuc2Zvcm0uc2VydmljZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=