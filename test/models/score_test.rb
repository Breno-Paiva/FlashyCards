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

require 'test_helper'

class ScoreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
