class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :resume_online, :resume_pdf ]

  def home
    @projects = Project.all
    @technologies = Technology.all
    @admin = User.where(admin: true, email: "info@olivierriccini.com").take
    @user = User.new
    @message = Message.new
    @appointment = Appointment.new
  end

  def inho_dashboard
    @projects = Project.all
    @user = current_user
    authorize @user
  end

  def resume_online
  end

  def resume_pdf
  end
end
