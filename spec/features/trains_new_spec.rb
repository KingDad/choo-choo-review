require 'rails_helper'

feature "Train new page" do
  scenario "Admin visits new page" do
    user = User.create(email: 'goodGuy@goodmail.com', password: 'iamsonice', password_confirmation: 'iamsonice', role: 'admin')
    sign_in(user)
    visit '/trains/new'
    expect(page).to have_content("NEW TRAIN FORM")
    expect(page).to have_content("Name of Train")
    expect(page).to have_content("Description")
    expect(page).to have_content("Founding Date")
    expect(page).to have_selector("input", :count => 4)
  end

  scenario "Admin submits a train successfully" do
    user = User.create(email: 'goodGuy@goodmail.com', password: 'iamsonice', password_confirmation: 'iamsonice', role: 'admin')
    sign_in(user)
    visit '/trains/new'
    fill_in 'Name of Train', with: 'Fun Line'
    fill_in 'Description', with: "It's a party up in here!"
    fill_in 'Founding Date', with: "2019-11-11"
    click_button 'Add Train'
    expect(page).to have_content('Train added successfully!')
  end

  scenario "Admin submits a train unsuccessfully" do
    user = User.create(email: 'goodGuy@goodmail.com', password: 'iamsonice', password_confirmation: 'iamsonice', role: 'admin')
    sign_in(user)
    visit '/trains/new'
    click_button 'Add Train'
    expect(page).to have_content("Name can't be blank")
    expect(page).to have_content("Description can't be blank")
    expect(page).to have_content("Founding year can't be blank")
  end
end
