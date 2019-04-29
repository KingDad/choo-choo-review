class TrainSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :founding_year, :reviews

  has_many :reviews
end
