json.extract! comic, :id, :title, :author, :image, :issue, :created_at, :updated_at
json.url comic_url(comic, format: :json)