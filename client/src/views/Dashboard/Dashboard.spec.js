"use strict";

import React 		from 'react';
import ReactDom 	from 'react-dom';
import TestUtils 	from 'react-dom/test-utils';
import Dashboard 	from './Dashboard';

describe("Dashboard", function() {
	var dash;

	beforeEach(()	=>	{
		dash = TestUtils.renderIntoDocument(<Dashboard />);
	})
  /*it("should display correctly!", function() {
      expect(dash.type).toEqual('div');
  });*/
  	it('Displays text',()  =>  {
  		expect(ReactDom.findDOMNode(dash).textContent).toEqual('Hello World!');
  	})
  	it('have the right classes',()  =>  {
  		expect(ReactDom.findDOMNode(dash).className).toEqual('animated fadeIn');
  	})
});
