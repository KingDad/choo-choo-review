class Api::V1::VotesController < ApplicationController
  def create
    if !Vote.find_by(review_id: [params:review_id], user_id: current_user.id)
      Vote.create(review_id: params[:review_id], vote_type: params[:vote_type], user_id: current_user.id)
    else
      render action: 'update'
    end

  end

  def update
    binding.pry
    Vote.update(review_id: params[:review_id], vote_type: params[:vote_type], user_id: current_user.id)
  end
end
