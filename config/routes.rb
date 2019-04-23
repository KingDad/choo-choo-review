Rails.application.routes.draw do
  root 'trains#index'
  devise_for :users

  resources :trains

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
