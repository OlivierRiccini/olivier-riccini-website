class RemoveEmailFromMessage < ActiveRecord::Migration[5.1]
  def change
    remove_column :messages, :email, :string
  end
end
