# == Schema Information
#
# Table name: decks
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  subject_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Deck < ApplicationRecord
  validates :name, presence: true

  belongs_to :subject
  has_many :cards

end
