class Api::SubscriptionsController < ApplicationController
  def show
    @users = User.joins(:subscriptions)
                 .where(subscriptions: {subject_id: params[:id]})
  end

  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.user_id = current_user.id

    if @subscription.save!
       subjects = ActiveRecord::Base.connection.exec_query(<<-SQL)
         SELECT
           subjects.id,
           subjects.name,
           max(CASE WHEN (subscriptions.user_id = #{current_user.id}) THEN 1 ELSE 0 END) AS subscribed,
           COUNT(DISTINCT decks.id) AS deck_count,
           COUNT(DISTINCT cards.id) AS card_count,
           COUNT(DISTINCT subscriptions.id) AS learner_count
         FROM
           subjects
         LEFT OUTER JOIN
           subscriptions ON subjects.id = subscriptions.subject_id
         LEFT OUTER JOIN
           decks ON subjects.id = decks.subject_id
         LEFT OUTER JOIN
           cards ON decks.id = cards.deck_id
         WHERE
           subjects.id = '#{subscription_params[:subject_id].to_i}'
         GROUP BY
           subjects.id
      SQL

      @subjects = [subjects[0]]
      render "api/search/show"
    else
      render json: @score.errors.full_messages, status: 422
    end
  end

  def destroy
    @subscription = Subscription.find_by subject_id: params[:id], user_id: current_user.id

    if @subscription.destroy
      subjects = ActiveRecord::Base.connection.exec_query(<<-SQL)
        SELECT
          subjects.id,
          subjects.name,
          max(CASE WHEN (subscriptions.user_id = #{current_user.id}) THEN 1 ELSE 0 END) AS subscribed,
          COUNT(DISTINCT decks.id) AS deck_count,
          COUNT(DISTINCT cards.id) AS card_count,
          COUNT(DISTINCT subscriptions.id) AS learner_count
        FROM
          subjects
        LEFT OUTER JOIN
          subscriptions ON subjects.id = subscriptions.subject_id
        LEFT OUTER JOIN
          decks ON subjects.id = decks.subject_id
        LEFT OUTER JOIN
          cards ON decks.id = cards.deck_id
        WHERE
          subjects.id = '#{params[:id].to_i}'
        GROUP BY
          subjects.id
      SQL

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
