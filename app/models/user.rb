class User < ApplicationRecord
  has_many :messages
  has_many :appointments, :through => :messages
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable,
  devise :database_authenticatable, :recoverable,
         :rememberable, :trackable, :validatable,
         :registerable

  mount_uploader :avatar, AvatarUploader
end
