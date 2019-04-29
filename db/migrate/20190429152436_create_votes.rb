class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.string :type, null: false

      t.belongs_to :user, null: false
      t.belongs_to :review, null: false

      t.timestamps null: false
    end
    add_index :votes, [:user_id, :review_id], unique: true
  end
end
