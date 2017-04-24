Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :subjects, only: [:index, :create, :destroy, :show, :update] do
      resources :decks, only: [:index]
    end
    resources :decks, only: [:show, :update, :destroy, :create] do
      resources :cards, only: [:index]
    end
    resources :cards, only: [:show, :update, :destroy, :create]
  end

end
