require 'rails_helper'

  feature 'user add review;
   As a user
   I want to add a review
   So that I can comment on a train' do

   scenario 'user tries to add a review without being signed in' do
     user = User.create(email: 'hunu@gmail.com', password: 'password')
     red_line = Train.create(name: 'Red Line', description: "Works great all the time", founding_year: "1990-01-01")

     visit train_path(red_line)

     click_link 'Add a Review'

     expect(page).to have_content("You need to login or sign up to submit a review")
    end

  scenario 'user adds a review while signed in' do
   user = User.create(email: 'juju@gmail.com', password: 'password', password_confirmation: 'password')
   red_line = Train.create(name: 'red line', description: "This is a description", founding_year: "1990-01-01")

     sign_in(user)

     visit train_path(red_line)

     click_link 'Add a Review'

     choose '1'
     click_on 'Add Review'

    expect(page).to have_content("Review added successfully!")
    expect(page).to have_content("Rating: 1")
   end

   scenario 'user adds a review while signed in, but does not provide rating' do
     user = User.create(email: 'juju@gmail.com', password: 'password', password_confirmation: 'password')
     red_line = Train.create(name: 'red line', description: "This is a description", founding_year: "1990-01-01")

       sign_in(user)

       visit train_path(red_line)

       click_link 'Add a Review'

       fill_in "Description", with: "i like trains"
       click_on 'Add Review'

     expect(page).to have_content("Rating can't be blank")
   end
end
