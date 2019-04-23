require 'rails_helper'


describe Train do
  it { should have_valid(:name).when("Super Line") }
  it { should_not have_valid(:name).when('', nil) }
  it { should have_valid(:description).when("It's a really good train to get you somewhere") }
  it { should_not have_valid(:description).when("", nil) }
  it { should have_valid(:founding_year).when('1990-01-01') }
  it {should_not have_valid(:founding_year).when('', nil)}
end
