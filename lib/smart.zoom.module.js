import SmartZoomComponent from './smart.zoom.component';
import angularMouseWheel from '../node_modules/angular-mousewheel/mousewheel';
import ZoomService from './calculation-services/zoom.calculation.service'
import ImageTransformService from './calculation-services/image.transform.service'

export default angular
	.module('smart.zoom', ['monospaced.mousewheel'])
	.component('smartZoom', SmartZoomComponent)
	.service('zoomService', ZoomService)
	.service('ImageTransformService', ImageTransformService)
	.name;
