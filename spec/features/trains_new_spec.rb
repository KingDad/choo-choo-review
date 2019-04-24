require 'rails_helper'

feature "Train new page" do
  scenario "User visits new page" do
    visit '/trains/new'
    expect(page).to have_content("New Train Form")
    expect(page).to have_content("Name of Train")
    expect(page).to have_content("Description")
    expect(page).to have_content("Founding Date")
    expect(page).to have_selector("input", :count => 4)
  end
end
