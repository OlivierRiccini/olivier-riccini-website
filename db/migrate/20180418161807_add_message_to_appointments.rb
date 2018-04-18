class AddMessageToAppointments < ActiveRecord::Migration[5.1]
  def change
    add_reference :appointments, :message, foreign_key: true
  end
end
