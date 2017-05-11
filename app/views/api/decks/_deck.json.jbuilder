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
if total_score != 0
  total_score = total_score/card_amount*20
end
json.avg_score  total_score
