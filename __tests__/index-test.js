import React from 'react';
import { NewsList, BigCards, MidCards, SmallCards } from '../app/index.js';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

/* Invariant Violation: _registerComponent(...): Target container is not a DOM element.
this error occurs when I export obove components inside the same file which is calling ReactDOM.render.
jest.mock('react-dom') is used here to avoid the conflict*/
jest.mock('react-dom');


describe('this simple webpage', () => {
  it('BigCards renders correctly', () => {
    const component = renderer.create(<BigCards />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('MidCards renders correctly', () => {
    const component = renderer.create(<MidCards />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('SmallCards renders correctly', () => {
    const component = renderer.create(<SmallCards />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('NewsList renders correctly', () => {
    const component = renderer.create(<NewsList />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should handle the click event for BigCards', () => {
    window.alert = jest.fn();
    const output = shallow(<BigCards />);

    output.find('a').simulate('click');
    expect(window.alert).toHaveBeenCalledWith('clicked!');
  });

  it('should handle the click event for MidCards', () => {
    window.alert = jest.fn();
    const output = shallow(<MidCards />);

    output.find('a').simulate('click');
    expect(window.alert).toHaveBeenCalledWith('clicked!');
  });

  it('should handle the click event for SmallCards', () => {
    window.alert = jest.fn();
    const output = shallow(<SmallCards />);

    output.find('a').simulate('click');
    expect(window.alert).toHaveBeenCalledWith('clicked!');
  });

});
