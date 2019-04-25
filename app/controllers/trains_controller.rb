class TrainsController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
    @trains = Train.all
  end

  def show
    @train = Train.find(params[:id])
  end

  protected

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      flash[:notice] = "You do not have access to this page"
    end
  end

end
