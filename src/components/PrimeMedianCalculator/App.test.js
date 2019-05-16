import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme , {shallow,mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16"
import App from './App';
import {MedianList,Form} from './App';

Enzyme.configure({adapter : new Adapter()});

// Testing App as a whole
test('Application Renders', () => {
  const div = document.createElement('div');
  ReactDOM.render( <App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Testing The MedianList component
describe('Check Median List component is rendered when props are input', () => {
	let mockResult  = [2,3]
	test('renders',() => {
		const wrapper = shallow(<MedianList result={mockResult}/>);
		expect(wrapper.exists()).toBe(true);
	});
});

describe('Check MedianList component displays results when props are input', () => {
	let mockResult  = [2,3]
	test('created two list items for result 2,3',() => {
		const wrapper = shallow(<MedianList result={mockResult}/>);
		expect(wrapper.find("li")).toHaveLength(2);
	});
});

// Testing the Form component
test('Check letters cannot be input', () => {
	const wrapper = shallow(<Form setMedianResult={()=>{}}/>);
	wrapper.find("input").simulate("change", {
		target : {value: "random"}
	});
	expect(wrapper.find("input").props().value).toEqual("");
});

test('Check integers can be input', () => {
	const wrapper = shallow(<Form setMedianResult={()=>{}}/>);
	wrapper.find("input").simulate("change", {
		target : {value: 2}
	});
	expect(wrapper.find("input").props().value).toEqual(2);
});


