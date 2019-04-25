import Train from '../../../app/javascript/react/components/Train.js'
import { mount } from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'
import React from 'react'
import fetchMock from 'fetch-mock'


describe('train component', () => {
  let wrapper
  let batTrain

  beforeEach(() => {
    jasmineEnzyme()
    batTrain = {train: {id: 1, name: "Bat Train", description: "NaNaNaNaNa Bat Train", founding_year: "2020-03-27"} }

    fetchMock.get(`/api/v1/trains/${batTrain.train.id}`, {
      status: 200,
      body: batTrain
    })
    wrapper = mount(
      <Train
        params={ { id: batTrain.train.id } }
      />
    )
  })

  afterEach(fetchMock.restore)

  describe('details for a specific train', () => {
    it('render name of the train', (done) => {
      setTimeout(() =>{
      expect(wrapper.text()).toMatch(batTrain.train.name)
      done()
    }, 0)
    })
  })
})
