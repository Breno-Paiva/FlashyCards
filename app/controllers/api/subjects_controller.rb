class Api::SubjectsController < ApplicationController

  def index
    @subjects = Subject.all
    render "api/subjects"
  end

  def show
    @subject = Subject.find(params[:id])
    render "api/subjects/show/#{@subject.id}"
  end

  def create
    @subject = Subject.new(params[:name])
    if @subject.save
      render "api/subjects/show/#{@subject.id}"
    else
      render json: @subject.errors.full_messages, status: 422
    end
  end

  def update
    @subject = Subject.find(params[:id])
    if @subject.update(params[:name])
      render "api/subjects/show/#{@subject.id}"
    else
      render json: @subject.errors.full_messages, status: 422
    end
  end

  def destroy
    @subject = Subject.find(params[:id])
    if @subject.destroy
      render "api/subjects/show/#{@subject.id}"
    else
      render json: ["Error deleting"], status: 404
    end
  end
end
