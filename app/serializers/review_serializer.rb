class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :user_id, :description, :up_votes, :down_votes, :votes, :current_user_vote_type

  has_many :votes
  def current_user_vote_type
    current_user_vote_type = ""
    if Vote.find_by(user_id: current_user)
      current_user_vote_type = Vote.find_by(user_id: current_user).vote_type
    end
  end
end
