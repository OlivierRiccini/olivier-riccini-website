class RemoveCompanyFromMessage < ActiveRecord::Migration[5.1]
  def change
    remove_column :messages, :company, :string
  end
end
