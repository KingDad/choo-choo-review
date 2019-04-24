require 'rails_helper'

feature "Train new page" do
  scenario "Admin visits new page" do
    user = User.create(email: 'goodGuy@goodmail.com', password: 'iamsonice', password_confirmation: 'iamsonice', role: 'admin')
    visit '/'
    click_on 'Sign In'
    fill_in 'Email', with: 'goodGuy@goodmail.com'
    fill_in 'Password', with: 'iamsonice'
    click_on 'Log in'
    visit '/trains/new'
    expect(page).to have_content("New Train Form")
    expect(page).to have_content("Name of Train")
    expect(page).to have_content("Description")
    expect(page).to have_content("Founding Date")
    expect(page).to have_selector("input", :count => 4)
  end

  scenario "Admin submits a train successfully" do
    user = User.create(email: 'goodGuy@goodmail.com', password: 'iamsonice', password_confirmation: 'iamsonice', role: 'admin')
    visit '/'
    click_on 'Sign In'
    fill_in 'Email', with: 'goodGuy@goodmail.com'
    fill_in 'Password', with: 'iamsonice'
    click_on 'Log in'
    visit '/trains/new'
    fill_in 'Name of Train', with: 'Fun Line'
    fill_in 'Description', with: "It's a party up in here!"
    fill_in 'Founding Date', with: "2019-11-11"
    click_button 'Add Train'
    expect(page).to have_content('Fun Line')
  end
end
