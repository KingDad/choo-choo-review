import Review from '../../../app/javascript/react/components/Review.js'
import { mount } from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'
import React from 'react'

describe('review component', () => {
  let wrapper
  let review

  beforeEach(() => {
    jasmineEnzyme()

    review = {id:1, rating: 4, description: "Wow good", train_id: 1, user_id: 1, up_votes: 1, down_votes: 1,
    votes:[
      {id: 1, vote_type: "up", user_id: 3, review_id: 1},
      {id: 2, vote_type: "down",user_id: 2, review_id: 1}
    ]
  }

    let clickFunction = () => {
      return "click"
    }

    wrapper = mount(
      <Review
        review={review}
        color={"purple"}
        handleUpVote={clickFunction}
        handleDownVote={clickFunction}
        userID={1}
      />
    )
  })

  describe('details for a specific train', () => {
    it('lets a user click on the upvote button, raising the upvote count', () => {
      wrapper.find('.up-vote-button').simulate('click')
      expect(wrapper.find('.up-vote-button').text()).toEqual('2')
    })

    it('lets a user click on the downvote button, raising the downvote count', () => {
      wrapper.find('.down-vote-button').simulate('click')
      expect(wrapper.find('.down-vote-button').text()).toEqual('2')
    })

    it('lets a user click on the upvote button, raising the count just by one', () => {
      wrapper.find('.up-vote-button').simulate('click')
      expect(wrapper.find('.up-vote-button').text()).toEqual('2')
      wrapper.find('.up-vote-button').simulate('click')
      expect(wrapper.find('.up-vote-button').text()).toEqual('1')
    })

    it('lets a user click on the downvote button, raising the count just by one', () => {
      wrapper.find('.down-vote-button').simulate('click')
      expect(wrapper.find('.down-vote-button').text()).toEqual('2')
      wrapper.find('.down-vote-button').simulate('click')
      expect(wrapper.find('.down-vote-button').text()).toEqual('1')
    })

    it('lets a user click on the upvote button, raising the count just by one while reducing the downvote count by one', () => {
      wrapper.find('.up-vote-button').simulate('click')
      expect(wrapper.find('.up-vote-button').text()).toEqual('2')
      wrapper.find('.down-vote-button').simulate('click')
      expect(wrapper.find('.down-vote-button').text()).toEqual('2')
      expect(wrapper.find('.up-vote-button').text()).toEqual('1')
    })

    it('lets a user click on the downvote button, raising the count just by one while reducing the upvote count by one', () => {
      wrapper.find('.down-vote-button').simulate('click')
      expect(wrapper.find('.down-vote-button').text()).toEqual('2')
      wrapper.find('.up-vote-button').simulate('click')
      expect(wrapper.find('.up-vote-button').text()).toEqual('2')
      expect(wrapper.find('.down-vote-button').text()).toEqual('1')
    })

  })
})
