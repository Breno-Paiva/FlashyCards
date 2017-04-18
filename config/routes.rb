Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
  end

end
# resources: :cards, only: [:index, :create, :show, :update, :destroy]
# resources: :decks, only: []
# resources: :subjects, only: []
# resources: :tags, only: []
