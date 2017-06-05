class Api::SubscriptionsController < ApplicationController
  def show
    @users = User.joins(:subscriptions)
                 .where(subscriptions: {subject_id: params[:id]})
  end

  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.user_id = current_user.id
    if @subscription.save!
      # @user = current_user
      # @subject = Subject.find(subscription_params[:subject_id].to_i)
      # render "api/subjects/show"
      subjects = Subject.joins("LEFT OUTER JOIN subscriptions ON subjects.id = subscriptions.subject_id")
                         .where(id: subscription_params[:subject_id].to_i)
                         .includes(decks: :cards)
                         
      @subjects = [subjects[0]]
      render "api/search/show"
    else
      render json: @score.errors.full_messages, status: 422
    end
  end

  def destroy
    @subscription = Subscription.find_by subject_id: params[:id], user_id: current_user.id
    if @subscription.destroy
      # @user = current_user
      # @subject = Subject.find(params[:id].to_i)
      # render "api/subjects/show"
      subjects = Subject.joins("LEFT OUTER JOIN subscriptions ON subjects.id = subscriptions.subject_id")
                         .where(id: params[:id].to_i)
                         .includes(decks: :cards)
      @subjects = [subjects[0]]
      render "api/search/show"
    else
      render json: ["Error deleting"], status: 404
    end
  end

  def subscription_params
    params.require(:subscription).permit(:subject_id)
  end
end
