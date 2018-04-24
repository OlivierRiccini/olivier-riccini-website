class RemovePhoneNumberFromAppointment < ActiveRecord::Migration[5.1]
  def change
    remove_column :appointments, :phone_number, :string
  end
end
