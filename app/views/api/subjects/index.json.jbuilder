@subjects.each do |subject|
  # debugger
  json.set! subject.id do
    json.partial! 'subject', subject: subject
  end
end
