class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :user_id, :description, :up_votes, :down_votes, :votes, :current_user_vote_type, :current_users_vote

  has_many :votes

  def current_user_vote_type
    current_user_vote_type = nil
    if Vote.find_by(user_id: current_user.id, review_id: object.id)
      current_user_vote_type = Vote.find_by(user_id: current_user.id, review_id: object.id).vote_type
    end
  end

  def current_users_vote
    Vote.find_by(user_id: current_user.id, review_id: object.id)
  end
end
