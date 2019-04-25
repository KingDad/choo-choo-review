require "rails_helper"

RSpec.describe Api::V1::TrainsController, type: :controller do
  let!(:first_train) { Train.create(
    name: "Rainbow",
    description: "starts in your heart and ends in your dreams!",
    founding_year: "1000-01-01"
  ) }

  describe "GET#show" do
    it "should show us information on a train" do

      get :show, params: {id: first_train}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["train"]["name"]).to eq first_train[:name]
      expect(returned_json["train"]["description"]).to eq first_train[:description]
      expect(returned_json["train"]["founding_year"]).to eq "1000-01-01"
    end
  end
end
