
@subjects.each do |subject|
  json.set! subject.id do
    json.extract! subject, :name
  end
end
