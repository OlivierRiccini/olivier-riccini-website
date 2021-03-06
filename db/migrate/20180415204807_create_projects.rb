class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :type
      t.text :content
      t.string :image
      t.string :link
      t.string :github

      t.timestamps
    end
  end
end
