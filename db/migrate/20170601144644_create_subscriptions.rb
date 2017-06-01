class CreateSubscriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id, null: false
      t.integer :subject_id, null: false
      t.integer :score, default: nil
      t.timestamps
    end
    add_index :subscriptions, :user_id
    add_index :subscriptions, :subject_id
    add_index :subscriptions, [:user_id, :subject_id], unique: true
  end
end
