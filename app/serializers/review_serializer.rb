class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :user_id, :description, :up_votes, :down_votes
end
