# == Schema Information
#
# Table name: scores
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  card_id    :integer          not null
#  score      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Score < ApplicationRecord
  validates :user_id, :card_id, presence: true

  belongs_to :card
  belongs_to :user
end
