class RemoveScoresFromSubscription < ActiveRecord::Migration[5.0]
  def change
    remove_column :subscriptions, :score, :string
  end
end
