class Api::SearchController < ApplicationController

  def show
    @subjects = Subject.where("LOWER (name) LIKE ?","%#{params[:id]}%")
  end

  def search_params
    params.require(:search).permit(:query)
  end
end
