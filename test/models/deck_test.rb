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

require 'test_helper'

class DeckTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
