class AddPhoneNumberToAppointment < ActiveRecord::Migration[5.1]
  def change
    add_column :appointments, :phone_number, :string
  end
end
