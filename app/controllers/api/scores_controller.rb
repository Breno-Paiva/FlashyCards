class Api::ScoresController < ApplicationController
  def create
    @score = Score.new(score_params)
    @score.user_id = current_user.id
    if @score.save!
      debugger
      @card = Card.find(score_params[:card_id])
      render "api/cards/show"
    else
      render json: @score.errors.full_messages, status: 422
    end
  end

  def update
    @score = Score.find_by_user_id_and_card_id(current_user.id, score_params[:card_id].to_i)
    if @score.update(score: score_params[:score].to_i)
      @card = Card.find(score_params[:card_id])
      render "api/cards/show"
    else
      render json: @score.errors.full_messages, status: 422
    end
  end

  def score_params
    params.require(:score).permit(:score, :card_id)
  end
end
