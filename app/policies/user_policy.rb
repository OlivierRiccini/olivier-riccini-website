class UserPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope
    end
  end

  def inho_dashboard?
    admin_list?
  end

  def new?
    true
  end

  def create?
    true
  end

  private

  def admin_list?
    !user.nil? && user.admin
  end
end
