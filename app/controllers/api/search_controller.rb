class Api::SearchController < ApplicationController

  def show
    @subjects = ActiveRecord::Base.connection.exec_query(<<-SQL)
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
        LOWER(subjects.name) LIKE LOWER('%#{params[:id]}%')
      GROUP BY
        subjects.id
    SQL
  end

  def search_params
    params.require(:search).permit(:query)
  end
end
