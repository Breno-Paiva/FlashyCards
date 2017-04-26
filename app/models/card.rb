class Card < ApplicationRecord
  validates :question, :answer, presence: true

  belongs_to :deck
  has_many :scores
end
