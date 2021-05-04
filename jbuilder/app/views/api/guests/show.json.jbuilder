json.array!(@guests) do |guest|
  json.extract!(guest.name, guest.age, guest.favorite_color)
end