class Api::V1::VotesController < ApplicationController

  def create
    vote = Vote.find_by(review_id: params[:review_id], user_id: current_user.id)
    if !vote
      Vote.create(review_id: params[:review_id], vote_type: params[:vote_type], user_id: current_user.id)
    elsif vote.vote_type === params[:vote_type]
      vote.update(vote_type: "none")
    else
      vote.update(vote_type: params[:vote_type])
    end
  end
end
