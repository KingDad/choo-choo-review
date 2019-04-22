class TrainsController < ApplicationController
  def show
    @train = Train.find(parmams[:id])
  end
end
