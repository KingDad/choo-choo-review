require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

describe "user" do

  it "should default role to 'member'" do
    user = User.create(email: "iLikeToDanceAlone@gmail.com", password: "password", password_confirmation: "password")
    expect(user.role).to eq('member')
  end
  
end
