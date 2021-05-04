# json.partial! 'api/guests/guest', collection: @guest, as: :guest
json.extract! @guest, :name, :age, :favorite_color

