# == Schema Information
#
# Table name: cards
#
#  id         :integer          not null, primary key
#  question   :string           not null
#  answer     :string           not null
#  deck_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Card < ApplicationRecord
  validates :question, :answer, presence: true

  belongs_to :deck
  has_many :scores
end
