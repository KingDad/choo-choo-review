class Vote < ApplicationRecord
  validates :vote_type, presence: true
  validates :user, presence: true
  validates :review, presence: true

  belongs_to :user
  belongs_to :review
end
