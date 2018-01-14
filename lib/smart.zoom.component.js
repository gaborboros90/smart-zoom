import SmartZoomComponentController from './smart.zoom.component.controller';
import template from './smart.zoom.component.template.html';
import './style/smart.zoom.scss';

const bindings = {
	options: '='
};

const SmartZoomComponent = {
	controller: SmartZoomComponentController,
	controllerAs: 'vm',
	bindings,
	template
};

export default SmartZoomComponent;
