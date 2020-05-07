import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/Components/App.jsx'


describe('App', () => {
  it('checks if App component exist', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toExist();
  });

});
