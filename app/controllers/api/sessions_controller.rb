class Api::SessionsController < ApplicationController

  def create
  end

  def show
  end

  def destroy
    @user = current_user
    if @user
  end
end
