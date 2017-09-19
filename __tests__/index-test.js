import React from 'react';
import { NewsList, BigCards, MidCards, SmallCards } from '../app/index.js';
import renderer from 'react-test-renderer';

/* Invariant Violation: _registerComponent(...): Target container is not a DOM element.
this error occurs when I export obove components inside the same file which is calling ReactDOM.render.
jest.mock('react-dom') is used here to avoid the conflict*/
jest.mock('react-dom');


describe('whole webpage renders correctly', () => {
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
});
