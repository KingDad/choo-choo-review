class ReviewsController < ApplicationController
  before_action :authorize_user

  def new
    @train = Train.find(params[:train_id])
    @review = Review.new
    @review.user = current_user
  end

  def create
    @train = Train.find(params[:train_id])
    @review = Review.new(review_params)
    @review.train = @train
    @review.user = current_user

    if @review.save
      flash[:notice] = "Review added successfully!"
      redirect_to @review.train
    else
      flash[:error] = @review.errors.full_messages.to_sentence
      render :new
    end
  end

  def review_params
    params.require(:review).permit(:rating, :description)
  end

  protected

  def authorize_user
    if !user_signed_in?
      flash[:notice] = "You need to login or sign up to submit a review"
      redirect_to '/users/sign_up'
    end
  end
end
