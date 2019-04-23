require 'rails_helper'


describe Train do
  it { should have_valid(:name).when("Super Line") }
  it { should_not have_valid(:name).when('', nil) }
  it { should have_valid(:description).when("It's a really good train to get you somewhere") }
  it { should_not have_valid(:description).when("", nil) }
  it { should have_valid(:founding_year).when('1990-01-01') }
  it {should_not have_valid(:founding_year).when('', nil)}

  let(:train) {Train.create(name: 'Red Line', description: 'Its on fire!', founding_year: '1990-01-01')}
  it 'will create a model for a train object' do
    expect(train.name).to eq('Red Line')
    expect(train.description).to eq('Its on fire!')
    expect(train.founding_year).to eq(Date.parse('1990-01-01'))
    expect(train).to be_a(Train)
  end

  let(:train2) {Train.create(description: 'Its on fire!', founding_year: '1990-01-01')}
  it 'will create a model for a train object, and not validate due to lack of name' do
    expect(Train.all.length).to eq(0)
  end


  let(:train3) {Train.create(name: 'redline', founding_year: '1990-01-01')}
  it 'will create a model for a train object, and not validate due to lack of description' do
    expect(Train.all.length).to eq(0)
  end

  let(:train4) {Train.create(name: 'redline', description: 'Its on fire!' )}
  it 'will create a model for a train object, and not validate due to lack of date' do
    expect(Train.all.length).to eq(0)
  end

  let(:train5) {Train.create()}
  it 'will create a model for a train object, and not validate due to lack of name, date, and description' do
    expect(Train.all.length).to eq(0)
  end

end
