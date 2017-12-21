(function () {
	'use strict';

	angular
		.module('demoApp', ['smart.zoom'])
		.controller('DemoAppController', DemoAppController);

	function DemoAppController() {
		var vm = this;

		this.title = 'Smart zoom demo app';
	}

	DemoAppController.$inject = [];
})();


