class Api::CardsController < ApplicationController

  def index
    @cards = Card.where(deck_id: params[:deck_id])
  end

  def show
    @card = Card.find(params[:id])
  end

  def create
    @card = Card.new(card_params)
    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def update
    @card = Card.find(params[:id])
    if @card.update(card_params)
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def destroy
    debugger
    @card = Card.find(params[:id])
    if @card.destroy
      render :show
    else
      render json: ["Error deleting"], status: 404
    end
  end

  def card_params
    params.require(:card).permit(:question, :answer, :deck_id)
  end


end
