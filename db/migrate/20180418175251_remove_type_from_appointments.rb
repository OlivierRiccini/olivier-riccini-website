class RemoveTypeFromAppointments < ActiveRecord::Migration[5.1]
  def change
    remove_column :appointments, :type, :string
  end
end
