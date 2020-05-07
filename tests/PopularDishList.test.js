import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PopularDishList from '../client/src/Components/PopularDishList.jsx'
import PictureList from '../client/src/Components/PictureList.jsx'

describe('PopularDishList', () => {

  it('should check if prop exist', () => {
    const wrapper = mount(<PictureList back={()=>{}}/>)
    expect(wrapper).toExist();
  });
  // const mockFunc = jest.fn();

  // it('should mock a call to mockFunc on button click', () => {
  //   const dishes = [
  //     { id: 72, dish: "vegetables soup", id_restaurants: 7, images: "https://loremflickr.com/320/240/meal?random=20" },
  //     { id: 47, dish: "beef burito", id_restaurants: 7, images: "https://loremflickr.com/320/240/meal?random=17" }
  //   ]
  //   function selectDishes() {}
  //   const wrapper = shallow(
  //     <PopularDishList dishes={dishes} selectDishes={selectDishes}/>,
  //   )
  //   dishes.forEach(dish => {
  //     expect(wrapper.contains(
  //       <PictureList dish={dish} selectDishes={selectDishes}/>,
  //     ),
  //     ).toBe(true)
  //   })
  //  })
  // })

})