export default class ZoomService {
	constructor(ImageTransformService) {
		this.ImageTransformService = ImageTransformService;

		this.scale = 1;
		this.drag = {
			x: 0,
			y: 0,
			z: 0
		};
		this.scaleStep = 0.5;
	}

	calcScale($event) {
		let direction = $event.deltaY < 0 ? 1 : 0;
		let defaultSize = {
			width: 1307.2,
			height: 735.3
		};
		let prevSize = this.ImageTransformService.getCurrentSize();
		let containerSize = this.ImageTransformService.getContainerSize();
		let transformToDefault;
		let originalX;
		let originalY;

		if(prevSize.width > defaultSize.width) {
			transformToDefault = {
				x: ((prevSize.width - containerSize.width) / 2) + $event.clientX - this.drag.x,
				y: ((prevSize.height - containerSize.height) / 2) + $event.clientY - this.drag.y
			};

			originalX = defaultSize.width * (transformToDefault.x / prevSize.width);
			originalY = defaultSize.height * (transformToDefault.y / prevSize.height);
		} else {
			originalX = $event.clientX - Math.floor((containerSize.width - defaultSize.width) / 2);
			originalY = $event.clientY - Math.floor((containerSize.height - defaultSize.height) / 2);
		}

		this.scale += direction ? this.scaleStep : -this.scaleStep;

		let nextSize = {
			width: defaultSize.width * this.scale,
			height: defaultSize.height * this.scale
		};

		let scaledX = (originalX / defaultSize.width) * nextSize.width;
		let scaledY = (originalY / defaultSize.height) * nextSize.height;

		let translateX = $event.clientX - (scaledX - ((nextSize.width - containerSize.width) / 2));
		let translateY = $event.clientY - (scaledY - ((nextSize.height - containerSize.height) / 2));

		this.drag.x = translateX;
		this.drag.y = translateY;

		this.ImageTransformService.transformImage(this.scale, this.drag);
	}
}
