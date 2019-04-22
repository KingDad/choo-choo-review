class CreateTrains < ActiveRecord::Migration[5.2]
  def change
    create_table :trains do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.date :founding_year, null: false
      t.timestamps null: false
    end
  end
end
