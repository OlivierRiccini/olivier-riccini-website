class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.string :type
      t.string :date
      t.string :address
      t.string :phone_number

      t.timestamps
    end
  end
end
