import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/Components/App.jsx'
import PictureList from '../client/src/Components/PictureList.jsx'

// describe('App', () => {
//   it('it should be true', () => {
//     const boo = true;
//     expect(boo).toBe (true);
//   });
// });

describe('App', () => {
  it('checks if App component exist', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toExist();

  });
  it('should render correctly with no props', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render text correctly with passing in props', () => {
    const texts = ['one', 'two']
    const wrapper = shallow(<App numText={texts}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<PictureList /> rendering', () => {
  it('should render <div>', () => {
    const wrapper = shallow(<PictureList/>);
    expect(wrapper.find('div')).toHaveLength(17);
  });

})