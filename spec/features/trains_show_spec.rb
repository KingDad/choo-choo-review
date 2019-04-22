require 'rails_helper'

feature 'User goes to the trains show page' do
  scenario 'displays train details' do
    Train.create(name: "ruby", description: "starts at ignition and ends with rails", founding_year: "2011-12-10")
    visit "/trains/1"
    expect(page).to have_content("ruby")
  end
end
