export default class SmartZoomComponentController {
	constructor() {

	}

	$onInit() {
		this.zoom = 'Smart zoom';
	}

	$onDestroy() {

	}

	onMouseWheel($event, $delta, $deltaX, $deltaY) {
		console.log($event);
	}
}

SmartZoomComponentController.$inject = [];
