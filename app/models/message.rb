class Message < ApplicationRecord
  belongs_to :user
  has_one :appointment

  validates :content, length: { minimum: 20, maximum: 500 }
end
