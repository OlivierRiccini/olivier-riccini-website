class RemoveAddressFromAppointment < ActiveRecord::Migration[5.1]
  def change
    remove_column :appointments, :address, :string
  end
end
