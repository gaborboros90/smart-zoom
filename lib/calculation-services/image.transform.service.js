export default class ImageTransformService {
	constructor() {
		this.imageElement = document.querySelector('.image');
		this.containerElement = document.querySelector('.smart-zoom');
	}

	transformImage(scale = 1, drag = { x: 0, y: 0}) {
		this.imageElement.style.transform = 'translate3d(' + drag.x + 'px,' + drag.y + 'px,' + drag.z + 'px) ' + 'scale(' + scale + ')';
	}

	getContainerSize() {
		return {
			width: this.containerElement.getBoundingClientRect().width,
			height: this.containerElement.getBoundingClientRect().height
		}
	}

	getCurrentSize() {
		return {
			width: this.imageElement.getBoundingClientRect().width,
			height: this.imageElement.getBoundingClientRect().height
		}
	}

	//TODO handle resize as well
	getDefaultSize() {
	}
}
