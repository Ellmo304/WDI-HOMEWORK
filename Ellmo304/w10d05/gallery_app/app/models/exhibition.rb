class Exhibition < ApplicationRecord
  belongs_to :gallery
  has_many :reviews
end
