class Message < ApplicationRecord
  belongs_to :user
  has_one :appointment

  validates :email, presence: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  validates :tel, presence: true, format: { with: /[\+\d]{9,}/, message: "should only contain digits and '+'" }
  validates :object, presence: true
  validates :content, length: { minimum: 20, maximum: 500 }
end
