class Api::DecksController < ApplicationController

  def index
    @current_user_id = current_user.id
    @decks = Deck.where(subject_id: params[:subject_id]).includes(cards: :scores)
  end

  def show
    @deck = Deck.find(params[:id])
  end

  def create
    @deck = Deck.new(deck_params)
    if @deck.save
      render :show
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end
  #
  # def update
  #   @subject = Subject.find(params[:id])
  #   if @subject.update(subject_params)
  #     render :show
  #   else
  #     render json: @subject.errors.full_messages, status: 422
  #   end
  # end
  #
  def destroy
    @deck = Deck.find(params[:id])
    if @deck.destroy
      render :show
    else
      render json: ["Error deleting"], status: 404
    end
  end
  #
  def deck_params
    params.require(:deck).permit(:name, :subject_id)
  end

end
