class TrainSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :founding_year, :user_id, :reviews

  has_many :reviews

  def user_id
    if current_user
      current_user.id
    end
  end

end
