class AppointmentsController < ApplicationController
  def show
  end

  # def create
  #   @appointment = Appointment.new(appointment_params)
  #   @appointment.message = @message

  #   if @appointment.save
  #     redirect_to root_path
  #   else
  #     redirect_to root_path
  #   end
  # end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def appointment_params
    params.require(:appointment).permit(:appointment_type, :date, :address, :phone_number)
  end

  def find_message
    @message = Message.find(params[:message_id])
  end
end
