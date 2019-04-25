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
      #@rating_collection = Review::RATINGS
      render :new
    end
  end

  def review_params
    params.require(:review).permit(:rating, :description)
  end

  protected

  def authorize_user
    if !user_signed_in?
      flash[:notice] = "You do not have access to this page"
    end
  end


end
