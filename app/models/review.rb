class Review < ApplicationRecord
  validates :train, presence: true
  validates :rating, presence: true

  belongs_to :user
  belongs_to :train
end
