@subjects.each do |subject|
  json.set! subject.id do
    json.extract! subject, :id, :name
    json.deck_count subject.decks.length
    # json.deck_count 1

    card_count = 0
    subject.decks.each do |deck|
      card_count += deck.cards.length
    end
    json.card_count card_count

    json.learner_count subject.subscriptions.length
    # json.learner_count 1

    subscribed = false
    subject.subscriptions.each do |sub|
      subscribed = true if sub.user_id == current_user.id
    end
    json.subscribed  subscribed
  end
end
