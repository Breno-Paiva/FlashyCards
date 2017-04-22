class Api::DecksController < ApplicationController

  def index
    @decks = Deck.where(subject_id: params[:subject_id])
  end

  def show
    @deck = Deck.find(params[:id])
  end

  # def create
  #   @deck = Subject.new(subject_params)
  #   if @subject.save
  #     render :show
  #   else
  #     render json: @subject.errors.full_messages, status: 422
  #   end
  # end
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
  # def destroy
  #   @subject = Subject.find(params[:id])
  #   if @subject.destroy
  #     render :show
  #   else
  #     render json: ["Error deleting"], status: 404
  #   end
  # end
  #
  # def subject_params
  #   params.require(:subject).permit(:name)
  # end

end
