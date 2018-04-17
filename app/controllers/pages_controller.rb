class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @projects = Project.all
  end

  def inho_dashboard
    @projects = Project.all
    @user = current_user
    authorize @user
  end
end
