class Card < ApplicationRecord
  validates :question, :answer, presence: true

  belongs_to :deck
end
