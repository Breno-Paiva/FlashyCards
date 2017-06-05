# json.partial! 'subject', subject: @subject

json.extract! @subject, :id, :name
json.decks @subject.decks
cards = []
scoresp = 0
score_count = 0


current_user_id = current_user.id
@subject.decks.each do |deck|
  deck_sum = 0
  deck_count = 0
  deck.cards.each do |card|
    card.scores.each do |score|
      if score.user_id == current_user_id
        deck_sum += score.score
      end
    end
    deck_count += 1
  end
  avg_deck_score = 0
  if deck_sum != 0
    avg_deck_score = (deck_sum/deck_count.to_f*20)
  end
  scoresp += avg_deck_score
  score_count += 1
end

ans = 0
if scoresp != 0
  ans = (scoresp/score_count).round
end

json.scores ans
