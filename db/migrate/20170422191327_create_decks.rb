class CreateDecks < ActiveRecord::Migration[5.0]
  def change
    create_table :decks do |t|
      t.string :name, null: false
      t.integer :subject_id, null: false
      t.timestamps
    end

    add_index :decks, :subject_id
  end
end
