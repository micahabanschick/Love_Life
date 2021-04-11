Rails.application.routes.draw do
  root 'sessions#login'

  resources :users 
  resources :real_estates 
  resources :expenses 
end