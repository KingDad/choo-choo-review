Rails.application.routes.draw do
  root 'trains#index'
  devise_for :users

  resources :trains, only: [:index, :show, :new, :create]

  namespace :api do
    namespace :v1 do
      resources :trains, only: [:show]
    end
  end

end
