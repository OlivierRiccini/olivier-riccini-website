class ProjectsController < ApplicationController
  before_action :find_project, only: [ :show, :edit, :destroy ]

  def index
    @projects = Project.all
  end

  def show
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      redirect_to dashboard_path
    else
      render new_project_path
    end
  end

  def edit
    @project.update(project_params)

    redirect_to project_path(@project)
  end

  def update
  end

  def destroy
  end

  private

  def find_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:title, :content, :image, :link, :github, :project_type)
  end
end
