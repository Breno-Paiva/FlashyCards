class Api::SubscriptionsController < ApplicationController
  def show
    @users = User.joins(:subscriptions)
                 .where(subscriptions: {subject_id: params[:id]})
  end

  def create
    # debugger
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

  end

  def subscription_params
    params.require(:subscription).permit(:subject_id)
  end
end
