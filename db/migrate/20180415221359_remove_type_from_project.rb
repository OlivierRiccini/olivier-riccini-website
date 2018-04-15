class RemoveTypeFromProject < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :type, :string
  end
end
