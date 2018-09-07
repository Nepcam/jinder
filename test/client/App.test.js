import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'
import './setup-dom'

// test('App contains an <input> element', () => {
//   const wrapper = shallow(<App />)
//   expect(wrapper.find('input').text()).toBe('Jinder')
// })


test('App reading .title text', () => {
  //arrange
  let expected = 'Job Type:'
  const wrapper = shallow(<App />)

  //act

  //assert
  expect(wrapper.find('.title').text()).toEqual(expected)

  // const input = shallow(<App searchTerm="search" location="location"/>)
  // expect(input.text()).toEqual('search');
  // input.find('input').simulate('change');
  // expect(input.text()).toEqual('location');
})

test('Input equals true', () => {

  // let expected = 

  const wrapper = shallow(<App />)

  expect(wrapper.containsMatchingElement(<input/>)).toEqual(true)

  // expect(wrapper.find('.searchInput'))
})

test('testing state object', () => {

  let expected = {
    bath: true,
    bedrooms: 4,
    kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    area: 20,
    wallColor: 'white',
    },
  }

  const wrapper = shallow(<App />)

  expect()
})


