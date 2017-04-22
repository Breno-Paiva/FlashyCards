Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :subjects, only: [:index, :create, :destroy, :show, :update] do
      resources :decks, only: [:index, :create]
    end
    resources :decks, only: [:show, :update, :destroy] do
      resources :cards, only: [:index, :create]
    end
    resources :cards, only: [:show, :update, :destroy]
  end

end
# resources: :subjects
# resources: :tags
