export default class SmartZoomComponentController {
	constructor(zoomService) {
		this.zoomService = zoomService;
	}

	$onInit() {
		this.zoom = 'Smart zoom';
	}

	onMouseWheel($event) {
		this.zoomService.calcScale($event);
	}
}

SmartZoomComponentController.$inject = [
	'zoomService'
];
