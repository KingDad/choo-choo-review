class Api::V1::VotesController < ApplicationController
  def create
    render json: Vote.create()
  end

  def update
  end
end
