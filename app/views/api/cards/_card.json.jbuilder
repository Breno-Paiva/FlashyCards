# debugger
# json.extract! card, :id, :question, :answer, :scores

  json.id card.id
  json.question card.question
  json.answer card.answer
  card.scores.each do |score|
    (json.score score.score) if score.user_id == current_user.id
  end
