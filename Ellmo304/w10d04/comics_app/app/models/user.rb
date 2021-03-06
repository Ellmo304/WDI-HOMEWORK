class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true, length: {minimum: 5}
  validates :email, presence: true, uniqueness: true
  validates :password_confirmation, presence: true, length: {minimum: 5}
end
