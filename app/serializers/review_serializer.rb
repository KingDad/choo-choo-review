class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :user_id, :description, :up_votes, :down_votes, :votes, :current_user_vote_type

  has_many :votes

  def current_user_vote_type
    current_user_vote_type = "none"
    if Vote.find_by(user_id: current_user.id, review_id: object.id)
      current_user_vote_type = Vote.find_by(user_id: current_user.id, review_id: object.id).vote_type
    end
  end

  # def current_users_vote
  #   Vote.find_by(user_id: current_user.id, review_id: object.id).id
  # end
end
