class RemoveLastNameFromMessage < ActiveRecord::Migration[5.1]
  def change
    remove_column :messages, :last_name, :string
  end
end
