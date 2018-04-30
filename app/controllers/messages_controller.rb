class MessagesController < ApplicationController
  before_action :find_message, only: [ :show, :destroy ]
  skip_before_action :authenticate_user!

  def show
  end

  def create
    if User.where(email: params[:message][:user][:email]).exists?
      @user = User.where(email: params[:message][:user][:email]).take
    else
      @user = User.new(password: "123456")
      @user[:first_name] = params[:message][:user][:first_name]
      @user[:last_name] = params[:message][:user][:last_name]
      @user[:company] = params[:message][:user][:company]
      @user[:email] = params[:message][:user][:email]
      @user[:phone_number] = params[:message][:user][:phone_number]
      @user.save
    end
    @message = Message.new(message_params)
    @message[:user_id] = @user.id

    check_boxes_params = []

    if params[:message][:object].include? "appointment"
      check_boxes_params << "appointment"
    elsif params[:message][:object].include? "technical question"
      check_boxes_params << "technical question"
    elsif params[:message][:object].include? "about my projects"
      check_boxes_params << "about my projects"
    elsif params[:message][:object].include? "other"
      check_boxes_params << "other"
    end

    @message[:object] = check_boxes_params
    authorize @message

    @appointment = Appointment.new

    respond_to do |format|
      if @message.save
        @appointment[:message_id] = @message.id
        @appointment[:appointment_type] = params[:message][:appointment][:appointment_type]
        @appointment[:date] = params[:message][:appointment][:date]
        @appointment.save

        format.js
      else
        format.html { render "/" }
        format.js
      end
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
    params.require(:message).permit(:content)
  end

end
