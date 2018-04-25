class MessagesController < ApplicationController
  before_action :find_message, only: [ :show, :destroy ]
  skip_before_action :authenticate_user!

  def show
  end

  # def create
  #   @user = User.create(email: message_params[:email],
  #                       first_name: message_params[:first_name],
  #                       last_name: message_params[:last_name],
  #                       company: message_params[:company],
  #                       phone_number: message_params[:phone_number],
  #                       password: "123456")
  #   @message = Message.new(message_params)
  #   @message[:user_id] = @user.id
  #   authorize @message
  #   @appointment = Appointment.new

  #   if @message.save
  #     @appointment[:message_id] = @message.id
  #     @appointment[:appointment_type] = params[:message][:appointment][:appointment_type]
  #     @appointment[:date] = params[:message][:appointment][:date]
  #     @appointment.save
  #     redirect_to root_path
  #   else
  #     redirect_to root_path
  #   end
  # end

  # def create
  #   @user = User.new(first_name: params[:first_name], last_name: params[:last_name], company: params[:company],
  #                    email: params[:email], phone_number: params[:phone_number], password: "123456")

  #   if @user.save
  #     @message = Message.new(message_params)
  #     @message[:user_id] = @user.id
  #     authorize @message
  #     if @message.save
  #        @appointment = Appointment.new(appointment_params)

  #       @appointment[:message_id] = @message.id
  #       if @appointment.save
  #           redirect_to root_path
  #       else
  #          redirect_to root_path
  #       end
  #     end
  #   end
  # end


  def create
    @user = User.new(password: "123456")
    @user[:first_name] = params[:message][:user][:first_name]
    @user[:last_name] = params[:message][:user][:last_name]
    @user[:company] = params[:message][:user][:company]
    @user[:email] = params[:message][:user][:email]
    @user[:phone_number] = params[:message][:user][:phone_number]
    if @user.save
      @message = Message.new(message_params)
      @message[:user_id] = @user.id
      authorize @message
      @appointment = Appointment.new

      if @message.save
        @appointment[:message_id] = @message.id
        @appointment[:appointment_type] = params[:message][:appointment][:appointment_type]
        @appointment[:date] = params[:message][:appointment][:date]
        @appointment.save

        redirect_to root_path
      else
        render root_path
      end
    end
  end

  # def create
  #   @user = User.new(first_name: params[:first_name], last_name: params[:last_name], company: params[:company],
  #                    email: params[:email], phone_number: params[:phone_number], password: "123456")

  #   if @user.save
  #     @message = Message.new(message_params)
  #     @message[:user_id] = @user.id
  #     authorize @message
  #     if @message.save
  #        @appointment = Appointment.new(appointment_params)

  #       @appointment[:message_id] = @message.id
  #       if @appointment.save
  #           redirect_to root_path
  #       else
  #          redirect_to root_path
  #       end
  #     end
  #   end
  # end







  def destroy
    @message.destroy
    authorize @message
    redirect_to inho_dashboard_path
  end

  private

  def user_params
    params.require(:user).permit( :first_name, :last_name, :company,
                                  :email, :phone_number)
  end

  def appointment_params
    params.require(:appointment).permit( :appointment_type, :date)
  end

  def find_message
    @message = Message.find(params[:id])
  end

  # def message_params
  #   params.require(:message).permit( :first_name, :last_name, :company,
  #                                    :email, :object, :phone_number, :content)
  # end

  def message_params
    params.require(:message).permit( :object, :content)
  end

end
