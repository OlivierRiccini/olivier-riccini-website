class ProjectPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope
    end
  end

  def new?
    admin_list?
  end

  def create?
    admin_list?
  end

  def edit?
    admin_list?
  end

  def update?
    admin_list?
  end

  def destroy?
    admin_list?
  end

  private

  def admin_list?
    !user.nil? && user.admin
  end
end
