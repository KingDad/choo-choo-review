class Api::V1::TrainsController < ApplicationController
  def show
    render json: Train.find(params[:id])
  end
end
