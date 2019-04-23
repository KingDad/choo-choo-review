Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
<<<<<<< HEAD
  namespace :api do
    namespace :v1 do
      resources :trains, only: [:show]
    end
  end
=======
  resources :trains, only: [:index, :show]
>>>>>>> b8bbdb21886a7454cccf77466b6888eac6f001e9
end
