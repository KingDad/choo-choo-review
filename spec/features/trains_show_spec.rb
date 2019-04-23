require 'rails_helper'

feature 'User goes to the trains show page' do
  scenario 'displays train details' do
    train = Train.create!(name: "ruby", description: "starts at ignition and ends with rails", founding_year: "2011-12-10")
    visit train_path(train)
    expect(page).to have_content("ruby")
    expect(page).to have_content("starts at ignition and ends with rails")
    expect(page).to have_content(Date.parse("2011-12-10"))
  end
end
