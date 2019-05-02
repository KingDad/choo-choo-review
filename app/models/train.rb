class Train < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :founding_year, presence: true

  has_many :reviews
end
