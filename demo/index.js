(function () {
	'use strict';

	angular
		.module('demoApp', ['smart.zoom'])
		.controller('DemoAppController', DemoAppController);

	function DemoAppController() {
		let vm = this;

		vm.baseDir = 'test-images/';

		vm.zoomOptions = {
			imageUrl: vm.baseDir + 'test-image-001.jpg',
			active: false,
			enabled: true
		}
	}

	DemoAppController.$inject = [];
})();


