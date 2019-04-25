require 'rails_helper'

feature 'user navigates to index page of trains' do
  scenario "visitor sees the title of the page and a list of trains" do
    redline = Train.create!(name: 'Red Line', description: 'Its on fire!', founding_year: '1990-01-01')
    greenline = Train.create!(name: 'Green Line', description: 'oh no', founding_year: '1890-01-01')

    visit '/trains'

    expect(page).to have_content redline.name
    expect(page).to have_content greenline.name
  end
end
