class TrainSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :founding_year
end
