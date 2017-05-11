json.extract! deck, :id, :name
card_amount = deck.cards.length
json.card_amount card_amount
total_score = 0
current_user_id = current_user.id
deck.cards.each do |card|
  card.scores.each do |score|
    if score.user_id == current_user_id
      total_score += score.score
    end
  end
end
json.total_score  total_score
