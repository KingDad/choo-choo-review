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
