json.extract! gallery, :id, :name, :address, :nearest_tube, :image, :body, :created_at, :updated_at
json.url gallery_url(gallery, format: :json)