Rails.application.routes.draw do

  root 'pages#home'

  resources :messages, only: [ :index, :show, :new, :create, :destroy ]
  resources :appointments, only: [ :index, :show, :destroy ]



  devise_for :users
  resources :projects

  get 'inho_dashboard', to: "pages#inho_dashboard"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
