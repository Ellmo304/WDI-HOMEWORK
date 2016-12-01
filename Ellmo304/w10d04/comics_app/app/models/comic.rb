class Comic < ApplicationRecord
  validates :title, presence: true, length: {minimum: 3}
  validates :author, presence: true, length: {minimum: 5}
  validates :issue, presence: true
end
