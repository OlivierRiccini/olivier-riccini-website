class RemoveFirstNameFromMessage < ActiveRecord::Migration[5.1]
  def change
    remove_column :messages, :first_name, :string
  end
end
