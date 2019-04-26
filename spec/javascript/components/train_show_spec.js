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
    batTrain = {train:
      {id: 1, name: "Bat Train", description: "NaNaNaNaNa Bat Train", founding_year: "2020-03-27",
        reviews: [
          {id:1, rating: 4, description: "Wow good", train_id: 1, user_id: 1},
          {id:2, rating: 5, description: "TRAINS RULE!", train_id: 1, user_id: 42}
        ]
      }
    }

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
      expect(wrapper.text()).toMatch(batTrain.train.reviews[0].description)
      expect(wrapper.text()).toMatch(batTrain.train.reviews[0].rating.toString())
      expect(wrapper.text()).toMatch(batTrain.train.reviews[1].description)
      expect(wrapper.text()).toMatch(batTrain.train.reviews[1].rating.toString())

      done()
    }, 0)
    })
  })
})
