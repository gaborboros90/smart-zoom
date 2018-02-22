import SmartZoomComponent from './smart.zoom.component';
import angularMouseWheel from '../node_modules/angular-mousewheel/mousewheel'

export default angular
	.module('smart.zoom', ['monospaced.mousewheel'])
	.component('smartZoom', SmartZoomComponent)
	.name;
