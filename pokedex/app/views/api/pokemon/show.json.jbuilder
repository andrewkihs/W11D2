json.pokemon do 
  json.set! @pokemon.id do
    json.extract! @pokemon, :id, :attack
  end
end
json.moves do 
  json.set! @pokemon do
    json.set! :id
  end
end

json.items do
  json.set! @pokemon do
    json.set! :id
  end
end