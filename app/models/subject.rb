class Subject < ApplicationRecord
  validates :name, presence: true
  # has_many subject_subscriptions

end
