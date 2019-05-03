# README
[![Codeship Status for KingDad/choo-choo-review](https://app.codeship.com/projects/c0f47e50-4752-0137-7f53-76ed84384a4f/status?branch=master)](https://app.codeship.com/projects/337479)

Name and brief description of the project:

                              Choo Choo Review
The website application helps users to check details of MBTA train-line. User can sign-in and see the list of train-lines ie (Red-line, Green-line, Orange-line, Blue-line). User can add reviews to these train-lines, reviews will contain rating and description. User can also give votes(upvote/downvote) for the reviews.

List of authors:
Andrew Haveles
Joe Tenore
Keegan Rankin
Peter Carlson
Tasneem Amreliwala

List of features included in the site:
See the list of train-lines
Review the train-lines
Vote(upvote/downvote) the reviews

Technologies in the project:
Git, codeship, Javascript, React.js, heroku, API integration, Ruby on Rails, carrierwave

* Ruby version - 2.4.5

* Configuration -

# Install gem dependencies
bundle install
yarn install

# Create database
bundle exec rake db:create

# Migrate database
bundle exec rake db:migrate

# Seed the Database
bundle exec rake db:seed

# Start the rails server
rails s

# Ruby test
bundle exec rspec

# Javascript test
yarn run test

# Deployment instruction
Deployed on heroku -
https://aqueous-castle-97449.herokuapp.com/

![Choo Choo Review home page](app/assets/images/choo-choo-home-page.png?raw=true "Choo Choo Review")

User story:
As a logged-out user,
I want to sign in to the website
So that I can access the sites features

Acceptance Criteria:
I should be able to fill in the “Username” and “Password” fields with my authentication credentials and should be able to sign in.

User story:
As a logged-in user,
I want to see the list of the train-lines,
So that I can navigate the website

Acceptance Criteria:
I should be able to see the list of all the train-lines when i visit my home page path (http://localhost:3000/trains)

User story:
As a logged-in user,
I want to see the details of the train-lines,
So that I can get can get an idea of how people feel about each train

Acceptance Criteria:
I should be able to see the details of train_lines, the reviews which have ratings and descriptions. The show page path should be (http://localhost:3000/trains/1)

User story:
As a logged-in user,
I want to be able to add a new review to a train's page,
so that I can share my opinions and experiences

Acceptance Criteria:
I should be able to click on the add review button and it should take me to the new review form. When I click submit I should be able to see the new review.

User story:
As a logged-in user,
I want to upvote or downvote any reviews,
so that I can share whether or not I think it is a helpful review

Acceptance Criteria:
I should be able to go to the path (http://localhost:3000/trains/1) and be able to give an upvote or a downvote and also be able to change or remove my vote.
