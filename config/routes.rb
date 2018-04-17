Rails.application.routes.draw do

  devise_for :users
  root 'pages#home'
  resources :projects

  get 'inho_dashboard', to: "pages#inho_dashboard"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
