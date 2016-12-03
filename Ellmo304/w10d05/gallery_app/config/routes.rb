Rails.application.routes.draw do

  resources :exhibitions
  root 'galleries#index'

  get '/register', to: 'users#new'

  post '/register', to: 'users#create'

  get '/login', to: 'sessions#new'

  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'

  resources :galleries
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end