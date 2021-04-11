Rails.application.routes.draw do
  root 'sessions#login'

  # resources :users 
  # resources :real_estates 
  # resources :expenses 

  namespace :api do
    namespace :v1 do

      namespace :admin do
        resources :users
        resources :real_estates
        resources :expenses
      end

      resources :users, except: :index do 
        resources :real_estates
        resources :expenses
      end
      
    end
  end

end