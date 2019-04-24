class ReviewsController < ApplicationController
  before_action :authorize_user


  def new
    @train = Train.find(params[:train_id])
    @review = Review.new
    @rating_collection = [
      [1, "1"],
      [2, "2"],
      [3, "3"],
      [4, "4"],
      [5, "5"]
     ]

  end

  def create
    @train = Train.find(params[:train_id])
    @reviews = Review.new(review_params)
    @review.train = @train

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
      flash[:notice] = "You do not have access to this page"
    end
  end


end
