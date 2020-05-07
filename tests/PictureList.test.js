import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PictureList from '../client/src/Components/PictureList.jsx'

describe('PictureList', () => {
  const name = "beef burito";
  it('should display the name of the dish', () => {
    const wrapper = shallow(<PictureList name={name} />);
    expect(wrapper.contains("beef burito")).toBe(true)
  })
  const image = "https://loremflickr.com/320/240/meal?random=17";
  it('should display the image link of the dish', () => {
    const wrapper = shallow(<PictureList image={image} />);
    expect(wrapper.containsMatchingElement(<img src="https://loremflickr.com/320/240/meal?random=17"/>)).toBe(true)
  })

})