class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
    @projects = Project.all
    @admin = User.where(admin: true, email: "info@olivierriccini.com").take
    @message = Message.new
  end

  def inho_dashboard
    @projects = Project.all
    @user = current_user
    authorize @user
  end
end
