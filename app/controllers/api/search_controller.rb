class Api::SearchController < ApplicationController

  def show
    @subjects = Subject.joins("LEFT OUTER JOIN subscriptions ON subjects.id = subscriptions.subject_id")
                       .where("LOWER (name) LIKE ?","%#{params[:id]}%")
                       .includes(decks: :cards)
  end

  def search_params
    params.require(:search).permit(:query)
  end
end
