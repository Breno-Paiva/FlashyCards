@subjects.each do |subject|

  json.set! subject['id'] do
    json.id subject['id']
    json.name subject['name']
    json.deck_count subject['deck_count']
    json.card_count subject['card_count']
    json.learner_count subject['learner_count']

    if subject['subscribed'] == 1
      subscribed = true
    else
      subscribed = false
    end

    json.subscribed subscribed
  end
end
