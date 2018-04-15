class Project < ApplicationRecord
  has_many :used_technologies
  has_many :technologies, through: :used_technologies

  mount_uploader :image, PhotoUploader
end
