class MessagesController < ApplicationController
  before_action :find_message, only: [ :show, :destroy ]

  def show
  end

  def create
    User.create(email: message_params[:email], password: "123456")
    @message = Message.new(message_params)
    @message[:user_id] = User.last.id
    authorize @message

    if @message.save
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
end
