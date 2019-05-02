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
          {id:1, rating: 4, description: "Wow good", train_id: 1, user_id: 1, up_votes: 1, down_votes: 1,
          votes:[
            {id: 1, vote_type: "up", user_id: 3, review_id: 1},
            {id: 2, vote_type: "down",user_id: 2, review_id: 1}
          ]
        },
          {id:2, rating: 5, description: "TRAINS RULE!", train_id: 1, user_id: 42, up_votes: 2, down_votes: 0,
          votes:[
            {id: 3, vote_type: "up",user_id: 42, review_id: 2},
            {id: 4, vote_type: "up",user_id: 4, review_id: 2}
          ]}
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

    it('render the upvote count', (done) => {
      setTimeout(() =>{
        expect(wrapper.find('.up-vote-button')).toBePresent()
        expect(wrapper.find('.up-vote-button').at(0).text()).toEqual('1')

        done()
      }, 0)
    })

    it('render the downvote count', (done) => {
      setTimeout(() =>{
        expect(wrapper.find('.down-vote-button')).toBePresent()
        expect(wrapper.find('.down-vote-button').at(0).text()).toEqual('1')

        done()
      }, 0)
    })

  })
})
