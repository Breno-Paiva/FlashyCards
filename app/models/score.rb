class Score < ApplicationRecord
  validates :user_id, :card_id, presence: true

  belongs_to :card
  belongs_to :user
end
