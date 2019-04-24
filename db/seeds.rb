# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Train.delete_all

Train.create(name: "Blue Line", description: "this is a description", founding_year: "1872-06-13")
Train.create(name: "Green Line", description: "this is a green description", founding_year: "1612-06-13")
Train.create(name: "Red Line", description: "this is a red description", founding_year: "1312-06-13")
Train.create(name: "Silver Line", description: "this is a silver description", founding_year: "1523-06-13")
Train.create(name: "Orange Line", description: "this is a orange description", founding_year: "1212-06-13")
