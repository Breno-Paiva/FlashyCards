@subjects.each do |subject|
  json.set! subject.id do
    json.extract! subject, :id, :name
    json.deck_count subject.decks.length

    card_count = 0
    subject.decks.each do |deck|
      card_count += deck.cards.length
    end

    json.card_count card_count
    json.learner_count subject.subscriptions.length
    json.subscribed false
  end
end
