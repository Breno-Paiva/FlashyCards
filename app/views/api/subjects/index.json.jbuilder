@subjects.each do |subject|
  json.set! subject.id do
    json.partial! 'subject', subject: subject
  end
end
