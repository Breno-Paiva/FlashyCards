class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      t.integer :user_id, null: false
      t.integer :card_id, null: false
      t.integer :score, default: nil
      t.timestamps
    end
    add_index :scores, :user_id
    add_index :scores, :card_id
    add_index :scores, [:user_id, :card_id], unique: true
  end
end
