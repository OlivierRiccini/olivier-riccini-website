class RemoveUserFromMessage < ActiveRecord::Migration[5.1]
  def change
    remove_reference :messages, :user, foreign_key: true
  end
end
