(function () {
	'use strict';

	angular
		.module('demoApp', ['smart.zoom'])
		.controller('DemoAppController', DemoAppController);

	function DemoAppController() {
		let vm = angular.extend(this, {
			zoomOptions: {
				imageUrl: 'test-images/test-image-001.jpg',
				active: false,
				enabled: true
			}
		});
	}

	DemoAppController.$inject = [];
})();


