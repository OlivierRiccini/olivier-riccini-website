class MessagesController < ApplicationController
  before_action :find_message, only: [ :show, :destroy ]
  skip_before_action :authenticate_user!

  def show
  end

  def create
    @user = User.create(email: message_params[:email], password: "123456")
    @message = Message.new(message_params)
    @message[:user_id] = @user.id
    authorize @message
    @appointment = Appointment.new

    if @message.save
      @appointment[:message_id] = @message.id
      @appointment[:appointment_type] = params[:message][:appointment][:appointment_type]
      @appointment[:date] = params[:message][:appointment][:date]
      @appointment[:address] = params[:message][:appointment][:address]
      @appointment[:phone_number] = params[:message][:appointment][:phone_number]
      @appointment.save

      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  def destroy
    @message.destroy
    authorize @message
    redirect_to inho_dashboard_path
  end

  private

  def find_message
    @message = Message.find(params[:id])
  end

  def message_params
    params.require(:message).permit( :first_name, :last_name, :company,
                                     :email, :object, :content)
  end

  # def appointment_params
  #   params.require(:appointment).permit(:appointment_type, :date, :address, :phone_number)
  # end
end
