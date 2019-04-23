require 'rails_helper'


describe Train do
  let(:train) {Train.create(name: 'Red Line', description: 'Its on fire!', founding_year: '1990-01-01')}
  it 'will create a model for a train object' do
    expect(train.name).to eq('Red Line')
    expect(train.description).to eq('Its on fire!')
    expect(train.founding_year).to eq(Date.parse('1990-01-01'))
    expect(train).to be_a(Train)
  end
end
