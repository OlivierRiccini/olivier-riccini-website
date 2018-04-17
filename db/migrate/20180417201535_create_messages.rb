class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :first_name
      t.string :last_name
      t.string :company
      t.string :email
      t.string :object
      t.text :content

      t.timestamps
    end
  end
end
