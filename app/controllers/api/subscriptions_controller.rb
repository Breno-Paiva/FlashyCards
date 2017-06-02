class Api::SubscriptionsController < ApplicationController
  def show
    @users = User.joins(:subscriptions)
                 .where(subscriptions: {subject_id: params[:id]})
  end

  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.user_id = current_user.id
    if @subscription.save!
      @user = current_user
      render "api/users/show"
    else
      render json: @score.errors.full_messages, status: 422
    end
  end

  def destroy
    @subscription = Subscription.find_by subject_id: params[:id], user_id: current_user.id
    if @subscription.destroy
      @user = current_user
      render "api/users/show"
    else
      render json: ["Error deleting"], status: 404
    end
  end

  def subscription_params
    params.require(:subscription).permit(:subject_id)
  end
end
