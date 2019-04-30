class Review < ApplicationRecord
  validates :train, presence: true
  validates :rating, presence: true

  belongs_to :user
  belongs_to :train
  has_many :votes

  def up_votes
    up_votes = 0
    votes.each do |vote|
      if vote.vote_type == 'up'
        up_votes += 1
      end
    end
    up_votes
  end

  def down_votes
    down_votes = 0
    votes.each do |vote|
      if vote.vote_type == 'down'
        down_votes += 1
      end
    end
    down_votes
  end
end
