Rails.application.routes.draw do
  root 'trains#index'
  devise_for :users

  resources :trains, only: [:index, :show, :new, :create] do
    resources :reviews, only: [:new, :create, :show]
  end
end
