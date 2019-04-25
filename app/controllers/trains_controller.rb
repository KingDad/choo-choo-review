class TrainsController < ApplicationController

  before_action :authorize_user, except: [:index, :show]

  def index
    @trains = Train.all
  end

  def show
    @train = Train.find(params[:id])
  end

  def new
    @train = Train.new
  end

  def create
    @train = Train.new(train_params)

    if @train.save
      flash[:notice] = "Train added successfully"
      redirect_to @train
    else
      render action: 'new'
    end
  end

  private

  def train_params
    params.require(:train).permit(:name, :description, :founding_year)
  end

  protected

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      redirect_to '/users/sign_in'
    end
  end

end
