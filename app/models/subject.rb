# == Schema Information
#
# Table name: subjects
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subject < ApplicationRecord
  validates :name, presence: true
  has_many :decks

  # has_many subject_subscriptions
end
