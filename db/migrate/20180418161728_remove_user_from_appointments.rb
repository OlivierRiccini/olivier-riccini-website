class RemoveUserFromAppointments < ActiveRecord::Migration[5.1]
  def change
    remove_reference :appointments, :user, foreign_key: true
  end
end
