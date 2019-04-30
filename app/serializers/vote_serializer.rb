class VoteSerializer < ActiveModel::Serializer
  attributes :vote_type, :user_id
end
