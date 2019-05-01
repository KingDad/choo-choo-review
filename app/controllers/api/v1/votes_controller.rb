class Api::V1::VotesController < ApplicationController
  def create
    Vote.create(review_id: params[:review_id], vote_type: params[:vote_type], user_id: current_user.id)
  end

  def update
  end
end
