import { assert } from 'chai';
import { sinon } from 'sinon';

import SmartZoomComponentController from '../smart.zoom.component.controller';

let controller;

describe('Smart zoom component controller test', () => {
	beforeEach(() => {
		controller = new SmartZoomComponentController();
	});

	it('Should check title', () => {
		controller.$onInit();
		assert(controller.title, 'Smart zoom');
	});
});
