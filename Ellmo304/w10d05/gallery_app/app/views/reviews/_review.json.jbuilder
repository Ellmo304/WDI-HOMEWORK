json.extract! review, :id, :title, :author, :date, :body, :rating, :user_id, :exhibition_id, :created_at, :updated_at
json.url review_url(review, format: :json)