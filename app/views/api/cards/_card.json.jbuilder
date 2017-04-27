  json.id card.id
  json.question card.question
  json.answer card.answer
  if card.scores
    card.scores.each do |score|
      (json.score score.score) if score.user_id == current_user.id
    end
  end
