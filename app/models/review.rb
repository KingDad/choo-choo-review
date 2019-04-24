class Review < ApplicationRecord
  validates :train, presence: true
  validates :rating,
    presence: true,
    numericality: {only_integer: true},
    inclusion: {in: RATINGS.map{|rating| rating[0]}}

  belongs_to :user
  belongs_to :train


  RATINGS = [
    [1, "1"],
    [2, "2"],
    [3, "3"],
    [4, "4"],
    [5, "5"]
   ]
end
