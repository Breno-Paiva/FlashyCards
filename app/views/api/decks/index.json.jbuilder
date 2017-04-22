@decks.each do |deck|
  json.set! deck.id do
    json.partial! 'deck', deck: deck
  end
end
