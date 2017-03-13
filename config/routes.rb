Rails.application.routes.draw do
  devise_for :users
  resources :fireworks


  get "firework-app",       controller: "firework_app", action: "index"
  get "firework-app/*path", controller: "firework_app", action: "index"
  namespace :api do
    resources :fireworks
  end
  
  root to: "fireworks#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
