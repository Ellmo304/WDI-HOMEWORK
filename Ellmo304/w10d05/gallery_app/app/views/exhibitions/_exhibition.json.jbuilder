json.extract! exhibition, :id, :name, :artist, :opening_date, :closing_date, :image, :body, :created_at, :updated_at
json.url exhibition_url(exhibition, format: :json)