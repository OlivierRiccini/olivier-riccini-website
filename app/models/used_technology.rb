class UsedTechnology < ApplicationRecord
  belongs_to :project
  belongs_to :technology
end
