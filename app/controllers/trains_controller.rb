class TrainsController < ApplicationController

  def index
    @trains = Trains.all
  end

  def show
    @train = Train.find(params[:id])
    # @reviews = @train.reviews
  end

end
